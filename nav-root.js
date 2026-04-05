/* nav-root.js — for root index.html */
(function () {
  const NAV_LINKS = [
    { href: 'index.html',                label: 'Home' },
    { href: 'pages/about.html',          label: 'About Us' },
    { href: 'pages/gtm-offerings.html',  label: 'GTM Offerings' },
    { href: 'pages/ai-offerings.html',   label: 'AI Offerings' },
    { href: 'pages/resources.html',      label: 'Resources' },
    { href: 'pages/work-with-us.html',   label: 'Work With Us', cta: true },
  ];

  function buildNav() {
    const nav = document.createElement('nav');
    nav.className = 'nav';
    nav.innerHTML = `
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">unwind<span>GTM</span></a>
        <ul class="nav-links" id="navLinks">
          ${NAV_LINKS.map(l => `
            <li><a href="${l.href}" class="${l.cta ? 'nav-cta' : ''}">${l.label}</a></li>
          `).join('')}
        </ul>
        <div class="nav-hamburger" id="hamburger" onclick="document.getElementById('navLinks').classList.toggle('open')">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    document.body.insertBefore(nav, document.body.firstChild);
  }

  function buildFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <div class="footer-inner">
        <div class="footer-logo">unwind<span>GTM</span></div>
        <div class="footer-links">
          <a href="index.html">Home</a>
          <a href="pages/about.html">About</a>
          <a href="pages/gtm-offerings.html">GTM Offerings</a>
          <a href="pages/ai-offerings.html">AI Offerings</a>
          <a href="pages/resources.html">Resources</a>
          <a href="mailto:founders@unwindgtm.com">founders@unwindgtm.com</a>
        </div>
        <p class="footer-copy">© ${new Date().getFullYear()} unwindGTM. All rights reserved.</p>
      </div>
    `;
    document.body.appendChild(footer);
  }

  function initFadeIn() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    buildNav();
    buildFooter();
    setTimeout(initFadeIn, 100);
  });
})();
