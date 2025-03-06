// Version 2.9 - Added dynamic label updates for sites and settings
const translations = {
    en: {
        enterSearch: 'Please enter something in the search field.',
        limitReached: 'Limit Reached (24h)',
        submit: 'Submit',
        submitted: 'Submitted!',
        resetVisitedSites: 'Reset visited sites',
        google: "Google",
        youtube: "YouTube",
        wikipedia: "Wikipedia",
        spotify: "Spotify",
        netflix: "Netflix",
        maps: "Maps",
        chatgpt: "ChatGPT",
        grok: "Grok",
        gemini: "Gemini",
        copilot: "Copilot",
        claude: "Claude",
        perplexity: "Perplexity",
        amazon: "Amazon",
        ebay: "eBay",
        alibaba: "Alibaba",
        walmart: "Walmart",
        mercadolibre: "MercadoLibre",
        etsy: "Etsy",
        x: "X",
        facebook: "Facebook",
        tiktok: "TikTok",
        twitch: "Twitch",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        reddit: "Reddit",
        stackoverflow: "Stack Overflow",
        discord: "Discord",
        "4chan": "4chan",
        quora: "Quora",
        ted: "TED",
        general: "General",
        ai: "AI",
        buy: "Buy",
        social: "Social",
        forum: "Forum",
        mostVisitedSitesFirst: "Most visited sites first",
        showLogoOnMouseOver: "Show logo on mouse over",
        openResultsInNewTab: "Open results in new tab"
    },
    es: {
        enterSearch: 'Por favor, ingrese algo en el campo de búsqueda.',
        limitReached: 'Límite alcanzado (24h)',
        submit: 'Enviar',
        submitted: '¡Enviado!',
        resetVisitedSites: 'Restablecer sitios visitados',
        google: "Google",
        youtube: "YouTube",
        wikipedia: "Wikipedia",
        spotify: "Spotify",
        netflix: "Netflix",
        maps: "Mapas",
        chatgpt: "ChatGPT",
        grok: "Grok",
        gemini: "Gemini",
        copilot: "Copilot",
        claude: "Claude",
        perplexity: "Perplexity",
        amazon: "Amazon",
        ebay: "eBay",
        alibaba: "Alibaba",
        walmart: "Walmart",
        mercadolibre: "MercadoLibre",
        etsy: "Etsy",
        x: "X",
        facebook: "Facebook",
        tiktok: "TikTok",
        twitch: "Twitch",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        reddit: "Reddit",
        stackoverflow: "Stack Overflow",
        discord: "Discord",
        "4chan": "4chan",
        quora: "Quora",
        ted: "TED",
        general: "General",
        ai: "IA",
        buy: "Comprar",
        social: "Social",
        forum: "Foro",
        mostVisitedSitesFirst: "Sitios más visitados primero",
        showLogoOnMouseOver: "Mostrar logo al pasar el ratón",
        openResultsInNewTab: "Abrir resultados en nueva pestaña"
    },
    hi: {
        enterSearch: 'कृपया खोज क्षेत्र में कुछ दर्ज करें।',
        limitReached: 'सीमा पहुँच गई (24 घंटे)',
        submit: 'जमा करें',
        submitted: 'जमा किया गया!',
        resetVisitedSites: 'देखे गए साइट्स रीसेट करें',
        google: "Google",
        youtube: "YouTube",
        wikipedia: "Wikipedia",
        spotify: "Spotify",
        netflix: "Netflix",
        maps: "नक्शे",
        chatgpt: "ChatGPT",
        grok: "Grok",
        gemini: "Gemini",
        copilot: "Copilot",
        claude: "Claude",
        perplexity: "Perplexity",
        amazon: "Amazon",
        ebay: "eBay",
        alibaba: "Alibaba",
        walmart: "Walmart",
        mercadolibre: "MercadoLibre",
        etsy: "Etsy",
        x: "X",
        facebook: "Facebook",
        tiktok: "TikTok",
        twitch: "Twitch",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        reddit: "Reddit",
        stackoverflow: "Stack Overflow",
        discord: "Discord",
        "4chan": "4chan",
        quora: "Quora",
        ted: "TED",
        general: "सामान्य",
        ai: "AI",
        buy: "खरीदें",
        social: "सामाजिक",
        forum: "मंच",
        mostVisitedSitesFirst: "सबसे अधिक देखे गए साइट्स पहले",
        showLogoOnMouseOver: "माउस ओवर पर लोगो दिखाएं",
        openResultsInNewTab: "नए टैब में परिणाम खोलें"
    },
    bn: {
        enterSearch: 'অনুগ্রহ করে অনুসন্ধান ক্ষেত্রে কিছু প্রবেশ করুন।',
        limitReached: 'সীমা পৌঁছে গেছে (২৪ ঘণ্টা)',
        submit: 'জমা দিন',
        submitted: 'জমা দেওয়া হয়েছে!',
        resetVisitedSites: 'পরিদর্শিত সাইট রিসেট করুন',
        google: "Google",
        youtube: "YouTube",
        wikipedia: "Wikipedia",
        spotify: "Spotify",
        netflix: "Netflix",
        maps: "মানচিত্র",
        chatgpt: "ChatGPT",
        grok: "Grok",
        gemini: "Gemini",
        copilot: "Copilot",
        claude: "Claude",
        perplexity: "Perplexity",
        amazon: "Amazon",
        ebay: "eBay",
        alibaba: "Alibaba",
        walmart: "Walmart",
        mercadolibre: "MercadoLibre",
        etsy: "Etsy",
        x: "X",
        facebook: "Facebook",
        tiktok: "TikTok",
        twitch: "Twitch",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        reddit: "Reddit",
        stackoverflow: "Stack Overflow",
        discord: "Discord",
        "4chan": "4chan",
        quora: "Quora",
        ted: "TED",
        general: "সাধারণ",
        ai: "AI",
        buy: "কিনুন",
        social: "সামাজিক",
        forum: "ফোরাম",
        mostVisitedSitesFirst: "সবচেয়ে বেশি পরিদর্শিত সাইটগুলি প্রথমে",
        showLogoOnMouseOver: "মাউস ওভারে লোগো দেখান",
        openResultsInNewTab: "নতুন ট্যাবে ফলাফল খুলুন"
    },
    ar: {
        enterSearch: 'يرجى إدخال شيء في حقل البحث.',
        limitReached: 'تم الوصول إلى الحد (24 ساعة)',
        submit: 'إرسال',
        submitted: 'تم الإرسال!',
        resetVisitedSites: 'إعادة تعيين المواقع التي تمت زيارتها',
        google: "Google",
        youtube: "YouTube",
        wikipedia: "Wikipedia",
        spotify: "Spotify",
        netflix: "Netflix",
        maps: "خرائط",
        chatgpt: "ChatGPT",
        grok: "Grok",
        gemini: "Gemini",
        copilot: "Copilot",
        claude: "Claude",
        perplexity: "Perplexity",
        amazon: "Amazon",
        ebay: "eBay",
        alibaba: "Alibaba",
        walmart: "Walmart",
        mercadolibre: "MercadoLibre",
        etsy: "Etsy",
        x: "X",
        facebook: "Facebook",
        tiktok: "TikTok",
        twitch: "Twitch",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        reddit: "Reddit",
        stackoverflow: "Stack Overflow",
        discord: "Discord",
        "4chan": "4chan",
        quora: "Quora",
        ted: "TED",
        general: "عام",
        ai: "AI",
        buy: "شراء",
        social: "اجتماعي",
        forum: "منتدى",
        mostVisitedSitesFirst: "المواقع الأكثر زيارة أولاً",
        showLogoOnMouseOver: "إظهار الشعار عند تمرير الفأرة",
        openResultsInNewTab: "فتح النتائج في علامة تبويب جديدة"
    },
    fr: {
        enterSearch: 'Veuillez entrer quelque chose dans le champ de recherche.',
        limitReached: 'Limite atteinte (24h)',
        submit: 'Soumettre',
        submitted: 'Soumis!',
        resetVisitedSites: 'Réinitialiser les sites visités',
        google: "Google",
        youtube: "YouTube",
        wikipedia: "Wikipedia",
        spotify: "Spotify",
        netflix: "Netflix",
        maps: "Cartes",
        chatgpt: "ChatGPT",
        grok: "Grok",
        gemini: "Gemini",
        copilot: "Copilot",
        claude: "Claude",
        perplexity: "Perplexity",
        amazon: "Amazon",
        ebay: "eBay",
        alibaba: "Alibaba",
        walmart: "Walmart",
        mercadolibre: "MercadoLibre",
        etsy: "Etsy",
        x: "X",
        facebook: "Facebook",
        tiktok: "TikTok",
        twitch: "Twitch",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        reddit: "Reddit",
        stackoverflow: "Stack Overflow",
        discord: "Discord",
        "4chan": "4chan",
        quora: "Quora",
        ted: "TED",
        general: "Général",
        ai: "IA",
        buy: "Acheter",
        social: "Social",
        forum: "Forum",
        mostVisitedSitesFirst: "Sites les plus visités en premier",
        showLogoOnMouseOver: "Afficher le logo au survol",
        openResultsInNewTab: "Ouvrir les résultats dans un nouvel onglet"
    },
    pt: {
        enterSearch: 'Por favor, insira algo no campo de busca.',
        limitReached: 'Limite atingido (24h)',
        submit: 'Enviar',
        submitted: 'Enviado!',
        resetVisitedSites: 'Redefinir sites visitados',
        google: "Google",
        youtube: "YouTube",
        wikipedia: "Wikipedia",
        spotify: "Spotify",
        netflix: "Netflix",
        maps: "Mapas",
        chatgpt: "ChatGPT",
        grok: "Grok",
        gemini: "Gemini",
        copilot: "Copilot",
        claude: "Claude",
        perplexity: "Perplexity",
        amazon: "Amazon",
        ebay: "eBay",
        alibaba: "Alibaba",
        walmart: "Walmart",
        mercadolibre: "MercadoLibre",
        etsy: "Etsy",
        x: "X",
        facebook: "Facebook",
        tiktok: "TikTok",
        twitch: "Twitch",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        reddit: "Reddit",
        stackoverflow: "Stack Overflow",
        discord: "Discord",
        "4chan": "4chan",
        quora: "Quora",
        ted: "TED",
        general: "Geral",
        ai: "IA",
        buy: "Comprar",
        social: "Social",
        forum: "Fórum",
        mostVisitedSitesFirst: "Sites mais visitados primeiro",
        showLogoOnMouseOver: "Mostrar logotipo ao passar o mouse",
        openResultsInNewTab: "Abrir resultados em nova aba"
    },
    ru: {
        enterSearch: 'Пожалуйста, введите что-нибудь в поле поиска.',
        limitReached: 'Достигнут лимит (24 часа)',
        submit: 'Отправить',
        submitted: 'Отправлено!',
        resetVisitedSites: 'Сбросить посещенные сайты',
        google: "Google",
        youtube: "YouTube",
        wikipedia: "Wikipedia",
        spotify: "Spotify",
        netflix: "Netflix",
        maps: "Карты",
        chatgpt: "ChatGPT",
        grok: "Grok",
        gemini: "Gemini",
        copilot: "Copilot",
        claude: "Claude",
        perplexity: "Perplexity",
        amazon: "Amazon",
        ebay: "eBay",
        alibaba: "Alibaba",
        walmart: "Walmart",
        mercadolibre: "MercadoLibre",
        etsy: "Etsy",
        x: "X",
        facebook: "Facebook",
        tiktok: "TikTok",
        twitch: "Twitch",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        reddit: "Reddit",
        stackoverflow: "Stack Overflow",
        discord: "Discord",
        "4chan": "4chan",
        quora: "Quora",
        ted: "TED",
        general: "Общие",
        ai: "ИИ",
        buy: "Купить",
        social: "Социальные",
        forum: "Форум",
        mostVisitedSitesFirst: "Наиболее посещаемые сайты первыми",
        showLogoOnMouseOver: "Показывать логотип при наведении",
        openResultsInNewTab: "Открывать результаты в новой вкладке"
    },
    id: {
        enterSearch: 'Silakan masukkan sesuatu di kolom pencarian.',
        limitReached: 'Batas tercapai (24 jam)',
        submit: 'Kirim',
        submitted: 'Terkirim!',
        resetVisitedSites: 'Reset situs yang dikunjungi',
        google: "Google",
        youtube: "YouTube",
        wikipedia: "Wikipedia",
        spotify: "Spotify",
        netflix: "Netflix",
        maps: "Peta",
        chatgpt: "ChatGPT",
        grok: "Grok",
        gemini: "Gemini",
        copilot: "Copilot",
        claude: "Claude",
        perplexity: "Perplexity",
        amazon: "Amazon",
        ebay: "eBay",
        alibaba: "Alibaba",
        walmart: "Walmart",
        mercadolibre: "MercadoLibre",
        etsy: "Etsy",
        x: "X",
        facebook: "Facebook",
        tiktok: "TikTok",
        twitch: "Twitch",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        reddit: "Reddit",
        stackoverflow: "Stack Overflow",
        discord: "Discord",
        "4chan": "4chan",
        quora: "Quora",
        ted: "TED",
        general: "Umum",
        ai: "AI",
        buy: "Beli",
        social: "Sosial",
        forum: "Forum",
        mostVisitedSitesFirst: "Situs paling sering dikunjungi dulu",
        showLogoOnMouseOver: "Tampilkan logo saat mouse di atas",
        openResultsInNewTab: "Buka hasil di tab baru"
    },
    it: {
        enterSearch: 'Per favore, inserisci qualcosa nel campo di ricerca.',
        limitReached: 'Limite raggiunto (24 ore)',
        submit: 'Invia',
        submitted: 'Inviato!',
        resetVisitedSites: 'Ripristina siti visitati',
        google: "Google",
        youtube: "YouTube",
        wikipedia: "Wikipedia",
        spotify: "Spotify",
        netflix: "Netflix",
        maps: "Mappe",
        chatgpt: "ChatGPT",
        grok: "Grok",
        gemini: "Gemini",
        copilot: "Copilot",
        claude: "Claude",
        perplexity: "Perplexity",
        amazon: "Amazon",
        ebay: "eBay",
        alibaba: "Alibaba",
        walmart: "Walmart",
        mercadolibre: "MercadoLibre",
        etsy: "Etsy",
        x: "X",
        facebook: "Facebook",
        tiktok: "TikTok",
        twitch: "Twitch",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        reddit: "Reddit",
        stackoverflow: "Stack Overflow",
        discord: "Discord",
        "4chan": "4chan",
        quora: "Quora",
        ted: "TED",
        general: "Generale",
        ai: "AI",
        buy: "Compra",
        social: "Sociale",
        forum: "Forum",
        mostVisitedSitesFirst: "Siti più visitati per primi",
        showLogoOnMouseOver: "Mostra logo al passaggio del mouse",
        openResultsInNewTab: "Apri risultati in una nuova scheda"
    },
    de: {
        enterSearch: 'Bitte geben Sie etwas in das Suchfeld ein.',
        limitReached: 'Limit erreicht (24 Stunden)',
        submit: 'Absenden',
        submitted: 'Gesendet!',
        resetVisitedSites: 'Besuchte Seiten zurücksetzen',
        google: "Google",
        youtube: "YouTube",
        wikipedia: "Wikipedia",
        spotify: "Spotify",
        netflix: "Netflix",
        maps: "Karten",
        chatgpt: "ChatGPT",
        grok: "Grok",
        gemini: "Gemini",
        copilot: "Copilot",
        claude: "Claude",
        perplexity: "Perplexity",
        amazon: "Amazon",
        ebay: "eBay",
        alibaba: "Alibaba",
        walmart: "Walmart",
        mercadolibre: "MercadoLibre",
        etsy: "Etsy",
        x: "X",
        facebook: "Facebook",
        tiktok: "TikTok",
        twitch: "Twitch",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        reddit: "Reddit",
        stackoverflow: "Stack Overflow",
        discord: "Discord",
        "4chan": "4chan",
        quora: "Quora",
        ted: "TED",
        general: "Allgemein",
        ai: "KI",
        buy: "Kaufen",
        social: "Sozial",
        forum: "Forum",
        mostVisitedSitesFirst: "Meistbesuchte Seiten zuerst",
        showLogoOnMouseOver: "Logo bei Mauszeiger anzeigen",
        openResultsInNewTab: "Ergebnisse in neuem Tab öffnen"
    }
};

