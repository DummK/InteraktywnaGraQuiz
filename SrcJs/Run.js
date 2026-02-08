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
import {saveSettings} from "./webMechanics/SettingsFormSubmitter.js";
import {Settings} from "./gameMechanics/Settings.js";
import {createFormForUsers, createPlayers} from "./webMechanics/UserInitialize.js";


let settings = new Settings();
let tableOfPlayers = [];

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
            }
        });
    }
});

//Zapisanie użytkowników do tablicy i przejście do gry
document.addEventListener("click", (e) => {
    if (e.target.id === "userInitializationPageButtonId") {
        for (let i = 0; i < settings.playerAmount; i++) {
            tableOfPlayers.push(createPlayers(i));
        }

        changeVisibility('userInitializationPage', 'gamePage');
    }
});

