(function () {
  var body = document.body;
  var toggle = document.getElementById('langToggle');
  var yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  function applyLang(lang) {
    body.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
    try { localStorage.setItem('site-lang', lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem('site-lang'); } catch (e) {}
  if (saved === 'pt' || saved === 'en') {
    applyLang(saved);
  } else if (navigator.language && navigator.language.toLowerCase().indexOf('pt') !== 0) {
    applyLang('en');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = body.getAttribute('data-lang') === 'en' ? 'en' : 'pt';
      applyLang(current === 'pt' ? 'en' : 'pt');
    });
  }
})();
