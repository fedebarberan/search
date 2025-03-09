// language-events.js
import { updateLanguage } from './language-utils.js';

document.querySelectorAll('.language-btn').forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.dataset.lang;
        updateLanguage(lang, true);
        document.getElementById('language-modal').style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const languageIcon = document.getElementById('language-icon');
    if (languageIcon) {
        languageIcon.textContent = '🔠';
    }
    const savedLang = localStorage.getItem('language') || 'en';
    updateLanguage(savedLang, false);
});