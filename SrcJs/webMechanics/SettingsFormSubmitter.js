import {Settings} from '../gameMechanics/Settings.js';

//funkcja zapisująca ustawienia
export function saveSettings() {
    const userAmount = Number(document.getElementById('users').value);
    let categories;

    //sprawdza czy podana wartosc w polu input nie jest liczba i czy jest mniejsza lub równa 0
    //Jeśli to się zgadza to program nie przechodzi dalej
    if (!Number.isInteger(userAmount) || userAmount <= 0) {
        alert(!Number.isInteger(userAmount)
            ? 'Należy wprowadzić liczbę!'
            : 'Liczba użytkowników musi być większa od 0');
        return undefined;
    }


    //obiekt z inputami typu checkbox
    const checkboxesOtherThanAll = document.querySelectorAll('.inputCheckboxClass');
    //obiekt sprawdzający czy jakiś checkbox jest zaznaczony oprócz All
    const isAnyOtherThanAllChecked = Array.from(checkboxesOtherThanAll).some(checkbox => checkbox.checked);

    //sprawdza czy cokolwiek jest zaznaczone
    if(!isAnyOtherThanAllChecked && !document.getElementById('inputCategoryAll').checked) {
        alert("Musisz zaznaczyć jakąś kategorie!")
        return undefined;
    }

    //sprawdza dokładniej jaka kategoria/kategorie są zaznaczone i przypisuje poprawne wartości
    if(document.getElementById('inputCategoryAll').checked) {
        //jeśli jest zaznaczony wyrzuca alert i program nie przechodzi dalej (return undefined)
        if(isAnyOtherThanAllChecked) {
            alert("Jeśli wybrałeś wszystkie kategorie odznacz reszte!")
            return undefined;
        }

        //jesli nie jest zaznaczony przypisuje all do kategorii
        categories = 'all';
    }
    else {
        //jeśli all nie jest zaznaczone pobiera wartości z zaznaczonych kategorii i je przypisuje
        categories = Array.from(checkboxesOtherThanAll)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
    }

    return new Settings(
        userAmount,
        document.getElementById('selectDifficulty').value,
        document.getElementById('selectAchievements').value === 'true',
        document.getElementById('selectTimeMode').value === 'true',
        document.getElementById('selectAnswersImmediately').value === 'true',
        categories
    );
}

export function changeSettings(userAmount) {
    let categories;

    //obiekt z inputami typu checkbox
    const checkboxesOtherThanAll = document.querySelectorAll('.changeCheckboxClass');
    //obiekt sprawdzający czy jakiś checkbox jest zaznaczony oprócz All
    const isAnyOtherThanAllChecked = Array.from(checkboxesOtherThanAll).some(checkbox => checkbox.checked);

    //sprawdza czy cokolwiek jest zaznaczone
    if(!isAnyOtherThanAllChecked && !document.getElementById('changeCategoryAll').checked) {
        alert("Musisz zaznaczyć jakąś kategorie!")
        return undefined;
    }

    //sprawdza dokładniej jaka kategoria/kategorie są zaznaczone i przypisuje poprawne wartości
    if(document.getElementById('changeCategoryAll').checked) {
        //jeśli jest zaznaczony wyrzuca alert i program nie przechodzi dalej (return undefined)
        if(isAnyOtherThanAllChecked) {
            alert("Jeśli wybrałeś wszystkie kategorie odznacz reszte!")
            return undefined;
        }

        //jesli nie jest zaznaczony przypisuje all do kategorii
        categories = 'all';
    }
    else {
        //jeśli all nie jest zaznaczone pobiera wartości z zaznaczonych kategorii i je przypisuje
        categories = Array.from(checkboxesOtherThanAll)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
    }

    return new Settings(
        userAmount,
        document.getElementById('changeDifficulty').value,
        document.getElementById('changeAchievements').value === 'true',
        document.getElementById('changeTimeMode').value === 'true',
        document.getElementById('changeAnswersImmediately').value === 'true',
        categories
    );
}