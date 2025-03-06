// Version 1.1 - Updated language modal to grid, fixed null error, and improved selection behavior
const translations = {
    'default': {
        toggleTheme: 'Toggle Theme',
        settings: 'Settings',
        reportBug: 'Report Bug',
        suggestFeature: 'Suggest Feature',
        addSite: 'Add Site',
        language: 'Language',
        enterSearch: 'Please enter something in the search field.',
        general: 'General',
        ai: 'AI',
        buy: 'Buy',
        social: 'Social',
        forum: 'Forum',
        available: 'Available',
        noRowsMessage: 'All rows are hidden. Adjust settings to show them.',
        generalSettings: 'General Settings',
        mostVisitedSites: 'Most visited sites first',
        resetVisitedSites: 'Reset visited sites',
        showLogoOnHover: 'Show logo on mouse over',
        openInNewTab: 'Open results in new tab',
        rows: 'Rows',
        sites: 'Sites',
        reportABug: 'Report a Bug',
        describeBug: 'Describe the bug...',
        suggestAFeature: 'Suggest a Feature',
        yourSuggestion: 'Your suggestion...',
        addASite: 'Add a Site',
        httpPlaceholder: 'http://',
        promote: 'Advertise in this site',
        promotionDetails: 'Your message here',
        submit: 'Submit',
        submitted: 'Submitted!',
        limitReached: 'Limit Reached (24h)',
        cookieConsent: 'We use cookies to improve your experience.',
        learnMore: 'Learn more',
        accept: 'Accept',
        decline: 'Decline',
        selectLanguage: 'Language'
    },
    'en': {
        toggleTheme: 'Toggle Theme',
        settings: 'Settings',
        reportBug: 'Report Bug',
        suggestFeature: 'Suggest Feature',
        addSite: 'Add Site',
        language: 'Language',
        enterSearch: 'Please enter something in the search field.',
        general: 'General',
        ai: 'AI',
        buy: 'Buy',
        social: 'Social',
        forum: 'Forum',
        available: 'Available',
        noRowsMessage: 'All rows are hidden. Adjust settings to show them.',
        generalSettings: 'General Settings',
        mostVisitedSites: 'Most visited sites first',
        resetVisitedSites: 'Reset visited sites',
        showLogoOnHover: 'Show logo on mouse over',
        openInNewTab: 'Open results in new tab',
        rows: 'Rows',
        sites: 'Sites',
        reportABug: 'Report a Bug',
        describeBug: 'Describe the bug...',
        suggestAFeature: 'Suggest a Feature',
        yourSuggestion: 'Your suggestion...',
        addASite: 'Add a Site',
        httpPlaceholder: 'http://',
        promote: 'Advertise in this site',
        promotionDetails: 'Your message here',
        submit: 'Submit',
        submitted: 'Submitted!',
        limitReached: 'Limit Reached (24h)',
        cookieConsent: 'We use cookies to improve your experience.',
        learnMore: 'Learn more',
        accept: 'Accept',
        decline: 'Decline',
        selectLanguage: 'Language'
    },
    'es': {
        toggleTheme: 'Cambiar tema',
        settings: 'Configuración',
        reportBug: 'Reportar error',
        suggestFeature: 'Sugerir función',
        addSite: 'Añadir sitio',
        language: 'Idioma',
        enterSearch: 'Por favor, ingrese algo en el campo de búsqueda.',
        general: 'General',
        ai: 'IA',
        buy: 'Comprar',
        social: 'Social',
        forum: 'Foro',
        available: 'Disponible',
        noRowsMessage: 'Todas las filas están ocultas. Ajuste la configuración para mostrarlas.',
        generalSettings: 'Configuración general',
        mostVisitedSites: 'Sitios más visitados primero',
        resetVisitedSites: 'Restablecer sitios visitados',
        showLogoOnHover: 'Mostrar logo al pasar el ratón',
        openInNewTab: 'Abrir resultados en nueva pestaña',
        rows: 'Filas',
        sites: 'Sitios',
        reportABug: 'Reportar un error',
        describeBug: 'Describe el error...',
        suggestAFeature: 'Sugerir una función',
        yourSuggestion: 'Tu sugerencia...',
        addASite: 'Añadir un sitio',
        httpPlaceholder: 'http://',
        promote: 'Anunciar en este sitio',
        promotionDetails: 'Tu mensaje aquí',
        submit: 'Enviar',
        submitted: '¡Enviado!',
        limitReached: 'Límite alcanzado (24h)',
        cookieConsent: 'Usamos cookies para mejorar tu experiencia.',
        learnMore: 'Aprende más',
        accept: 'Aceptar',
        decline: 'Rechazar',
        selectLanguage: 'Idioma'
    },
    'hi': {
        toggleTheme: 'थीम बदलें',
        settings: 'सेटिंग्स',
        reportBug: 'बग रिपोर्ट करें',
        suggestFeature: 'सुझाव दें',
        addSite: 'साइट जोड़ें',
        language: 'भाषा',
        enterSearch: 'कृपया खोज क्षेत्र में कुछ दर्ज करें।',
        general: 'सामान्य',
        ai: 'एआई',
        buy: 'खरीदें',
        social: 'सामाजिक',
        forum: 'मंच',
        available: 'उपलब्ध',
        noRowsMessage: 'सभी पंक्तियाँ छिपी हुई हैं। इन्हें दिखाने के लिए सेटिंग्स समायोजित करें।',
        generalSettings: 'सामान्य सेटिंग्स',
        mostVisitedSites: 'सबसे अधिक देखी गई साइट्स पहले',
        resetVisitedSites: 'देखी गई साइट्स रीसेट करें',
        showLogoOnHover: 'माउस ओवर पर लोगो दिखाएं',
        openInNewTab: 'नई टैब में परिणाम खोलें',
        rows: 'पंक्तियाँ',
        sites: 'साइट्स',
        reportABug: 'बग रिपोर्ट करें',
        describeBug: 'बग का वर्णन करें...',
        suggestAFeature: 'एक सुविधा सुझाएं',
        yourSuggestion: 'आपका सुझाव...',
        addASite: 'एक साइट जोड़ें',
        httpPlaceholder: 'http://',
        promote: 'इस साइट पर विज्ञापन करें',
        promotionDetails: 'आपका संदेश यहाँ',
        submit: 'जमा करें',
        submitted: 'जमा हो गया!',
        limitReached: 'सीमा पहुँच गई (24 घंटे)',
        cookieConsent: 'हम आपके अनुभव को बेहतर करने के लिए कुकीज़ का उपयोग करते हैं।',
        learnMore: 'और जानें',
        accept: 'स्वीकार करें',
        decline: 'अस्वीकार करें',
        selectLanguage: 'भाषा'
    },
    'bn': {
        toggleTheme: 'থিম টগল করুন',
        settings: 'সেটিংস',
        reportBug: 'বাগ রিপোর্ট করুন',
        suggestFeature: 'বৈশিষ্ট্য প্রস্তাব করুন',
        addSite: 'সাইট যোগ করুন',
        language: 'ভাষা',
        enterSearch: 'অনুগ্রহ করে অনুসন্ধান ক্ষেত্রে কিছু লিখুন।',
        general: 'সাধারণ',
        ai: 'এআই',
        buy: 'কিনুন',
        social: 'সামাজিক',
        forum: 'ফোরাম',
        available: 'উপলব্ধ',
        noRowsMessage: 'সব সারি লুকানো আছে। দেখানোর জন্য সেটিংস সামঞ্জস্য করুন।',
        generalSettings: 'সাধারণ সেটিংস',
        mostVisitedSites: 'সবচেয়ে বেশি পরিদর্শিত সাইটগুলি প্রথমে',
        resetVisitedSites: 'পরিদর্শিত সাইটগুলি রিসেট করুন',
        showLogoOnHover: 'মাউস ওভারে লোগো দেখান',
        openInNewTab: 'নতুন ট্যাবে ফলাফল খুলুন',
        rows: 'সারি',
        sites: 'সাইট',
        reportABug: 'বাগ রিপোর্ট করুন',
        describeBug: 'বাগ বর্ণনা করুন...',
        suggestAFeature: 'একটি বৈশিষ্ট্য প্রস্তাব করুন',
        yourSuggestion: 'আপনার প্রস্তাব...',
        addASite: 'একটি সাইট যোগ করুন',
        httpPlaceholder: 'http://',
        promote: 'এই সাইটে বিজ্ঞাপন দিন',
        promotionDetails: 'আপনার বার্তা এখানে',
        submit: 'জমা দিন',
        submitted: 'জমা দেওয়া হয়েছে!',
        limitReached: 'সীমা পৌঁছে গেছে (২৪ ঘণ্টা)',
        cookieConsent: 'আমরা আপনার অভিজ্ঞতা উন্নত করতে কুকিজ ব্যবহার করি।',
        learnMore: 'আরও জানুন',
        accept: 'গ্রহণ করুন',
        decline: 'প্রত্যাখ্যান করুন',
        selectLanguage: 'ভাষা'
    },
    'ar': {
        toggleTheme: 'تبديل السمة',
        settings: 'الإعدادات',
        reportBug: 'الإبلاغ عن خطأ',
        suggestFeature: 'اقتراح ميزة',
        addSite: 'إضافة موقع',
        language: 'اللغة',
        enterSearch: 'يرجى إدخال شيء في حقل البحث.',
        general: 'عام',
        ai: 'ذكاء اصطناعي',
        buy: 'شراء',
        social: 'اجتماعي',
        forum: 'منتدى',
        available: 'متاح',
        noRowsMessage: 'جميع الصفوف مخفية. اضبط الإعدادات لإظهارها.',
        generalSettings: 'الإعدادات العامة',
        mostVisitedSites: 'المواقع الأكثر زيارة أولاً',
        resetVisitedSites: 'إعادة تعيين المواقع المزورة',
        showLogoOnHover: 'إظهار الشعار عند المرور بالفأرة',
        openInNewTab: 'فتح النتائج في علامة تبويب جديدة',
        rows: 'صفوف',
        sites: 'مواقع',
        reportABug: 'الإبلاغ عن خطأ',
        describeBug: 'صف الخطأ...',
        suggestAFeature: 'اقتراح ميزة',
        yourSuggestion: 'اقتراحك...',
        addASite: 'إضافة موقع',
        httpPlaceholder: 'http://',
        promote: 'الإعلان في هذا الموقع',
        promotionDetails: 'رسالتك هنا',
        submit: 'إرسال',
        submitted: 'تم الإرسال!',
        limitReached: 'تم الوصول إلى الحد (24 ساعة)',
        cookieConsent: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك.',
        learnMore: 'تعرف على المزيد',
        accept: 'قبول',
        decline: 'رفض',
        selectLanguage: 'لغة'
    },
    'fr': {
        toggleTheme: 'Changer de thème',
        settings: 'Paramètres',
        reportBug: 'Signaler un bug',
        suggestFeature: 'Suggérer une fonctionnalité',
        addSite: 'Ajouter un site',
        language: 'Langue',
        enterSearch: 'Veuillez entrer quelque chose dans le champ de recherche.',
        general: 'Général',
        ai: 'IA',
        buy: 'Acheter',
        social: 'Social',
        forum: 'Forum',
        available: 'Disponible',
        noRowsMessage: 'Toutes les lignes sont masquées. Ajustez les paramètres pour les afficher.',
        generalSettings: 'Paramètres généraux',
        mostVisitedSites: 'Sites les plus visités en premier',
        resetVisitedSites: 'Réinitialiser les sites visités',
        showLogoOnHover: 'Afficher le logo au survol',
        openInNewTab: 'Ouvrir les résultats dans un nouvel onglet',
        rows: 'Lignes',
        sites: 'Sites',
        reportABug: 'Signaler un bug',
        describeBug: 'Décrivez le bug...',
        suggestAFeature: 'Suggérer une fonctionnalité',
        yourSuggestion: 'Votre suggestion...',
        addASite: 'Ajouter un site',
        httpPlaceholder: 'http://',
        promote: 'Annoncer sur ce site',
        promotionDetails: 'Votre message ici',
        submit: 'Envoyer',
        submitted: 'Envoyé !',
        limitReached: 'Limite atteinte (24h)',
        cookieConsent: 'Nous utilisons des cookies pour améliorer votre expérience.',
        learnMore: 'En savoir plus',
        accept: 'Accepter',
        decline: 'Refuser',
        selectLanguage: 'Langue'
    },
    'pt': {
        toggleTheme: 'Alternar tema',
        settings: 'Configurações',
        reportBug: 'Reportar bug',
        suggestFeature: 'Sugerir recurso',
        addSite: 'Adicionar site',
        language: 'Idioma',
        enterSearch: 'Por favor, insira algo no campo de busca.',
        general: 'Geral',
        ai: 'IA',
        buy: 'Comprar',
        social: 'Social',
        forum: 'Fórum',
        available: 'Disponível',
        noRowsMessage: 'Todas as linhas estão ocultas. Ajuste as configurações para mostrá-las.',
        generalSettings: 'Configurações gerais',
        mostVisitedSites: 'Sites mais visitados primeiro',
        resetVisitedSites: 'Redefinir sites visitados',
        showLogoOnHover: 'Mostrar logo ao passar o mouse',
        openInNewTab: 'Abrir resultados em nova aba',
        rows: 'Linhas',
        sites: 'Sites',
        reportABug: 'Reportar um bug',
        describeBug: 'Descreva o bug...',
        suggestAFeature: 'Sugerir um recurso',
        yourSuggestion: 'Sua sugestão...',
        addASite: 'Adicionar um site',
        httpPlaceholder: 'http://',
        promote: 'Anunciar neste site',
        promotionDetails: 'Sua mensagem aqui',
        submit: 'Enviar',
        submitted: 'Enviado!',
        limitReached: 'Limite atingido (24h)',
        cookieConsent: 'Usamos cookies para melhorar sua experiência.',
        learnMore: 'Saiba mais',
        accept: 'Aceitar',
        decline: 'Recusar',
        selectLanguage: 'Idioma'
    },
    'ru': {
        toggleTheme: 'Переключить тему',
        settings: 'Настройки',
        reportBug: 'Сообщить об ошибке',
        suggestFeature: 'Предложить функцию',
        addSite: 'Добавить сайт',
        language: 'Язык',
        enterSearch: 'Пожалуйста, введите что-нибудь в поле поиска.',
        general: 'Общие',
        ai: 'ИИ',
        buy: 'Купить',
        social: 'Социальные',
        forum: 'Форум',
        available: 'Доступно',
        noRowsMessage: 'Все строки скрыты. Настройте параметры, чтобы показать их.',
        generalSettings: 'Общие настройки',
        mostVisitedSites: 'Наиболее посещаемые сайты первыми',
        resetVisitedSites: 'Сбросить посещенные сайты',
        showLogoOnHover: 'Показывать логотип при наведении',
        openInNewTab: 'Открывать результаты в новой вкладке',
        rows: 'Строки',
        sites: 'Сайты',
        reportABug: 'Сообщить об ошибке',
        describeBug: 'Опишите ошибку...',
        suggestAFeature: 'Предложить функцию',
        yourSuggestion: 'Ваше предложение...',
        addASite: 'Добавить сайт',
        httpPlaceholder: 'http://',
        promote: 'Рекламировать на этом сайте',
        promotionDetails: 'Ваше сообщение здесь',
        submit: 'Отправить',
        submitted: 'Отправлено!',
        limitReached: 'Достигнут предел (24 часа)',
        cookieConsent: 'Мы используем cookies для улучшения вашего опыта.',
        learnMore: 'Узнать больше',
        accept: 'Принять',
        decline: 'Отклонить',
        selectLanguage: 'Язык'
    },
    'id': {
        toggleTheme: 'Ganti Tema',
        settings: 'Pengaturan',
        reportBug: 'Laporkan Bug',
        suggestFeature: 'Sarankan Fitur',
        addSite: 'Tambah Situs',
        language: 'Bahasa',
        enterSearch: 'Silakan masukkan sesuatu di kolom pencarian.',
        general: 'Umum',
        ai: 'AI',
        buy: 'Beli',
        social: 'Sosial',
        forum: 'Forum',
        available: 'Tersedia',
        noRowsMessage: 'Semua baris disembunyikan. Sesuaikan pengaturan untuk menampilkannya.',
        generalSettings: 'Pengaturan Umum',
        mostVisitedSites: 'Situs paling sering dikunjungi lebih dulu',
        resetVisitedSites: 'Reset situs yang dikunjungi',
        showLogoOnHover: 'Tampilkan logo saat mouse di atas',
        openInNewTab: 'Buka hasil di tab baru',
        rows: 'Baris',
        sites: 'Situs',
        reportABug: 'Laporkan Bug',
        describeBug: 'Jelaskan bug...',
        suggestAFeature: 'Sarankan Fitur',
        yourSuggestion: 'Saran Anda...',
        addASite: 'Tambah Situs',
        httpPlaceholder: 'http://',
        promote: 'Beriklan di situs ini',
        promotionDetails: 'Pesan Anda di sini',
        submit: 'Kirim',
        submitted: 'Terkirim!',
        limitReached: 'Batas Tercapai (24 jam)',
        cookieConsent: 'Kami menggunakan cookie untuk meningkatkan pengalaman Anda.',
        learnMore: 'Pelajari lebih lanjut',
        accept: 'Terima',
        decline: 'Tolak',
        selectLanguage: 'Bahasa'
    },
    'it': {
        toggleTheme: 'Cambia tema',
        settings: 'Impostazioni',
        reportBug: 'Segnala un bug',
        suggestFeature: 'Suggerisci una funzione',
        addSite: 'Aggiungi sito',
        language: 'Lingua',
        enterSearch: 'Per favore, inserisci qualcosa nel campo di ricerca.',
        general: 'Generale',
        ai: 'IA',
        buy: 'Compra',
        social: 'Sociale',
        forum: 'Forum',
        available: 'Disponibile',
        noRowsMessage: 'Tutte le righe sono nascoste. Regola le impostazioni per mostrarle.',
        generalSettings: 'Impostazioni generali',
        mostVisitedSites: 'Siti più visitati per primi',
        resetVisitedSites: 'Ripristina siti visitati',
        showLogoOnHover: 'Mostra logo al passaggio del mouse',
        openInNewTab: 'Apri risultati in una nuova scheda',
        rows: 'Righe',
        sites: 'Siti',
        reportABug: 'Segnala un bug',
        describeBug: 'Descrivi il bug...',
        suggestAFeature: 'Suggerisci una funzione',
        yourSuggestion: 'Il tuo suggerimento...',
        addASite: 'Aggiungi un sito',
        httpPlaceholder: 'http://',
        promote: 'Pubblicizza su questo sito',
        promotionDetails: 'Il tuo messaggio qui',
        submit: 'Invia',
        submitted: 'Inviato!',
        limitReached: 'Limite raggiunto (24h)',
        cookieConsent: 'Usiamo i cookie per migliorare la tua esperienza.',
        learnMore: 'Scopri di più',
        accept: 'Accetta',
        decline: 'Rifiuta',
        selectLanguage: 'Lingua'
    },
    'de': {
        toggleTheme: 'Thema wechseln',
        settings: 'Einstellungen',
        reportBug: 'Fehler melden',
        suggestFeature: 'Funktion vorschlagen',
        addSite: 'Seite hinzufügen',
        language: 'Sprache',
        enterSearch: 'Bitte geben Sie etwas in das Suchfeld ein.',
        general: 'Allgemein',
        ai: 'KI',
        buy: 'Kaufen',
        social: 'Sozial',
        forum: 'Forum',
        available: 'Verfügbar',
        noRowsMessage: 'Alle Zeilen sind ausgeblendet. Passen Sie die Einstellungen an, um sie anzuzeigen.',
        generalSettings: 'Allgemeine Einstellungen',
        mostVisitedSites: 'Meistbesuchte Seiten zuerst',
        resetVisitedSites: 'Besuchte Seiten zurücksetzen',
        showLogoOnHover: 'Logo bei Mausübertragung anzeigen',
        openInNewTab: 'Ergebnisse in neuem Tab öffnen',
        rows: 'Zeilen',
        sites: 'Seiten',
        reportABug: 'Fehler melden',
        describeBug: 'Beschreibe den Fehler...',
        suggestAFeature: 'Funktion vorschlagen',
        yourSuggestion: 'Dein Vorschlag...',
        addASite: 'Seite hinzufügen',
        httpPlaceholder: 'http://',
        promote: 'Auf dieser Seite werben',
        promotionDetails: 'Deine Nachricht hier',
        submit: 'Senden',
        submitted: 'Gesendet!',
        limitReached: 'Limit erreicht (24h)',
        cookieConsent: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern.',
        learnMore: 'Erfahren Sie mehr',
        accept: 'Akzeptieren',
        decline: 'Ablehnen',
        selectLanguage: 'Sprache'
    }
};

