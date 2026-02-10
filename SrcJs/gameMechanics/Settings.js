//categories = 'all' | 'java' | 'html' | 'javascript' | 'programming' | 'css' | 'www' | 'cpp' | 'oop' | 'security' | 'http' | 'algorithms' | 'memory' | 'threads'

//klasa z wszystkimi ustawieniami gry
export class Settings {
    constructor(
        playerAmount = 1,
        questionDifficulty = "all",
        enableAchievements = true,
        timeMode = false,
        showAnswerImmediately = true,
        categories = 'all'
    ) {
        this.playerAmount = playerAmount;
        this.questionDifficulty = questionDifficulty;
        this.enableAchievements = enableAchievements;
        this.timeMode = timeMode;
        this.showAnswerImmediately = showAnswerImmediately;
        this.categories = categories;
    }

    //funkcja do aktualizacji ustawień
    updateSettings(settings) {
        if (!settings) return;

        if (settings.playerAmount != null) this.playerAmount = settings.playerAmount;
        if (settings.questionDifficulty != null) this.questionDifficulty = settings.questionDifficulty;
        if (settings.enableAchievements != null) this.enableAchievements = settings.enableAchievements;
        if (settings.timeMode != null) this.timeMode = settings.timeMode;
        if (settings.showAnswerImmediately != null) this.showAnswerImmediately = settings.showAnswerImmediately;
        if (settings.categories != null) this.categories = settings.categories;
    }


}