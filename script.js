const faviconUrls = {
    'google': 'https://www.google.com/favicon.ico',
    'youtube': 'https://www.youtube.com/favicon.ico',
    'wikipedia': 'https://en.wikipedia.org/favicon.ico',
    'spotify': 'https://www.spotify.com/favicon.ico',
    'netflix': 'https://www.netflix.com/favicon.ico',
    'maps': 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg',
    'chatgpt': 'https://chat.openai.com/favicon.ico',
    'grok': 'https://x.ai/favicon.ico',
    'gemini': 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png',
    'copilot': 'https://copilot.microsoft.com/favicon.ico',
    'claude': 'https://anthropic.com/favicon.ico',
    'perplexity': 'https://www.perplexity.ai/favicon.ico',
    'amazon': 'https://www.amazon.com/favicon.ico',
    'ebay': 'https://www.ebay.com/favicon.ico',
    'alibaba': 'https://www.alibaba.com/favicon.ico',
    'walmart': 'https://www.walmart.com/favicon.ico',
    'mercadolibre': 'https://companieslogo.com/img/orig/MELI-dc8392a9.svg',
    'etsy': 'https://www.etsy.com/favicon.ico',
    'x': 'https://x.com/favicon.ico',
    'facebook': 'https://www.facebook.com/favicon.ico',
    'tiktok': 'https://www.tiktok.com/favicon.ico',
    'twitch': 'https://www.twitch.tv/favicon.ico',
    'linkedin': 'https://www.linkedin.com/favicon.ico',
    'instagram': 'https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico',
    'reddit': 'https://www.reddit.com/favicon.ico',
    'stackoverflow': 'https://stackoverflow.com/favicon.ico',
    'discord': 'https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66e3d80db9971f10a9757c99_Symbol.svg',
    '4chan': 'https://www.4chan.org/favicon.ico',
    'quora': 'https://www.quora.com/favicon.ico',
    'ted': 'https://www.ted.com/favicon.ico'
};
for (let platform in faviconUrls) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = faviconUrls[platform];
    document.head.appendChild(link);
}

document.getElementById('theme-icon').addEventListener('click', function() {
    const body = document.body;
    const icon = this;
    if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        icon.textContent = '☀️';
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        icon.textContent = '🌙';
    }
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    applyThemeColor();
});

const textarea = document.getElementById('query');
textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = `${this.scrollHeight}px`;
});

const modal = document.getElementById('settings-modal');
const settingsIcon = document.getElementById('settings-icon');
const closeBtn = modal.querySelector('.close');
const sortByUsageSwitch = document.getElementById('sort-by-usage');
const logoOnHoverSwitch = document.getElementById('logo-on-hover');
const newTabSwitch = document.getElementById('new-tab');
const resetUsageBtn = document.getElementById('reset-usage');
const bugModal = document.getElementById('bug-modal');
const bugIcon = document.getElementById('bug-icon');
const bugCloseBtn = bugModal.querySelector('.close');
const suggestionModal = document.getElementById('suggestion-modal');
const suggestionIcon = document.getElementById('suggestion-icon');
const suggestionCloseBtn = suggestionModal.querySelector('.close');
const addSiteModal = document.getElementById('add-site-modal');
const addSiteIcon = document.getElementById('add-site-icon');
const addSiteCloseBtn = addSiteModal.querySelector('.close');
const promoteModal = document.getElementById('promote-modal');
const promoteCloseBtn = promoteModal.querySelector('.close');
const colorModal = document.getElementById('color-modal');
const colorIcon = document.getElementById('color-icon');
const colorCloseBtn = colorModal.querySelector('.close');
const colorPicker = document.getElementById('color-picker');

settingsIcon.addEventListener('click', () => modal.style.display = 'block');
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

bugIcon.addEventListener('click', () => bugModal.style.display = 'block');
bugCloseBtn.addEventListener('click', () => bugModal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === bugModal) bugModal.style.display = 'none'; });

suggestionIcon.addEventListener('click', () => suggestionModal.style.display = 'block');
suggestionCloseBtn.addEventListener('click', () => suggestionModal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === suggestionModal) suggestionModal.style.display = 'none'; });

addSiteIcon.addEventListener('click', () => addSiteModal.style.display = 'block');
addSiteCloseBtn.addEventListener('click', () => addSiteModal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === addSiteModal) addSiteModal.style.display = 'none'; });

document.querySelectorAll('button[data-platform^="promoted-"]').forEach(button => {
    button.addEventListener('click', () => promoteModal.style.display = 'block');
});
promoteCloseBtn.addEventListener('click', () => promoteModal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === promoteModal) promoteModal.style.display = 'none'; });

colorIcon.addEventListener('click', () => colorModal.style.display = 'block');
colorCloseBtn.addEventListener('click', () => colorModal.style.display = 'none');
window.addEventListener('click', (e) => { if (e.target === colorModal) colorModal.style.display = 'none'; });

colorPicker.addEventListener('input', () => {
    localStorage.setItem('themeColor', colorPicker.value);
    applyThemeColor();
});

