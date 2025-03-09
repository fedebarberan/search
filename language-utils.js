// language-utils.js
import { translations, languageFlags } from './language-config.js';

export function updateCookieConsent(translation) {
    const cookieConsent = document.querySelector('.cookie-consent');
    if (!cookieConsent) return;

    const cookieConsentP = cookieConsent.querySelector('p');
    if (cookieConsentP) {
        cookieConsentP.textContent = translation.cookieText + ' ';
        const learnMoreLink = document.createElement('a');
        learnMoreLink.href = '#';
        learnMoreLink.target = '_blank';
        learnMoreLink.textContent = translation.learnMore;
        cookieConsentP.appendChild(learnMoreLink);
    }
    const acceptButton = document.getElementById('accept-cookies');
    if (acceptButton) acceptButton.textContent = translation.accept;
    const declineButton = document.getElementById('decline-cookies');
    if (declineButton) declineButton.textContent = translation.decline;
}

export function updateLanguage(lang, isUserSelection = false) {
    localStorage.setItem('language', lang);
    const translation = translations[lang] || translations['en'];

    const languageIcon = document.getElementById('language-icon');
    if (languageIcon && isUserSelection) {
        languageIcon.textContent = languageFlags[lang] || '🔠';
    }

    const queryInput = document.getElementById('query');
    if (queryInput) queryInput.placeholder = translation.enterSearch;

    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) themeIcon.dataset.tooltip = translation.toggleTheme;
    const settingsIcon = document.getElementById('settings-icon');
    if (settingsIcon) settingsIcon.dataset.tooltip = translation.settings;
    const bugIcon = document.getElementById('bug-icon');
    if (bugIcon) bugIcon.dataset.tooltip = translation.reportBug;
    const suggestionIcon = document.getElementById('suggestion-icon');
    if (suggestionIcon) suggestionIcon.dataset.tooltip = translation.suggestFeature;
    const addSiteIcon = document.getElementById('add-site-icon');
    if (addSiteIcon) addSiteIcon.dataset.tooltip = translation.addSite;
    if (languageIcon) languageIcon.dataset.tooltip = translation.language;

    document.querySelectorAll('button[data-platform]').forEach(button => {
        const platform = button.dataset.platform;
        if (!platform.startsWith('promoted-') && translation[platform]) {
            button.textContent = translation[platform];
        }
    });

    document.querySelectorAll('.button-row label').forEach(label => {
        const row = label.parentElement.dataset.row;
        if (translation[row]) {
            label.textContent = translation[row];
        }
    });

    const bugModalTitle = document.querySelector('#bug-modal h4');
    if (bugModalTitle) bugModalTitle.textContent = translation.reportABug;
    const suggestionModalTitle = document.querySelector('#suggestion-modal h4');
    if (suggestionModalTitle) suggestionModalTitle.textContent = translation.suggestAFeature;
    const addSiteModalTitle = document.querySelector('#add-site-modal h4');
    if (addSiteModalTitle) addSiteModalTitle.textContent = translation.addASite;
    const promoteModalTitle = document.querySelector('#promote-modal h4');
    if (promoteModalTitle) promoteModalTitle.textContent = translation.promoteYourSite;
    const languageModalTitle = document.querySelector('#language-modal h4');
    if (languageModalTitle) languageModalTitle.textContent = translation.language;

    const bugMessage = document.getElementById('bug-message');
    if (bugMessage) bugMessage.placeholder = translation.describeBug;
    const suggestionMessage = document.getElementById('suggestion-message');
    if (suggestionMessage) suggestionMessage.placeholder = translation.yourSuggestion;
    const addSiteInput = document.getElementById('add-site-input');
    if (addSiteInput) addSiteInput.placeholder = translation.siteUrl;
    const promoteMessage = document.getElementById('promote-message');
    if (promoteMessage) promoteMessage.placeholder = translation.promoteMessage;
    const submitBug = document.getElementById('submit-bug');
    if (submitBug) submitBug.textContent = translation.submit;
    const submitSuggestion = document.getElementById('submit-suggestion');
    if (submitSuggestion) submitSuggestion.textContent = translation.submit;
    const submitAddSite = document.getElementById('submit-add-site');
    if (submitAddSite) submitAddSite.textContent = translation.submit;
    const submitPromote = document.getElementById('submit-promote');
    if (submitPromote) submitPromote.textContent = translation.submit;

    const generalSettingsTitle = document.querySelector('#settings-modal .modal-section:first-child h4');
    if (generalSettingsTitle) generalSettingsTitle.textContent = translation.generalSettings;
    const sortByUsageLabel = document.querySelector('#sort-by-usage');
    if (sortByUsageLabel && sortByUsageLabel.nextSibling) sortByUsageLabel.nextSibling.nextSibling.textContent = translation.mostVisitedSitesFirst;
    const resetUsage = document.getElementById('reset-usage');
    if (resetUsage) resetUsage.textContent = translation.resetVisitedSites;
    const logoOnHoverLabel = document.querySelector('#logo-on-hover');
    if (logoOnHoverLabel && logoOnHoverLabel.nextSibling) logoOnHoverLabel.nextSibling.nextSibling.textContent = translation.showLogoOnMouseOver;
    const newTabLabel = document.querySelector('#new-tab');
    if (newTabLabel && newTabLabel.nextSibling) newTabLabel.nextSibling.nextSibling.textContent = translation.openResultsInNewTab;
    const rowsTitle = document.querySelector('#settings-modal .modal-section:nth-child(2) h4');
    if (rowsTitle) rowsTitle.textContent = translation.rows;
    const sitesTitle = document.querySelector('#settings-modal .modal-section:nth-child(3) h4');
    if (sitesTitle) sitesTitle.textContent = translation.sites;

    const hideGeneralLabel = document.querySelector('#hide-general');
    if (hideGeneralLabel && hideGeneralLabel.nextSibling) hideGeneralLabel.nextSibling.nextSibling.textContent = translation.general;
    const hideAiLabel = document.querySelector('#hide-ai');
    if (hideAiLabel && hideAiLabel.nextSibling) hideAiLabel.nextSibling.nextSibling.textContent = translation.ai;
    const hideBuyLabel = document.querySelector('#hide-buy');
    if (hideBuyLabel && hideBuyLabel.nextSibling) hideBuyLabel.nextSibling.nextSibling.textContent = translation.buy;
    const hideSocialLabel = document.querySelector('#hide-social');
    if (hideSocialLabel && hideSocialLabel.nextSibling) hideSocialLabel.nextSibling.nextSibling.textContent = translation.social;
    const hideForumLabel = document.querySelector('#hide-forum');
    if (hideForumLabel && hideForumLabel.nextSibling) hideForumLabel.nextSibling.nextSibling.textContent = translation.forum;

    document.querySelectorAll('#settings-modal .sites-column h5').forEach((h5, index) => {
        const sections = ['general', 'ai', 'buy', 'social', 'forum'];
        if (h5) h5.textContent = translation[sections[index]];
    });

    updateCookieConsent(translation);
}