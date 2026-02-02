import {table} from "./tableOfQuestions";

export class QuizEngine {

    run(){}

    randomizingQuestion() {
        const minCeiled = Math.ceil(0);
        const maxFloored = Math.floor(table.length);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

    isAnswerRight() {

    }
}