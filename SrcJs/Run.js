/*
* Struktura obiektu pytania (treść, odpowiedzi[], poprawnaOdpowiedź, kategoria, trudność)

· Tablica pytań z minimum 20 pytaniami

· Funkcja losowania pytania (Math.random)

· Funkcja sprawdzania odpowiedzi (===, porównania)

· Podstawowy system punktacji (zmienna, operatory +=)
*
*Tryb czasowy (pętla while z warunkiem czasowym)

· Tryb kategorii (filtrowanie pytań)

· System poziomów trudności (punkty mnożone przez współczynnik)

· Ranking graczy (tablica obiektów, sortowanie)

· Podsumowanie gry ze statystykami
*
* System osiągnięć (achievements)

· Tryb wieloosobowy na zmianę

· Dynamiczne dostosowywanie trudności
*
* */
import {changeVisibility} from "./webMechanics/Router.js";
import {changeSettings, saveSettings} from "./webMechanics/SettingsFormSubmitter.js";
import {Settings} from "./gameMechanics/Settings.js";
import {createFormForUsers, createPlayers} from "./webMechanics/UserInitialize.js";
import {QuizEngine} from "./QuizEngine.js";

let settings = new Settings();
let tableOfPlayers = [];
let quizEngine = new QuizEngine(settings, tableOfPlayers);

//Przejście do strony z ustawieniami
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("startPageButtonId");
    if (btn) {
        btn.addEventListener("click", () => {
            changeVisibility('startPage', 'settingsPage');
        });
    }
});

//Zapisanie zmian w ustawieniach oraz przejście do strony z inicjalizacją użytkowników
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("settingsPageButtonId");
    if (btn) {
        btn.addEventListener("click", () => {
            if(saveSettings() !== undefined) {
                settings.updateSettings(saveSettings());
                createFormForUsers(settings.playerAmount)
                changeVisibility('settingsPage', 'userInitializationPage');
                console.log(settings);
            }
        });
    }
});

//Zapisanie użytkowników do tablicy i przejście do gry
document.addEventListener("click", async(e) => {
    if (e.target.id === "userInitializationPageButtonId") {
        for (let i = 0; i < settings.playerAmount; i++) {
            const player = createPlayers(i);
            if (!player) {
                alert(`Wypełnij wszystkie pola dla użytkownika ${i + 1}`);
                return; // wychodzimy z funkcji, nie przechodzimy dalej
            }
            tableOfPlayers.push(player);
        }
        changeVisibility('userInitializationPage', 'gamePage');
        await quizEngine.startQuiz();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("buttonsPageSettingsButtonId");
    if (btn) {
        btn.addEventListener("click", () => {
            changeVisibility('gamePage', 'dynamicSettingsPage');
        });
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    const btn = document.getElementById("dynamicSettingsPageButtonId");
    if (btn) {
        btn.addEventListener("click", () => {
            if(changeSettings(settings.playerAmount) !== undefined) {
                settings.updateSettings(changeSettings(settings.playerAmount));
                quizEngine.startQuiz()
                changeVisibility('dynamicSettingsPage', 'gamePage');
                console.log(settings);
            }
        });
    }
});

//to robił chatGPT(zbyt trudne, nic nie rozumiem)
document.addEventListener("click", (e) => {
    if (e.target.id === "buttonsPageConfirmButtonId") {
        const userAnswer = quizEngine.getUserAnswer(); // pobiera zaznaczone radio
        if (!userAnswer) {
            alert("Nie zaznaczono odpowiedzi!");
            return;
        }

        document.dispatchEvent(
            new CustomEvent("answerSelected", { detail: { answer: userAnswer } })
        );
    }
});

