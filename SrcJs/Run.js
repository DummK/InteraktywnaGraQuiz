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
import { changeVisibility } from "./webMechanics/Router.js";
import { changeSettings, saveSettings } from "./webMechanics/SettingsFormSubmitter.js";
import { Settings } from "./gameMechanics/Settings.js";
import { createFormForUsers, createPlayers } from "./webMechanics/UserInitialize.js";
import { QuizEngine } from "./QuizEngine.js";
import { table } from "./tableOfQuestions.js";

let settings = new Settings();
let tableOfPlayers = [];
let quizEngine = new QuizEngine(settings, tableOfPlayers, table);

/* =====================
   START PAGE
===================== */
document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("startPageButtonId")
        ?.addEventListener("click", () => {
            changeVisibility("startPage", "settingsPage");
        });
});

/* =====================
   SETTINGS
===================== */
document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("settingsPageButtonId")
        ?.addEventListener("click", () => {
            const newSettings = saveSettings();
            if (!newSettings) return;

            settings.updateSettings(newSettings);
            createFormForUsers(settings.playerAmount);
            changeVisibility("settingsPage", "userInitializationPage");
        });
});

/* =====================
   INIT PLAYERS
===================== */
document.addEventListener("click", async (e) => {
    if (e.target.id !== "userInitializationPageButtonId") return;

    tableOfPlayers.length = 0; // 🔒 bezpieczne czyszczenie

    for (let i = 0; i < settings.playerAmount; i++) {
        const player = createPlayers(i);
        if (!player) {
            alert(`Wypełnij wszystkie pola dla gracza ${i + 1}`);
            return;
        }
        tableOfPlayers.push(player);
    }

    changeVisibility("userInitializationPage", "gamePage");
    await quizEngine.startQuiz();
});

/* =====================
   DYNAMIC SETTINGS
===================== */
document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("buttonsPageSettingsButtonId")
        ?.addEventListener("click", () => {
            changeVisibility("gamePage", "dynamicSettingsPage");
        });
});
document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("dynamicSettingsPageButtonId")
        ?.addEventListener("click", async () => {
            const newSettings = changeSettings(settings.playerAmount);
            if (!newSettings) return;

            settings.updateSettings(newSettings);
            changeVisibility("dynamicSettingsPage", "gamePage");
            await quizEngine.startQuiz();
        });
});

/* =====================
   ANSWER CONFIRM
===================== */
document.addEventListener("click", (e) => {
    if (e.target.id !== "buttonsPageConfirmButtonId") return;

    const userAnswer = quizEngine.getUserAnswer();
    if (!userAnswer) {
        alert("Nie zaznaczono odpowiedzi!");
        return;
    }

    document.dispatchEvent(
        new CustomEvent("answerSelected", { detail: { answer: userAnswer } })
    );
});

