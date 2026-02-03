import { Settings } from '../gameMechanics/Settings.js';

export function saveSettings() {
    const userAmount = Number(document.getElementById('users').value);

    if (!Number.isInteger(userAmount) || userAmount <= 0) {
        alert('Liczba użytkowników musi być wieksza od 0');
        return undefined;
    }

    return new Settings(
        userAmount,
        document.getElementById('selectDifficulty').value,
        document.getElementById('selectAchievements').value === 'true',
        document.getElementById('selectTimeMode').value === 'true',
        document.getElementById('selectAnswersImmediately').value === 'true'
    );
}