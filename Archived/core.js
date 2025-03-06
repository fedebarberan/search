document.addEventListener('DOMContentLoaded', () => {
    const faviconUrls = {
        'google': 'https://www.google.com/favicon.ico',
        // ... (keep all favicon URLs as is)
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

    // Utility function for modal toggling
    const toggleModal = (modalId, triggerId, closeClass) => {
        const modal = document.getElementById(modalId);
        document.getElementById(triggerId).addEventListener('click', () => modal.style.display = 'block');
        modal.querySelector(`.${closeClass}`).addEventListener('click', () => modal.style.display = 'none');
        window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
    };

    toggleModal('settings-modal', 'settings-icon', 'close');
    toggleModal('bug-modal', 'bug-icon', 'close');
    toggleModal('suggestion-modal', 'suggestion-icon', 'close');
    toggleModal('add-site-modal', 'add-site-icon', 'close');
    toggleModal('promote-modal', 'submit-promote', 'close'); // Note: Adjusted trigger for promote modal

    document.querySelectorAll('button[data-platform^="promoted-"]').forEach(button => {
        button.addEventListener('click', () => document.getElementById('promote-modal').style.display = 'block');
    });
});