// Version 1.2 - Added Show logo only toggle and fixed logo-on-hover behavior
document.addEventListener('DOMContentLoaded', () => {
    const toggleRow = (checkboxId, rowClass) => {
        const checkbox = document.getElementById(checkboxId);
        const rows = document.querySelectorAll(rowClass);
        checkbox.addEventListener('change', () => {
            const isHidden = checkbox.checked;
            rows.forEach(row => {
                row.classList.toggle('hidden', isHidden);
                localStorage.setItem(checkboxId, isHidden);
            });
            checkAllRowsHidden();
        });
        const savedState = localStorage.getItem(checkboxId) === 'true';
        checkbox.checked = savedState;
        rows.forEach(row => row.classList.toggle('hidden', savedState));
    };

    const toggleSite = (checkboxId, platform) => {
        const checkbox = document.getElementById(checkboxId);
        const buttons = document.querySelectorAll(`button[data-platform="${platform}"]`);
        checkbox.addEventListener('change', () => {
            const isHidden = checkbox.checked;
            buttons.forEach(button => {
                button.style.display = isHidden ? 'none' : 'inline-block';
                localStorage.setItem(checkboxId, isHidden);
            });
        });
        const savedState = localStorage.getItem(checkboxId) === 'true';
        checkbox.checked = savedState;
        buttons.forEach(button => button.style.display = savedState ? 'none' : 'inline-block');
    };

    const checkAllRowsHidden = () => {
        const allRowsHidden = Array.from(document.querySelectorAll('.button-row:not([data-row="promoted"])'))
            .every(row => row.classList.contains('hidden'));
        document.querySelector('.no-rows-message').style.display = allRowsHidden ? 'block' : 'none';
    };

    toggleRow('hide-general', '.button-row[data-row="general"]');
    toggleRow('hide-ai', '.button-row[data-row="ai"]');
    toggleRow('hide-buy', '.button-row[data-row="buy"]');
    toggleRow('hide-social', '.button-row[data-row="social"]');
    toggleRow('hide-forum', '.button-row[data-row="forum"]');

    toggleSite('hide-google', 'google');
    toggleSite('hide-youtube', 'youtube');
    toggleSite('hide-wikipedia', 'wikipedia');
    toggleSite('hide-spotify', 'spotify');
    toggleSite('hide-netflix', 'netflix');
    toggleSite('hide-maps', 'maps');
    toggleSite('hide-chatgpt', 'chatgpt');
    toggleSite('hide-grok', 'grok');
    toggleSite('hide-gemini', 'gemini');
    toggleSite('hide-copilot', 'copilot');
    toggleSite('hide-claude', 'claude');
    toggleSite('hide-perplexity', 'perplexity');
    toggleSite('hide-amazon', 'amazon');
    toggleSite('hide-ebay', 'ebay');
    toggleSite('hide-alibaba', 'alibaba');
    toggleSite('hide-walmart', 'walmart');
    toggleSite('hide-mercadolibre', 'mercadolibre');
    toggleSite('hide-etsy', 'etsy');
    toggleSite('hide-x', 'x');
    toggleSite('hide-facebook', 'facebook');
    toggleSite('hide-tiktok', 'tiktok');
    toggleSite('hide-twitch', 'twitch');
    toggleSite('hide-linkedin', 'linkedin');
    toggleSite('hide-instagram', 'instagram');
    toggleSite('hide-reddit', 'reddit');
    toggleSite('hide-stackoverflow', 'stackoverflow');
    toggleSite('hide-discord', 'discord');
    toggleSite('hide-4chan', '4chan');
    toggleSite('hide-quora', 'quora');
    toggleSite('hide-ted', 'ted');

    const sortCheckbox = document.getElementById('sort-by-usage');
    sortCheckbox.addEventListener('change', () => localStorage.setItem('sortByUsage', sortCheckbox.checked));
    sortCheckbox.checked = localStorage.getItem('sortByUsage') === 'true';

    const resetButton = document.getElementById('reset-usage');
    resetButton.addEventListener('click', () => {
        localStorage.removeItem('usageStats');
        console.log('Usage stats reset');
    });

    const logoOnlyCheckbox = document.getElementById('logo-only');
    const logoHoverCheckbox = document.getElementById('logo-on-hover');
    const buttons = document.querySelectorAll('button[data-platform]');

    // Show logo only (normal state, no text)
    logoOnlyCheckbox.addEventListener('change', () => {
        const showLogosOnly = logoOnlyCheckbox.checked;
        localStorage.setItem('logoOnly', showLogosOnly);
        buttons.forEach(button => {
            const platform = button.dataset.platform;
            const logoUrl = faviconUrls[platform];
            if (logoUrl) {
                if (showLogosOnly) {
                    button.style.backgroundImage = `url(${logoUrl})`;
                    button.style.color = 'transparent';
                    button.classList.remove('logo-hover');
                } else if (!logoHoverCheckbox.checked) {
                    button.style.backgroundImage = 'none';
                    button.style.color = '';
                }
            }
        });
    });
    const savedLogoOnlyState = localStorage.getItem('logoOnly') === 'true';
    logoOnlyCheckbox.checked = savedLogoOnlyState;

    // Show logo on mouse over
    logoHoverCheckbox.addEventListener('change', () => {
        const showLogosOnHover = logoHoverCheckbox.checked;
        localStorage.setItem('logoOnHover', showLogosOnHover);
        buttons.forEach(button => {
            const platform = button.dataset.platform;
            const logoUrl = faviconUrls[platform];
            if (logoUrl) {
                button.classList.toggle('logo-hover', showLogosOnHover && !logoOnlyCheckbox.checked);
                if (!logoOnlyCheckbox.checked) {
                    button.style.backgroundImage = 'none';
                    button.style.color = '';
                }
            }
        });
    });
    const savedLogoHoverState = localStorage.getItem('logoOnHover') === 'true';
    logoHoverCheckbox.checked = savedLogoHoverState;

    // Apply initial states
    buttons.forEach(button => {
        const platform = button.dataset.platform;
        const logoUrl = faviconUrls[platform];
        if (logoUrl) {
            if (savedLogoOnlyState) {
                button.style.backgroundImage = `url(${logoUrl})`;
                button.style.color = 'transparent';
            } else if (savedLogoHoverState) {
                button.classList.add('logo-hover');
                button.style.backgroundImage = 'none';
                button.style.color = '';
            }
        }
    });

    const newTabCheckbox = document.getElementById('new-tab');
    newTabCheckbox.addEventListener('change', () => localStorage.setItem('newTab', newTabCheckbox.checked));
    newTabCheckbox.checked = localStorage.getItem('newTab') === 'true';

    checkAllRowsHidden();
});

const faviconUrls = {
    'google': 'https://www.google.com/favicon.ico',
    'youtube': 'https://www.youtube.com/favicon.ico',
    'wikipedia': 'https://en.wikipedia.org/favicon.ico',
    'spotify': 'https://www.spotify.com/favicon.ico',
    'netflix': 'https://www.netflix.com/favicon.ico',
    'maps': 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg',
    'chatgpt': 'https://chat.openai.com/favicon.ico',
    'grok': 'https://x.ai/favicon.ico',
    'gemini': 'https://www.google.com/favicon.ico',
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