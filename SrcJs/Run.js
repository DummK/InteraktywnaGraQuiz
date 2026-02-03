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
import {saveSettings} from "./webMechanics/FormSubmitter.js";
import {Settings} from "./gameMechanics/settings.js";

let settings = new Settings();


document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("startPageButtonId");
    if (btn) {
        btn.addEventListener("click", () => {
            changeVisibility('startPage', 'settingsPage');
        });
    }
});

