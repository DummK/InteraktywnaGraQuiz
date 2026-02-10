import {Achievements} from "./Achievements.js";

//klasa z danymi graczy
export class Player {
    constructor(
        name,
        pointsAmount = 0,
        highestScore = 0,
        achievements = new Achievements()
    ) {
        this.name = name;
        this.pointsAmount = pointsAmount;
        this.highestScore = highestScore;
        this.achievements = achievements;
    }

    showTurn() {
        const playerTurnTitleElement = document.createElement("h1");
        const playerTurnDivElement = document.getElementById("playerTurnPage");

        playerTurnDivElement.replaceChildren();

        playerTurnTitleElement.textContent = `Teraz odpowiada gracz ${this.name}`;
        playerTurnTitleElement.id = "playerTurnTitleId";

        playerTurnDivElement.appendChild(playerTurnTitleElement);
    }
}