//categories = 'all' | 'java' | 'html' | 'javascript' | 'programming' | 'css' | 'www' | 'cpp' | 'oop' | 'security' | 'http' | 'algorithms' | 'memory' | 'threads'

export class Settings {
    constructor(
        playersAmount = 1,
        questionDifficulty = "all",
        enableAchievements = true,
        timeMode = false,
        showAnswerImmediately = true,
        categories = 'all'
    ) {}

    updateSettings(playerAmount, questionDifficulty, enableAchievements, timeMode, showAnswerImmediately, categories) {
        if(playerAmount !== null) {
            this.playerAmount = playerAmount;
        }
        if(questionDifficulty !== null) {
            this.questionDifficulty = questionDifficulty;
        }
        if(enableAchievements !== null) {
            this.enableAchievements = enableAchievements;
        }
        if(timeMode !== null) {
            this.timeMode = timeMode;
        }
        if(showAnswerImmediately !== null) {
            this.showAnswerImmediately = showAnswerImmediately;
        }
        if(categories !== null) {
            this.categories = categories;
        }
    }
}