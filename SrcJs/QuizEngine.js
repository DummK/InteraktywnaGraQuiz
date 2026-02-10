import {table} from "./tableOfQuestions.js";
import {EasyQuestionFactor, MediumQuestionFactor, HardQuestionFactor, ExtremeQuestionFactor, Question}  from "./gameMechanics/Question.js";

//klasa silnika uruchamiająca gre
export class QuizEngine {

    constructor(settings, tableOfPlayers, tableOfQuestions = table) {
        this.settings = settings;
        this.tableOfPlayers = tableOfPlayers;
        this.tableOfQuestions = tableOfQuestions;
    }

    // Główny przebieg quizu
    async startQuiz() {
        // Filtrujemy pytania
        const baseQuestions = this.filterTableOfQuestions();

        // Tworzymy osobną losową kolejność pytań dla każdego gracza
        const playerQuestions = this.tableOfPlayers.map(() => this.shuffleArray([...baseQuestions]));

        // Iterujemy po rundach (ilość pytań)
        for (let round = 0; round < baseQuestions.length; round++) {
            for (let playerIndex = 0; playerIndex < this.tableOfPlayers.length; playerIndex++) {
                const question = playerQuestions[playerIndex][round];

                // Czyścimy poprzednie pytania i odpowiedzi
                document.getElementById("playerTurnPage").replaceChildren();
                document.getElementById("gamePageQuestionContent").replaceChildren();
                document.getElementById("answersPage").replaceChildren();
                document.getElementById("timerPage").replaceChildren();

                // Wyświetlamy którego gracza ruch
                this.tableOfPlayers[playerIndex].showTurn();

                // Wyświetlamy pytanie
                question.initializeQuestion();

                // Czekamy na odpowiedź lub timeout
                if (this.settings.timeMode) {
                    await this.waitForAnswerOrTimeout(20);
                } else {
                    await this.waitForAnswer();
                }
            }
        }
    }

    // Fisher-Yates shuffle, nie wiem co to dokładnie jest ale chatGPT takie coś zaproponował
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Filtruje pytania według kategorii i trudności
    filterTableOfQuestions() {
        return this.tableOfQuestions.filter(q => {
            if (this.settings.questionDifficulty !== "all" && q.difficulty !== this.settings.questionDifficulty) return false;
            if (this.settings.categories !== "all") {
                //cats oznacza kategorie👍
                let cats = Array.isArray(this.settings.categories) ? this.settings.categories : [this.settings.categories];
                if (!cats.includes(q.category)) return false;
            }
            return true;
        });
    }

    // Czeka na odpowiedź lub timeout, zawsze czyści timer
    waitForAnswerOrTimeout(seconds) {
        let timerId;
        const timerEl = document.getElementById("timerPage");
        timerEl.replaceChildren();

        const p = document.createElement("p");
        timerEl.appendChild(p);

        const timeoutPromise = new Promise(resolve => {
            let time = seconds;
            timerId = setInterval(() => {
                p.textContent = `Pozostały czas: ${time}s`;
                time--;
                if (time < 0) {
                    clearInterval(timerId);
                    timerEl.replaceChildren();
                    resolve({ type: "timeout" });
                }
            }, 1000);
        });

        const answerPromise = new Promise(resolve => {
            const handler = (e) => {
                clearInterval(timerId);
                timerEl.replaceChildren();
                resolve({ type: "answer", value: e.detail.answer });
            };
            document.addEventListener("answerSelected", handler, { once: true });
        });

        return Promise.race([timeoutPromise, answerPromise]);
    }

    // Czeka tylko na zatwierdzenie odpowiedzi (timeMode = false)
    waitForAnswer() {
        const timerEl = document.getElementById("timerPage");
        timerEl.replaceChildren(); // czyścimy timer
        return new Promise(resolve => {
            const handler = (e) => resolve({ type: "answer", value: e.detail.answer });
            document.addEventListener("answerSelected", handler, { once: true });
        });
    }

    // Pobiera zaznaczone radio (dla przycisku „Zatwierdź”)
    getUserAnswer() {
        const checked = document.querySelector('input[name="answers"]:checked');
        return checked ? checked.value : undefined;
    }

    isAnswerRight() {}
}