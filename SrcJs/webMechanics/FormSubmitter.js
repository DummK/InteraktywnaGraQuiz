export function saveSettings() {
    let userAmount;
    if(document.getElementById('users').value <= 0) {
        alert('Please enter a valid number');
        return;
    }
    else {
        userAmount = document.getElementById('users').value;
    }

    let difficultySelect = document.getElementById('selectDifficulty');
    const difficulty = difficultySelect.options[difficultySelect.selectedIndex].value;

    let achievementsSelect = document.getElementById('selectAchievements');
    const achievements = achievementsSelect.options[achievementsSelect.selectedIndex].value;

    let timeModeSelect = document.getElementById('selectTimeMode');
    const timeMode = timeModeSelect.options[timeModeSelect.selectedIndex].value;

    let answersImmediatelySelect = document.getElementById('selectAnswersImmediately');
    const answersImmediately = answersImmediatelySelect.options[answersImmediatelySelect.selectedIndex].value;
}