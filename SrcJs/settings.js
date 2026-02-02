export class Settings {
    constructor(
        playersAmount = 1,
        questionDifficulty = "easy",
        enableAchievements = true,
        timeMode = false,
        showAnswerImmediately = true
    ) {}

    updateSettings(playerAmount, questionDifficulty, enableAchievements, timeMode, showAnswerImmediately) {
        this.playerAmount = playerAmount;
        this.questionDifficulty = questionDifficulty;
        this.enableAchievements = enableAchievements;
        this.timeMode = timeMode;
        this.showAnswerImmediately = showAnswerImmediately;
    }
}