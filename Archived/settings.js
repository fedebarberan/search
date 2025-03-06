const settings = JSON.parse(localStorage.getItem('protoFindSettings')) || {
    sortByUsage: false,
    logoOnHover: false,
    newTab: false,
    rows: { general: true, ai: true, buy: true, social: true, forum: true },
    rowOrder: ['general', 'ai', 'buy', 'social', 'forum', 'promoted'],
    buttons: {}
};

document.getElementById('theme-icon').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode', !body.classList.contains('dark-mode'));
    body.classList.toggle('light-mode', !body.classList.contains('light-mode'));
    this.textContent = body.classList.contains('dark-mode') ? '🌙' : '☀️';
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

const saveSettings = () => localStorage.setItem('protoFindSettings', JSON.stringify(settings));

const sortButtons = () => {
    if (!settings.sortByUsage) return;
    document.querySelectorAll('.button-group').forEach(group => {
        const buttons = Array.from(group.children)
            .filter(btn => !btn.classList.contains('hidden') && !btn.dataset.platform.startsWith('promoted-'))
            .sort((a, b) => (usageCounts[b.dataset.platform] || 0) - (usageCounts[a.dataset.platform] || 0));
        buttons.forEach(button => group.appendChild(button));
    });
};

const applySettings = () => {
    ['sort-by-usage', 'logo-on-hover', 'new-tab'].forEach(id => {
        document.getElementById(id).checked = settings[id.replace(/-./g, c => c[1].toUpperCase())];
    });
    document.querySelectorAll('button[data-platform]').forEach(button => {
        if (!button.dataset.platform.startsWith('promoted-')) {
            button.classList.toggle('logo-visible', settings.logoOnHover);
            button.classList.toggle('hidden', !settings.buttons[button.dataset.platform]);
        }
    });
    ['general', 'ai', 'buy', 'social', 'forum'].forEach(row => {
        const toggle = document.getElementById(`hide-${row}`);
        toggle.checked = settings.rows[row];
        document.querySelector(`.button-row[data-row="${row}"]`).classList.toggle('hidden', !toggle.checked);
    });
    document.querySelector('.button-row[data-row="promoted"]').classList.remove('hidden');
    document.body.classList.add(localStorage.getItem('theme') || 'dark');
    document.getElementById('theme-icon').textContent = localStorage.getItem('theme') === 'dark' ? '🌙' : '☀️';
    sortButtons();
};

document.getElementById('sort-by-usage').addEventListener('change', () => {
    settings.sortByUsage = this.checked;
    saveSettings();
    sortButtons();
});

document.getElementById('logo-on-hover').addEventListener('change', () => {
    settings.logoOnHover = this.checked;
    document.querySelectorAll('button[data-platform]:not([data-platform^="promoted-"])')
        .forEach(button => button.classList.toggle('logo-visible', this.checked));
    saveSettings();
});

document.getElementById('new-tab').addEventListener('change', () => {
    settings.newTab = this.checked;
    saveSettings();
});

document.getElementById('reset-usage').addEventListener('click', () => {
    usageCounts = {};
    localStorage.setItem('buttonUsage', JSON.stringify(usageCounts));
    this.textContent = 'Reset!';
    this.disabled = true;
});

applySettings();