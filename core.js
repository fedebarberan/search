// Version 2.15 - Fixed promote-modal closing behavior
document.addEventListener('DOMContentLoaded', () => {
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
    Object.entries(faviconUrls).forEach(([platform, url]) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
    });

    const textarea = document.getElementById('query');
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = `${this.scrollHeight}px`;
    });

    const setupModal = (modalId, triggerId = null, triggerSelector = null) => {
        const modal = document.getElementById(modalId);
        if (!modal) {
            console.error(`Modal #${modalId} not found`);
            return;
        }

        // Close button
        const closeButton = modal.querySelector('.close');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        } else {
            console.warn(`Close button not found in #${modalId}`);
        }

        // Background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Trigger (icon or buttons)
        if (triggerId) {
            const trigger = document.getElementById(triggerId);
            if (trigger) {
                trigger.addEventListener('click', () => {
                    console.log(`Opening modal: ${modalId}`);
                    modal.style.display = 'block';
                });
            } else {
                console.error(`Trigger #${triggerId} not found for #${modalId}`);
            }
        } else if (triggerSelector) {
            document.querySelectorAll(triggerSelector).forEach(trigger => {
                trigger.addEventListener('click', () => {
                    console.log(`Opening modal: ${modalId} via ${triggerSelector}`);
                    modal.style.display = 'block';
                });
            });
        }
    };

    // Setup modals with icon triggers
    setupModal('settings-modal', 'settings-icon');
    setupModal('bug-modal', 'bug-icon');
    setupModal('suggestion-modal', 'suggestion-icon');
    setupModal('add-site-modal', 'add-site-icon');
    setupModal('language-modal', 'language-icon');

    // Setup promote-modal with "Available" button triggers
    setupModal('promote-modal', null, 'button[data-platform^="promoted-"]');

    // Cookie consent
    const consent = document.querySelector('.cookie-consent');
    const acceptButton = document.getElementById('accept-cookies');
    const declineButton = document.getElementById('decline-cookies');

    if (!localStorage.getItem('cookieConsent')) {
        if (consent) {
            consent.style.display = 'block';
            console.log('Cookie consent displayed');
        } else {
            console.error('Cookie consent element not found');
        }
    }

    if (acceptButton) {
        acceptButton.addEventListener('click', () => {
            console.log('Accept cookies clicked');
            localStorage.setItem('cookieConsent', 'accepted');
            consent.style.display = 'none';
        });
    } else {
        console.error('Accept cookies button not found');
    }

    if (declineButton) {
        declineButton.addEventListener('click', () => {
            console.log('Decline cookies clicked');
            localStorage.setItem('cookieConsent', 'declined');
            consent.style.display = 'none';
        });
    } else {
        console.error('Decline cookies button not found');
    }

    // AdSense push
    window.adsbygoogle = window.adsbygoogle || [];
    document.querySelectorAll('.adsbygoogle').forEach(() => {
        window.adsbygoogle.push({});
    });
});

// Shared utility function
window.logStats = (type, value, query = '') => {
    const hashedQuery = query ? sha256(query) : '';
    fetch('log_stats.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `type=${encodeURIComponent(type)}&value=${encodeURIComponent(value)}&time=${encodeURIComponent(new Date().toISOString())}&query=${encodeURIComponent(hashedQuery)}`
    }).catch(error => console.error('Stats logging failed:', error));
};