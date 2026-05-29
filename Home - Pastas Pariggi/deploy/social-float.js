/* social-float.js — floating WhatsApp + Instagram + Facebook buttons.
   Drop <script src="social-float.js"></script> on any page (after <body>).
   Self-injects styles + markup. Bottom-right (convention for chat/contact). */
(function () {
  var WA = 'https://wa.me/5491176370365';
  var IG = 'https://www.instagram.com/pastaspariggi/';
  var FB = 'https://www.facebook.com/pastaspariggi/?locale=es_LA';

  var css = '' +
  '.social-float{position:fixed;right:22px;bottom:22px;z-index:120;display:flex;flex-direction:column;gap:12px;align-items:flex-end;}' +
  '.social-float a{position:relative;width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:0 6px 18px rgba(0,0,0,0.22);transition:transform .3s cubic-bezier(0.22,1,0.36,1),box-shadow .3s ease;text-decoration:none;}' +
  '.social-float a:hover{transform:translateY(-3px) scale(1.06);box-shadow:0 10px 24px rgba(0,0,0,0.3);}' +
  '.social-float a svg{width:28px;height:28px;display:block;}' +
  '.social-float a.sf-wa{background:#25D366;}' +
  '.social-float a .sf-tip{position:absolute;right:66px;top:50%;transform:translateY(-50%) translateX(6px);opacity:0;pointer-events:none;white-space:nowrap;background:#1a1a1a;color:#fff;font-family:Roboto,system-ui,sans-serif;font-weight:400;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;padding:6px 11px;border-radius:2px;transition:opacity .25s ease,transform .25s ease;}' +
  '.social-float a:hover .sf-tip{opacity:1;transform:translateY(-50%) translateX(0);}' +
  '.social-float a .sf-tip::after{content:"";position:absolute;right:-4px;top:50%;transform:translateY(-50%) rotate(45deg);width:8px;height:8px;background:#1a1a1a;}' +
  '@media (max-width:600px){.social-float{right:14px;bottom:14px;}.social-float a{width:50px;height:50px;}.social-float a svg{width:25px;height:25px;}.social-float a .sf-tip{display:none;}}' +
  '@media print{.social-float{display:none;}}';

  var waSvg = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.71-1.6-2-.17-.29-.02-.45.12-.6.13-.13.29-.33.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.17 2.95c.15.19 2.01 3.07 4.87 4.31.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/><path d="M12.04 2.5C6.84 2.5 2.6 6.74 2.6 11.94c0 1.66.43 3.28 1.26 4.71L2.5 21.5l4.97-1.3a9.4 9.4 0 004.57 1.17h.01c5.2 0 9.44-4.24 9.44-9.44 0-2.52-.98-4.89-2.76-6.67a9.38 9.38 0 00-6.69-2.76zm0 17.18h-.01a7.8 7.8 0 01-3.98-1.09l-.29-.17-2.95.77.79-2.88-.19-.3a7.79 7.79 0 01-1.19-4.15c0-4.31 3.51-7.82 7.82-7.82 2.09 0 4.05.81 5.53 2.29a7.78 7.78 0 012.29 5.54c0 4.31-3.51 7.81-7.82 7.81z"/></svg>';
  var igSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>';
  var fbSvg = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.3h2.45l.37-2.85H13.5V9.04c0-.83.23-1.39 1.42-1.39h1.51V5.1c-.26-.03-1.16-.11-2.2-.11-2.18 0-3.67 1.33-3.67 3.77v2.1H8.1v2.85h2.46V21h2.94z"/></svg>';

  function build() {
    if (document.querySelector('.social-float')) return;
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);

    var wrap = document.createElement('div');
    wrap.className = 'social-float';
    wrap.innerHTML =
      '<a class="sf-wa" href="' + WA + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + waSvg + '<span class="sf-tip">Escribinos</span></a>';
    document.body.appendChild(wrap);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
