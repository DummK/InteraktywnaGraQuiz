//stałe wartości przeliczników punktów dla trudności pytań
export const EasyQuestionFactor = 0.8
export const MediumQuestionFactor = 1.2
export const HardQuestionFactor = 1.6
export const ExtremeQuestionFactor = 2

//klasa zawierająca wszystkie informacje z pytaniami
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

    initializeQuestion() {
        const gamePageQuestionDiv = document.getElementById("gamePageQuestionContent");
        const answersPageDiv = document.getElementById("answersPage");

        const questionContentElement = document.createElement("h1");
        questionContentElement.textContent = this.questionContent;
        questionContentElement.id = "questionContentId";
        gamePageQuestionDiv.appendChild(questionContentElement);

        for(let i = 0; i < 4; i++) {
            const labelElement = document.createElement("label");
            const radioElement = document.createElement("input");
            const spanElement = document.createElement("span");

            radioElement.type = "radio";
            radioElement.id = `checkboxElementId${i}`;
            radioElement.name = "answers";

            spanElement.textContent = this.answers[i];

            labelElement.htmlFor = radioElement.id;
            labelElement.className = "categories";

            switch(i) {
                case 0: radioElement.value = "A"; break;
                case 1: radioElement.value = "B"; break;
                case 2: radioElement.value = "C"; break;
                case 3: radioElement.value = "D"; break;
            }

            labelElement.appendChild(radioElement);
            labelElement.appendChild(spanElement);

            answersPageDiv.appendChild(labelElement);
        }
    }
}

