import {changeVisibility} from "./webMechanics/Router.js";

//klasa silnika uruchamiająca gre
export class QuizEngine {

    constructor(settings, tableOfPlayers, tableOfQuestions) {
        this.settings = settings;
        this.tableOfPlayers = tableOfPlayers;
        this.tableOfQuestions = tableOfQuestions;
        this.currentTurnId = 0;

        this.gameState = {
            isRunning: false,
            currentRound: 0,
            currentPlayerIndex: 0,
            baseQuestions: [],
            playerQuestions: []
        };
    }

    /* =======================
       PUBLIC API
    ======================= */

    async startQuiz() {
        if (this.gameState.isRunning) {
            console.warn("Gra już trwa – resetuję ją bezpiecznie");
            this.resetGame();
        }

        try {
            this.initGame();
        } catch (e) {
            console.warn("Nie można uruchomić gry:", e.message);
            return;
        }

        this.gameState.isRunning = true;
        await this.runGame();
        this.gameState.isRunning = false;

        console.log("Gra zakończona");

        const summaryEl = document.getElementById("summaryPage");
        const pointsDiv = document.createElement("div");
        const achievementsDiv = document.createElement("div");
        const pointsDivH = document.createElement("h1");
        const achievementsDivH = document.createElement("h1");

        pointsDiv.id = "summaryPagePointsDivId";
        achievementsDiv.id = "summaryPageAchievementsDivId";

        pointsDivH.textContent = "Punktacja"
        achievementsDivH.textContent = "Osiągnięcia";


        pointsDiv.appendChild(pointsDivH);
        achievementsDiv.appendChild(achievementsDivH);

        summaryEl.replaceChildren();


        this.tableOfPlayers.forEach(p => {
            const pEl = document.createElement("p");
            pEl.textContent = `${p.name}: ${p.pointsAmount} pkt`;
            pointsDiv.appendChild(pEl);
        });

        this.tableOfPlayers.forEach(p => {

            const achievementsEl = document.createElement("ul");
            p.achievements.getAchievementsList().forEach(a => {
                const li = document.createElement("li");
                li.textContent = `${a} dla gracza ${p.name}`;
                achievementsEl.appendChild(li);
            });

            achievementsDiv.appendChild(achievementsEl);

            summaryEl.appendChild(pointsDiv);
            summaryEl.appendChild(achievementsDiv);
        });

        // przechodzimy do summaryPage
        changeVisibility('gamePage', 'summaryPage');


    }


    resetGame() {
        this.clearUI();
        this.clearTimers();

        this.gameState = {
            isRunning: false,
            currentRound: 0,
            currentPlayerIndex: 0,
            baseQuestions: [],
            playerQuestions: []
        };

        // reset punktów graczy (jeśli masz)
        this.tableOfPlayers.forEach(p => {
            if (typeof p.reset === "function") p.reset();
        });
    }

    /* =======================
       INIT
    ======================= */

    initGame() {
        const baseQuestions = this.filterTableOfQuestions();

        if (baseQuestions.length === 0) {
            alert("Brak pytań dla wybranych ustawień (trudność / kategorie).");
            this.gameState.isRunning = false;
            throw new Error("NO_QUESTIONS_AFTER_FILTER");
        }

        this.gameState.baseQuestions = baseQuestions;
        this.gameState.playerQuestions = this.tableOfPlayers.map(() =>
            this.shuffleArray([...baseQuestions])
        );

        this.gameState.currentRound = 0;
        this.gameState.currentPlayerIndex = 0;
    }

    /* =======================
       MAIN LOOP
    ======================= */

    async runGame() {
        const { baseQuestions } = this.gameState;

        for (let round = 0; round < baseQuestions.length; round++) {
            this.gameState.currentRound = round;

            for (let p = 0; p < this.tableOfPlayers.length; p++) {
                this.gameState.currentPlayerIndex = p;

                await this.playTurn(p, round);

                if (!this.gameState.isRunning) return;
            }
        }
    }

