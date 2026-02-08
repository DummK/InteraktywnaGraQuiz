import { Settings } from '../gameMechanics/Settings.js';

//funkcja zapisująca ustawienia
export function saveSettings() {
    const userAmount = Number(document.getElementById('users').value);

    if (!Number.isInteger(userAmount) || userAmount <= 0) {
        alert(!Number.isInteger(userAmount)
            ? 'Należy wprowadzić liczbę!'
            : 'Liczba użytkowników musi być większa od 0');
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