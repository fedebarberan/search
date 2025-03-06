const forms = [
    { input: 'bug-message', counter: 'bug-counter', max: 200 },
    { input: 'suggestion-message', counter: 'suggestion-counter', max: 200 },
    { input: 'add-site-input', counter: 'add-site-counter', max: 70 },
    { input: 'promote-message', counter: 'promote-counter', max: 200 }
];
forms.forEach(({ input, counter, max }) => {
    const el = document.getElementById(input);
    const cnt = document.getElementById(counter);
    cnt.textContent = `${max}/${max}`;
    el.addEventListener('input', () => cnt.textContent = `${max - el.value.length}/${max}`);
});

let submissionTimestamps = JSON.parse(localStorage.getItem('submissionTimestamps')) || { bug: [], suggestion: [], addSite: [], promote: [] };
const saveTimestamps = () => localStorage.setItem('submissionTimestamps', JSON.stringify(submissionTimestamps));

const canSubmit = (type) => {
    const now = Date.now();
    submissionTimestamps[type] = (submissionTimestamps[type] || []).filter(ts => now - ts < 24 * 60 * 60 * 1000);
    submissionTimestamps[type].push(now);
    saveTimestamps();
    return submissionTimestamps[type].length <= 5;
};

const handleSubmission = (formId, buttonId, type) => {
    const form = document.getElementById(formId).querySelector('form');
    const button = document.getElementById(buttonId);
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!canSubmit(type)) {
            button.disabled = true;
            button.textContent = 'Limit Reached (24h)';
            setTimeout(() => { button.disabled = false; button.textContent = 'Submit'; }, 5000);
            return;
        }
        const input = form.querySelector('textarea') || form.querySelector('input[type="text"]');
        if (!input.value.trim()) return;
        button.disabled = true;
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                button.replaceWith(Object.assign(document.createElement('span'), {
                    className: 'success-message',
                    textContent: 'Submitted!'
                }));
                setTimeout(() => {
                    document.getElementById(formId).style.display = 'none';
                    button.disabled = false;
                    input.value = type === 'add-site' ? 'http://' : '';
                }, 4000);
            } else throw new Error('Submission failed');
        } catch (error) {
            button.textContent = 'Error';
            setTimeout(() => { button.disabled = false; button.textContent = 'Submit'; }, 2000);
        }
    });
};

['bug', 'suggestion', 'add-site', 'promote'].forEach(type => handleSubmission(`${type}-modal`, `submit-${type}`, type));