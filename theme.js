// Version 1.3 - Forced theme application and added debug logging
document.addEventListener('DOMContentLoaded', () => {
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply theme immediately
    body.setAttribute('data-theme', savedTheme);
    console.log(`Theme set to: ${savedTheme}`);
    
    if (themeIcon) {
        themeIcon.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
        themeIcon.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', newTheme);
            themeIcon.textContent = newTheme === 'dark' ? '🌙' : '☀️';
            localStorage.setItem('theme', newTheme);
            console.log(`Theme toggled to: ${newTheme}`);
        });
    } else {
        console.warn('Theme icon not found');
    }
});