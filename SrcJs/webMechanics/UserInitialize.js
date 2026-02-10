import {Player} from "../gameMechanics/Player.js";

//funkcja tworzy formularz dla tworzenia Graczy
export function createFormForUsers(usersAmount) {
    const container = document.getElementById("userInitializationPage");
    const formButtonContainer = document.createElement("div");
    const formButton = document.createElement("input");

    for(let i = 0; i < usersAmount; i++) {
        const titleContainer = document.createElement("div");
        const title = document.createElement('h1');
        const formContainer = document.createElement("div");
        const formInput = document.createElement("input");

        titleContainer.className = "userInitializationPageTitle";
        title.textContent = `Wprowadź nazwe użytkownika ${i + 1}`;

        titleContainer.appendChild(title);
        container.appendChild(titleContainer);

        formContainer.className = "userInitializationPageForm";
        formInput.type = "text";
        formInput.id = `usernameInputId${i}`
        formInput.required = true;
        formInput.className = "inputs"

        formContainer.appendChild(formInput);
        container.appendChild(formContainer);
    }

    formButtonContainer.className = "userInitializationPageButton";
    formButton.type = "button";
    formButton.id = "userInitializationPageButtonId";
    formButton.className = "buttonPage";
    formButton.value = "Dalej"

    formButtonContainer.appendChild(formButton);
    container.appendChild(formButtonContainer);
}

//funkcja tworzy Gracza
export function createPlayers(index) {
    const inputElement = document.getElementById(`usernameInputId${index}`);

    // sprawdzenie czy element istnieje i czy wartość nie jest pusta
    if (!inputElement || inputElement.value === "") {
        return undefined;
    }

    return new Player(inputElement.value);
}