let usageCounts = JSON.parse(localStorage.getItem('buttonUsage')) || {};
let settings = JSON.parse(localStorage.getItem('protoFindSettings')) || {
    sortByUsage: false,
    logoOnHover: false,
    newTab: false,
    rows: { general: true, ai: true, buy: true, social: true, forum: true, promoted: true },
    rowOrder: ['general', 'ai', 'buy', 'social', 'forum', 'promoted'],
    buttons: {}
};
let submissionTimestamps = JSON.parse(localStorage.getItem('submissionTimestamps')) || {
    bug: [],
    suggestion: [],
    addSite: [],
    promote: []
};

function saveUsageCounts() {
    localStorage.setItem('buttonUsage', JSON.stringify(usageCounts));
}

function saveSettings() {
    localStorage.setItem('protoFindSettings', JSON.stringify(settings));
}

function saveSubmissionTimestamps() {
    localStorage.setItem('submissionTimestamps', JSON.stringify(submissionTimestamps));
}

function applyThemeColor() {
    const themeColor = localStorage.getItem('themeColor') || '#444444';
    const styleSheet = document.styleSheets[0];
    const ruleIndex = Array.from(styleSheet.cssRules).findIndex(rule => rule.selectorText === '.theme-color');
    if (ruleIndex !== -1) styleSheet.deleteRule(ruleIndex);
    styleSheet.insertRule(`.theme-color { background-color: ${themeColor}; }`, styleSheet.cssRules.length);
    document.querySelectorAll('button:not(.light-mode):not(.dark-mode)').forEach(button => {
        button.classList.add('theme-color');
    });
    colorPicker.value = themeColor;
}

function sortButtons() {
    if (!settings.sortByUsage) return;
    document.querySelectorAll('.button-group').forEach(group => {
        const buttons = Array.from(group.children).filter(btn => !btn.classList.contains('hidden') && !btn.dataset.platform.startsWith('promoted-'));
        buttons.sort((a, b) => {
            const aCount = usageCounts[a.dataset.platform] || 0;
            const bCount = usageCounts[b.dataset.platform] || 0;
            return bCount - aCount;
        });
        buttons.forEach(button => group.appendChild(button));
    });
}

function arrangeRows() {
    const container = document.querySelector('.button-container');
    const rows = settings.rowOrder.map(row => container.querySelector(`.button-row[data-row="${row}"]`));
    rows.forEach(row => container.appendChild(row));
}

function applySettings() {
    sortByUsageSwitch.checked = settings.sortByUsage;
    logoOnHoverSwitch.checked = settings.logoOnHover;
    newTabSwitch.checked = settings.newTab;
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
    const theme = localStorage.getItem('theme') || 'dark';
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
    document.getElementById('theme-icon').textContent = theme === 'dark' ? '🌙' : '☀️';
    applyThemeColor();
    sortButtons();
    arrangeRows();
    checkAllRowsHidden();
}

document.querySelectorAll('.switch').forEach(switchElement => {
    switchElement.addEventListener('click', (e) => {
        const input = switchElement.querySelector('input');
        input.checked = !input.checked;
        const event = new Event('change', { bubbles: true });
        input.dispatchEvent(event);
    });
});

sortByUsageSwitch.addEventListener('change', () => {
    settings.sortByUsage = sortByUsageSwitch.checked;
    saveSettings();
    sortButtons();
});

logoOnHoverSwitch.addEventListener('change', () => {
    settings.logoOnHover = logoOnHoverSwitch.checked;
    document.querySelectorAll('button[data-platform]').forEach(button => {
        if (!button.dataset.platform.startsWith('promoted-')) {
            button.classList.toggle('logo-visible', settings.logoOnHover);
        }
    });
    saveSettings();
});

newTabSwitch.addEventListener('change', () => {
    settings.newTab = newTabSwitch.checked;
    saveSettings();
});

resetUsageBtn.addEventListener('click', () => {
    usageCounts = {};
    saveUsageCounts();
    resetUsageBtn.textContent = 'Reset!';
    resetUsageBtn.disabled = true;
});

function sanitizeInput(input) {
    return input.replace(/[<>&"']/g, match => ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#x27;'
    }[match])).replace(/script/gi, '');
}

function canSubmit(type) {
    const now = Date.now();
    const timestamps = submissionTimestamps[type];
    const limit = 5;
    const timeWindow = 24 * 60 * 60 * 1000;
    timestamps.push(now);
    submissionTimestamps[type] = timestamps.filter(ts => now - ts < timeWindow);
    saveSubmissionTimestamps();
    return submissionTimestamps[type].length <= limit;
}

function handleSubmission(modalId, buttonId, type) {
    const modal = document.getElementById(modalId);
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
        if (!canSubmit(type)) {
            button.disabled = true;
            button.textContent = 'Limit Reached (24h)';
            setTimeout(() => {
                button.disabled = false;
                button.textContent = 'Submit';
            }, 5000);
            return;
        }
        const input = modal.querySelector('textarea') || modal.querySelector('input[type="text"]');
        if (input.value.trim()) {
            console.log(`${type} submitted: ${input.value}`);
            input.value = type === 'add-site' ? 'http://' : '';
            modal.style.display = 'none';
        }
    });
}

