// Version 2.9 - Fixed site toggles, moved reset button, adjusted logo hover, integrated translations
let settings = JSON.parse(localStorage.getItem('protoFindSettings')) || {
    sortByUsage: false,
    logoOnHover: false,
    newTab: false,
    rows: { general: true, ai: true, buy: true, social: true, forum: true },
    rowOrder: ['general', 'ai', 'buy', 'social', 'forum', 'promoted'],
    buttons: {
        google: true, youtube: true, wikipedia: true, spotify: true, netflix: true, maps: true,
        chatgpt: true, grok: true, gemini: true, copilot: true, claude: true, perplexity: true,
        amazon: true, ebay: true, alibaba: true, walmart: true, mercadolibre: true, etsy: true,
        x: true, facebook: true, tiktok: true, twitch: true, linkedin: true, instagram: true,
        reddit: true, stackoverflow: true, discord: true, '4chan': true, quora: true, ted: true
    }
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
        const platform = button.dataset.platform;
        if (!platform.startsWith('promoted-')) {
            button.classList.toggle('logo-visible', settings.logoOnHover);
            button.classList.toggle('hidden', !settings.buttons[platform]);
            const toggle = document.getElementById(`hide-${platform}`);
            if (toggle) toggle.checked = settings.buttons[platform];
        }
    });
    ['general', 'ai', 'buy', 'social', 'forum'].forEach(row => {
        const toggle = document.getElementById(`hide-${row}`);
        toggle.checked = settings.rows[row];
        document.querySelector(`.button-row[data-row="${row}"]`).classList.toggle('hidden', !toggle.checked);
    });
    document.querySelector('.button-row[data-row="promoted"]').classList.remove('hidden');
    const theme = localStorage.getItem('theme') || 'dark';
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(`${theme}-mode`);
    document.getElementById('theme-icon').textContent = theme === 'dark' ? '🌙' : '☀️';
    sortButtons();
    checkAllRowsHidden();
};

const checkAllRowsHidden = () => {
    const allHidden = Array.from(document.querySelectorAll('.button-row:not([data-row="promoted"])'))
        .every(row => row.classList.contains('hidden'));
    document.querySelector('.no-rows-message').style.display = allHidden ? 'block' : 'none';
};

document.getElementById('sort-by-usage').addEventListener('change', function() {
    settings.sortByUsage = this.checked;
    saveSettings();
    sortButtons();
});

document.getElementById('logo-on-hover').addEventListener('change', function() {
    settings.logoOnHover = this.checked;
    document.querySelectorAll('button[data-platform]:not([data-platform^="promoted-"])')
        .forEach(button => button.classList.toggle('logo-visible', this.checked));
    saveSettings();
});

document.getElementById('new-tab').addEventListener('change', function() {
    settings.newTab = this.checked;
    saveSettings();
});

document.getElementById('reset-usage').addEventListener('click', function() {
    usageCounts = {};
    localStorage.setItem('buttonUsage', JSON.stringify(usageCounts));
    this.textContent = window.translations[localStorage.getItem('language') || 'en'].resetVisitedSites || 'Reset visited sites';
    this.disabled = true;
});

['general', 'ai', 'buy', 'social', 'forum'].forEach(row => {
    document.getElementById(`hide-${row}`).addEventListener('change', function() {
        settings.rows[row] = this.checked;
        document.querySelector(`.button-row[data-row="${row}"]`).classList.toggle('hidden', !this.checked);
        saveSettings();
        checkAllRowsHidden();
    });
});

document.querySelectorAll('button[data-platform]').forEach(button => {
    const platform = button.dataset.platform;
    const toggle = document.getElementById(`hide-${platform}`);
    if (toggle && !platform.startsWith('promoted-')) {
        toggle.checked = settings.buttons[platform];
        toggle.addEventListener('change', function() {
            settings.buttons[platform] = this.checked;
            button.classList.toggle('hidden', !this.checked);
            saveSettings();
            sortButtons();
        });
    }
});

applySettings();