    async playTurn(playerIndex, round) {
        this.currentTurnId++;
        const turnId = this.currentTurnId;

        this.clearUI();

        const player = this.tableOfPlayers[playerIndex];
        const question = this.gameState.playerQuestions[playerIndex][round];

        player.showTurn();
        question.initializeQuestion();

        let result;
        if (this.settings.timeMode) {
            result = await this.waitForAnswerOrTimeout(20, turnId);
        } else {
            result = await this.waitForAnswer(turnId);
        }

        const answeredCorrectly = result.type === 'answer' && result.value === question.rightAnswer;

        // prosta punktacja: pytanie.getPoints()
        let points = answeredCorrectly ? question.getPoints() : 0;
        player.pointsAmount += points;

        if (this.settings.enableAchievements) {
            player.achievements.registerAnswer(question, answeredCorrectly);
        }

        // pokazujemy odpowiedź od razu, jeśli ustawione
        if (this.settings.showAnswerImmediately) {
            const answersEl = document.getElementById("userAnswerPage");
            answersEl.replaceChildren();

            const info = document.createElement("h2");
            if (answeredCorrectly) {
                info.textContent = `Poprawna odpowiedź! +${points} pkt`;
                info.style.color = "green";
            } else if (result.type === 'answer') {
                info.textContent = `Niepoprawna odpowiedź. Poprawna: ${question.rightAnswer}`;
                info.style.color = "red";
            } else {
                info.textContent = `Czas minął! Poprawna odpowiedź: ${question.rightAnswer}`;
                info.style.color = "orange";
            }

            answersEl.appendChild(info);
        }
    }



    /* =======================
       HELPERS
    ======================= */

    filterTableOfQuestions() {
        return this.tableOfQuestions.filter(q => {
            if (this.settings.questionDifficulty !== "all" &&
                q.difficulty !== this.settings.questionDifficulty) return false;

            if (this.settings.categories !== "all") {
                const cats = Array.isArray(this.settings.categories)
                    ? this.settings.categories
                    : [this.settings.categories];
                if (!cats.includes(q.category)) return false;
            }
            return true;
        });
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    clearUI() {
        ["playerTurnPage", "gamePageQuestionContent", "answersPage", "timerPage"]
            .forEach(id => document.getElementById(id)?.replaceChildren());
    }

    clearTimers() {
        document.getElementById("timerPage")?.replaceChildren();
    }

    waitForAnswer(turnId) {
        return new Promise(resolve => {
            const handler = (e) => {
                if (turnId !== this.currentTurnId) return; // ❌ stara tura
                resolve({ type: "answer", value: e.detail.answer });
            };

            document.addEventListener("answerSelected", handler, { once: true });
        });
    }

    waitForAnswerOrTimeout(seconds, turnId) {
        let timerId;
        const timerEl = document.getElementById("timerPage");
        timerEl?.replaceChildren();

        const p = document.createElement("p");
        timerEl?.appendChild(p);

        const timeoutPromise = new Promise(resolve => {
            let time = seconds;

            timerId = setInterval(() => {
                if (turnId !== this.currentTurnId) {
                    clearInterval(timerId);
                    return;
                }

                p.textContent = `Pozostały czas: ${time}s`;
                time--;

                if (time < 0) {
                    clearInterval(timerId);
                    timerEl?.replaceChildren();
                    resolve({ type: "timeout" });
                }
            }, 1000);
        });

        const answerPromise = new Promise(resolve => {
            const handler = (e) => {
                if (turnId !== this.currentTurnId) return; // ❌ stara tura
                clearInterval(timerId);
                timerEl?.replaceChildren();
                resolve({ type: "answer", value: e.detail.answer });
            };

            document.addEventListener("answerSelected", handler, { once: true });
        });

        return Promise.race([timeoutPromise, answerPromise]);
    }

    getUserAnswer() {
        const checked = document.querySelector('input[name="answers"]:checked');
        return checked ? checked.value : undefined;
    }

}