handleSubmission('bug-modal', 'submit-bug', 'bug');
handleSubmission('suggestion-modal', 'submit-suggestion', 'suggestion');
handleSubmission('add-site-modal', 'submit-add-site', 'addSite');
handleSubmission('promote-modal', 'submit-promote', 'promote');

function performSearch(platform) {
    if (platform.startsWith('promoted-')) return;
    const query = sanitizeInput(document.getElementById('query').value.trim());
    if (!query) {
        alert('Please enter something in the search field.');
        return;
    }
    usageCounts[platform] = (usageCounts[platform] || 0) + 1;
    saveUsageCounts();
    sortButtons();
    const searchUrls = {
        'google': `https://www.google.com/search?q=${encodeURIComponent(query)}`,
        'youtube': `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
        'wikipedia': `https://es.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(query)}`,
        'spotify': `https://open.spotify.com/search/${encodeURIComponent(query)}`,
        'netflix': `https://www.netflix.com/search?q=${encodeURIComponent(query)}`,
        'maps': `https://maps.google.com/?q=${encodeURIComponent(query)}`,
        'chatgpt': `https://chat.openai.com/?q=${encodeURIComponent(query)}`,
        'grok': `https://x.ai/search?q=${encodeURIComponent(query)}`,
        'gemini': `https://gemini.google.com/search?q=${encodeURIComponent(query)}`,
        'copilot': `https://copilot.microsoft.com/?q=${encodeURIComponent(query)}`,
        'claude': `https://anthropic.com/claude?q=${encodeURIComponent(query)}`,
        'perplexity': `https://www.perplexity.ai/search?q=${encodeURIComponent(query)}`,
        'amazon': `https://www.amazon.com/s?k=${encodeURIComponent(query)}`,
        'ebay': `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}`,
        'alibaba': `https://www.alibaba.com/trade/search?keywords=${encodeURIComponent(query)}`,
        'walmart': `https://www.walmart.com/search/?query=${encodeURIComponent(query)}`,
        'mercadolibre': `https://www.mercadolibre.com.ar/jm/search?as_word=${encodeURIComponent(query)}`,
        'etsy': `https://www.etsy.com/search?q=${encodeURIComponent(query)}`,
        'x': `https://x.com/search?q=${encodeURIComponent(query)}`,
        'facebook': `https://www.facebook.com/search/top?q=${encodeURIComponent(query)}`,
        'tiktok': `https://www.tiktok.com/search?q=${encodeURIComponent(query)}`,
        'twitch': `https://www.twitch.tv/search?term=${encodeURIComponent(query)}`,
        'linkedin': `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(query)}`,
        'instagram': `https://www.instagram.com/explore/tags/${encodeURIComponent(query)}/`,
        'reddit': `https://www.reddit.com/search?q=${encodeURIComponent(query)}`,
        'stackoverflow': `https://stackoverflow.com/search?q=${encodeURIComponent(query)}`,
        'discord': `https://discord.com/channels/@me?search=${encodeURIComponent(query)}`,
        '4chan': `https://www.4channel.org/search#${encodeURIComponent(query)}`,
        'quora': `https://www.quora.com/search?q=${encodeURIComponent(query)}`,
        'ted': `https://www.ted.com/search?q=${encodeURIComponent(query)}`
    };
    if (searchUrls[platform]) {
        if (settings.newTab) window.open(searchUrls[platform], '_blank');
        else window.location.href = searchUrls[platform];
    }
}

document.querySelectorAll('button[data-platform]').forEach(button => {
    button.addEventListener('click', function() {
        const platform = this.getAttribute('data-platform');
        performSearch(platform);
    });
});

['general', 'ai', 'buy', 'social', 'forum'].forEach(row => {
    const toggle = document.getElementById(`hide-${row}`);
    toggle.addEventListener('change', () => {
        settings.rows[row] = toggle.checked;
        document.querySelector(`.button-row[data-row="${row}"]`).classList.toggle('hidden', !toggle.checked);
        saveSettings();
        checkAllRowsHidden();
    });
});

document.querySelectorAll('button[data-platform]').forEach(button => {
    const platform = button.dataset.platform;
    const toggle = document.getElementById(`hide-${platform}`);
    if (toggle) {
        settings.buttons[platform] = settings.buttons[platform] !== undefined ? settings.buttons[platform] : true;
        toggle.checked = settings.buttons[platform];
        button.classList.toggle('hidden', !toggle.checked);
        toggle.addEventListener('change', () => {
            settings.buttons[platform] = toggle.checked;
            button.classList.toggle('hidden', !toggle.checked);
            saveSettings();
            sortButtons();
        });
    }
});

function checkAllRowsHidden() {
    const allHidden = Array.from(document.querySelectorAll('.button-row:not([data-row="promoted"])')).every(row => row.classList.contains('hidden'));
    document.querySelector('.no-rows-message').style.display = allHidden ? 'block' : 'none';
}

document.getElementById('add-site-input').addEventListener('input', function(e) {
    this.value = this.value.replace(/\s/g, '');
});

applySettings();