// Make translations globally accessible
window.translations = translations;

document.addEventListener('DOMContentLoaded', () => {
    const applyLanguage = (lang) => {
        const selectedLang = lang === 'default' ? 'en' : lang;
        const t = translations[selectedLang];

        // Tooltips
        document.getElementById('theme-icon').dataset.tooltip = t.toggleTheme;
        document.getElementById('settings-icon').dataset.tooltip = t.settings;
        document.getElementById('bug-icon').dataset.tooltip = t.reportBug;
        document.getElementById('suggestion-icon').dataset.tooltip = t.suggestFeature;
        document.getElementById('add-site-icon').dataset.tooltip = t.addSite;
        document.getElementById('language-icon').dataset.tooltip = t.language;

        // Search box
        document.getElementById('query').placeholder = t.enterSearch;

        // Section labels
        document.querySelector('.button-row[data-row="general"] label').textContent = t.general;
        document.querySelector('.button-row[data-row="ai"] label').textContent = t.ai;
        document.querySelector('.button-row[data-row="buy"] label').textContent = t.buy;
        document.querySelector('.button-row[data-row="social"] label').textContent = t.social;
        document.querySelector('.button-row[data-row="forum"] label').textContent = t.forum;
        document.querySelector('.button-row[data-row="promoted"] label').textContent = t.available;

        // No rows message
        document.querySelector('.no-rows-message').textContent = t.noRowsMessage;

        // Settings modal
        document.querySelector('#settings-modal h4:first-child').textContent = t.generalSettings;
        document.querySelector('#sort-by-usage').nextElementSibling.textContent = t.mostVisitedSites;
        document.getElementById('reset-usage').textContent = t.resetVisitedSites;
        document.querySelector('#logo-on-hover').nextElementSibling.textContent = t.showLogoOnHover;
        document.querySelector('#new-tab').nextElementSibling.textContent = t.openInNewTab;
        document.querySelector('#settings-modal .modal-section:nth-child(2) h4').textContent = t.rows;
        document.querySelector('#hide-general').nextElementSibling.textContent = t.general;
        document.querySelector('#hide-ai').nextElementSibling.textContent = t.ai;
        document.querySelector('#hide-buy').nextElementSibling.textContent = t.buy;
        document.querySelector('#hide-social').nextElementSibling.textContent = t.social;
        document.querySelector('#hide-forum').nextElementSibling.textContent = t.forum;
        document.querySelector('#settings-modal .sites-column h4').textContent = t.sites;
        document.querySelector('#settings-modal .sites-column h5:nth-child(2)').textContent = t.general;
        document.querySelector('#settings-modal .sites-column h5:nth-child(8)').textContent = t.ai;
        document.querySelector('#settings-modal .sites-column h5:nth-child(15)').textContent = t.buy;
        document.querySelector('#settings-modal .sites-column h5:nth-child(22)').textContent = t.social;
        document.querySelector('#settings-modal .sites-column h5:nth-child(29)').textContent = t.forum;

        // Feedback modals
        document.querySelector('#bug-modal h4').textContent = t.reportABug;
        document.getElementById('bug-message').placeholder = t.describeBug;
        document.querySelector('#suggestion-modal h4').textContent = t.suggestAFeature;
        document.getElementById('suggestion-message').placeholder = t.yourSuggestion;
        document.querySelector('#add-site-modal h4').textContent = t.addASite;
        document.getElementById('add-site-input').placeholder = t.httpPlaceholder;
        document.querySelector('#promote-modal h4').textContent = t.promote;
        document.getElementById('promote-message').placeholder = t.promotionDetails;
        document.querySelectorAll('#bug-modal button, #suggestion-modal button, #add-site-modal button, #promote-modal button').forEach(btn => btn.textContent = t.submit);

        // Cookie consent
        document.querySelector('.cookie-consent p').childNodes[0].textContent = t.cookieConsent + ' ';
        document.querySelector('.cookie-consent a').textContent = t.learnMore;
        document.getElementById('accept-cookies').textContent = t.accept;
        document.getElementById('decline-cookies').textContent = t.decline;

        // Language modal
        document.querySelector('#language-modal h4').textContent = t.selectLanguage;
    };

    // Apply saved language or default
    const savedLang = localStorage.getItem('language') || 'default';
    applyLanguage(savedLang);

    // Language button click events
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = btn.dataset.lang;
            localStorage.setItem('language', newLang);
            applyLanguage(newLang);
            document.getElementById('language-modal').style.display = 'none';
