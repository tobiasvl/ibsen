let currentLang = new URLSearchParams(window.location.search).get('lang') || 'no';

function updateTextByLang(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerHTML = el.getAttribute(`data-${lang}`);
    });
}

document.getElementById("language-toggle").addEventListener("click", () => {
    currentLang = currentLang === 'en' ? 'no' : 'en';
    updateTextByLang(currentLang);
});

// Initial update
updateTextByLang(currentLang);
