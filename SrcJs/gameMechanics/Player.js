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
}