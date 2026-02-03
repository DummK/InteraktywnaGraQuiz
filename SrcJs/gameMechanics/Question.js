export const EasyQuestionFactor = 0.8
export const MediumQuestionFactor = 1.2
export const HardQuestionFactor = 1.6
export const ExtremeQuestionFactor = 2

export class Question {
    constructor(
        questionContent,
        answers,
        rightAnswer,
        category,
        difficulty
    ) {
        this.questionContent = questionContent;
        this.answers = answers;
        this.rightAnswer = rightAnswer;
        this.category = category;
        this.difficulty = difficulty;
    }

    showQuestion() {
        console.log(`Kategoria: ${this.category}, trudność: ${this.difficulty}`);
        console.log(this.questionContent)

        let letters = ["a", "b", "c", "d"];
        for(let i = 0; i < 4; i++) {
            console.log(`${letters[i]}) ${this.answers[i]}`);
        }
    }
}

