//klasa z osiągnieciami w grze
export class Achievements {
    constructor() {
        this.earned = new Set(); // lista zdobytych achievementów
        this.correctStreak = 0; // ile odpowiedzi z rzędu poprawnych
    }

    // Wywołujemy po każdej odpowiedzi
    registerAnswer(question, answeredCorrectly) {
        if (answeredCorrectly) {
            this.correctStreak++;

            if(!this.earned.has("Geek") && question.category === "cpp") {
                this.earned.add("Geek");
            }

            // 5 poprawnych odpowiedzi z rzędu
            if (!this.earned.has("Mistrz serii") && this.correctStreak >= 5) {
                this.earned.add("Mistrz serii");
            }

            // Ekstremalne pytanie
            if (question.difficulty === "extreme" && !this.earned.has("Hardcore Player")) {
                this.earned.add("Hardcore Player");
            }
        } else {
            this.correctStreak = 0; // reset streak przy błędzie
        }
    }

    getAchievementsList() {
        return Array.from(this.earned);
    }
}