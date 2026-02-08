import {table} from "./tableOfQuestions";
import {EasyQuestionFactor, MediumQuestionFactor, HardQuestionFactor, ExtremeQuestionFactor, Question}  from "./gameMechanics/Question";

//klasa silnika uruchamiająca gre
export class QuizEngine {

    static runQuiz(){}

    randomizingQuestion() {
        const minCeiled = Math.ceil(0);
        const maxFloored = Math.floor(table.length);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

    isAnswerRight() {

    }
}