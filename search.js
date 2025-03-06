// Version 2.10 - Added version number for tracking
let usageCounts = JSON.parse(localStorage.getItem('buttonUsage')) || {};
const saveUsage = () => localStorage.setItem('buttonUsage', JSON.stringify(usageCounts));

const searchUrls = {
    'google': 'https://www.google.com/search?q=',
    'youtube': 'https://www.youtube.com/results?search_query=',
    'wikipedia': 'https://es.wikipedia.org/wiki/Special:Search?search=',
    'spotify': 'https://open.spotify.com/search/',
    'netflix': 'https://www.netflix.com/search?q=',
    'maps': 'https://maps.google.com/?q=',
    'chatgpt': 'https://chat.openai.com/?q=',
    'grok': 'https://x.ai/search?q=',
    'gemini': 'https://gemini.google.com/search?q=',
    'copilot': 'https://copilot.microsoft.com/?q=',
    'claude': 'https://anthropic.com/claude?q=',
    'perplexity': 'https://www.perplexity.ai/search?q=',
    'amazon': 'https://www.amazon.com/s?k=',
    'ebay': 'https://www.ebay.com/sch/i.html?_nkw=',
    'alibaba': 'https://www.alibaba.com/trade/search?keywords=',
    'walmart': 'https://www.walmart.com/search/?query=',
    'mercadolibre': 'https://www.mercadolibre.com.ar/jm/search?as_word=',
    'etsy': 'https://www.etsy.com/search?q=',
    'x': 'https://x.com/search?q=',
    'facebook': 'https://www.facebook.com/search/top?q=',
    'tiktok': 'https://www.tiktok.com/search?q=',
    'twitch': 'https://www.twitch.tv/search?term=',
    'linkedin': 'https://www.linkedin.com/search/results/all/?keywords=',
    'instagram': 'https://www.instagram.com/explore/tags/',
    'reddit': 'https://www.reddit.com/search?q=',
    'stackoverflow': 'https://stackoverflow.com/search?q=',
    'discord': 'https://discord.com/channels/@me?search=',
    '4chan': 'https://www.4channel.org/search#',
    'quora': 'https://www.quora.com/search?q=',
    'ted': 'https://www.ted.com/search?q='
};

const performSearch = (platform) => {
    if (platform.startsWith('promoted-')) return;
    const query = document.getElementById('query').value.trim().replace(/[<>&"']/g, '');
    if (!query) {
        alert(window.translations[localStorage.getItem('language') || 'en'].enterSearch || 'Please enter something in the search field.');
        return;
    }
    usageCounts[platform] = (usageCounts[platform] || 0) + 1;
    saveUsage();
    window.logStats('click', platform, query);
    const url = `${searchUrls[platform]}${encodeURIComponent(query)}`;
    settings.newTab ? window.open(url, '_blank') : window.location.href = url;
};

document.querySelectorAll('button[data-platform]').forEach(button => {
    button.addEventListener('click', () => performSearch(button.dataset.platform));
});