let usageCounts = JSON.parse(localStorage.getItem('buttonUsage')) || {};
const saveUsage = () => localStorage.setItem('buttonUsage', JSON.stringify(usageCounts));

const searchUrls = {
    'google': 'https://www.google.com/search?q=',
    // ... (keep all search URLs as is)
};

const performSearch = (platform) => {
    if (platform.startsWith('promoted-')) return;
    const query = document.getElementById('query').value.trim().replace(/[<>&"']/g, '');
    if (!query) return alert('Please enter something in the search field.');
    usageCounts[platform] = (usageCounts[platform] || 0) + 1;
    saveUsage();
    const url = `${searchUrls[platform]}${encodeURIComponent(query)}`;
    settings.newTab ? window.open(url, '_blank') : window.location.href = url;
};

document.querySelectorAll('button[data-platform]').forEach(button => {
    button.addEventListener('click', () => performSearch(button.dataset.platform));
});