window.translations = translations;

function updateLanguage(lang) {
    localStorage.setItem('language', lang);
    const translation = translations[lang] || translations['en'];

    // Update search buttons
    document.querySelectorAll('button[data-platform]').forEach(button => {
        const platform = button.dataset.platform;
        if (!platform.startsWith('promoted-') && translation[platform]) {
            button.textContent = translation[platform];
        }
    });

    // Update row labels
    document.querySelectorAll('.button-row label').forEach(label => {
        const row = label.parentElement.dataset.row;
        if (translation[row]) {
            label.textContent = translation[row];
        }
    });

    // Update settings modal labels
    document.querySelector('#settings-modal label:nth-child(1) span').textContent = translation.mostVisitedSitesFirst;
    document.querySelector('#reset-usage').textContent = translation.resetVisitedSites;
    document.querySelector('#settings-modal label:nth-child(4) span').textContent = translation.showLogoOnMouseOver;
    document.querySelector('#settings-modal label:nth-child(5) span').textContent = translation.openResultsInNewTab;

    // Update row toggles in settings modal
    document.querySelector('#hide-general').nextSibling.nextSibling.textContent = translation.general;
    document.querySelector('#hide-ai').nextSibling.nextSibling.textContent = translation.ai;
    document.querySelector('#hide-buy').nextSibling.nextSibling.textContent = translation.buy;
    document.querySelector('#hide-social').nextSibling.nextSibling.textContent = translation.social;
    document.querySelector('#hide-forum').nextSibling.nextSibling.textContent = translation.forum;
}

document.querySelectorAll('.language-btn').forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.dataset.lang;
        updateLanguage(lang);
        document.getElementById('language-modal').style.display = 'none';
    });
});

// Apply language on page load
const savedLang = localStorage.getItem('language') || 'en';
updateLanguage(savedLang);