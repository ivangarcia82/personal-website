/* =========================================================
   IVAN GARCIA — Interacción y animación
   ========================================================= */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- Custom cursor ---------- */
  if (fine && !reduce) {
    document.body.classList.add('cursor-on');
    const dot = document.createElement('div'); dot.className = 'cursor-dot';
    const ring = document.createElement('div'); ring.className = 'cursor-ring';
    document.body.append(dot, ring);
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    const hov = 'a, button, .project, .media, input, textarea, [data-cursor]';
    document.addEventListener('mouseover', e => { if (e.target.closest(hov)) ring.classList.add('hover'); });
    document.addEventListener('mouseout', e => { if (e.target.closest(hov)) ring.classList.remove('hover'); });
  }

  /* ---------- Nav: scrolled state + mobile menu ---------- */
  const nav = document.querySelector('.nav');
  const onScroll = () => { if (nav) nav.classList.toggle('scrolled', scrollY > 24); };
  onScroll(); addEventListener('scroll', onScroll, { passive: true });

  const burger = document.querySelector('.nav__burger');
  const menu = document.querySelector('.mobile-menu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      burger.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open'); burger.classList.remove('is-open'); document.body.style.overflow = '';
    }));
  }

  /* ---------- Scroll reveals ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- Hero text build-in ---------- */
  function buildHero() {
    document.querySelectorAll('[data-hero-split]').forEach(el => {
      const text = el.textContent.trim();
      el.textContent = '';
      const words = text.split(' ');
      words.forEach((w, i) => {
        const wrap = document.createElement('span'); wrap.className = 'word';
        const inner = document.createElement('span');
        inner.textContent = w;
        inner.style.transitionDelay = (0.12 + i * 0.06) + 's';
        wrap.appendChild(inner);
        el.appendChild(wrap);
        if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
      });
    });
    requestAnimationFrame(() => document.body.classList.add('hero-ready'));
  }
  buildHero();

  /* Safety net: the hero must always be visible on load even if rAF is throttled
     (e.g. backgrounded pane). Scoped to the hero so scroll reveals stay intact. */
  setTimeout(() => {
    document.body.classList.add('hero-ready');
    document.querySelectorAll('.hero .reveal:not(.in)').forEach(el => el.classList.add('in'));
  }, 1400);

  /* ---------- Magnetic buttons ---------- */
  if (fine && !reduce) {
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      const strength = parseFloat(el.dataset.magnetic) || 0.3;
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- Project hover peek ---------- */
  if (fine) {
    const peek = document.querySelector('.project__peek');
    if (peek) {
      const img = peek.querySelector('img');
      let raf;
      document.querySelectorAll('.project[data-peek]').forEach(p => {
        p.addEventListener('mouseenter', () => { img.src = p.dataset.peek; peek.classList.add('show'); });
        p.addEventListener('mouseleave', () => peek.classList.remove('show'));
      });
      addEventListener('mousemove', e => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => { peek.style.left = e.clientX + 'px'; peek.style.top = e.clientY + 'px'; });
      });
    }
  }

  /* ---------- Subtle parallax on [data-parallax] ---------- */
  if (!reduce) {
    const items = [...document.querySelectorAll('[data-parallax]')];
    if (items.length) {
      const tick = () => {
        const vh = innerHeight;
        items.forEach(el => {
          const r = el.getBoundingClientRect();
          const prog = (r.top + r.height / 2 - vh / 2) / vh; // -0.5..0.5-ish
          const sp = parseFloat(el.dataset.parallax) || 0.12;
          el.style.transform = `translate3d(0, ${(-prog * sp * 100).toFixed(2)}px, 0)`;
        });
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }

  /* ---------- Page transitions (multi-page) ---------- */
  const overlay = document.querySelector('.page-trans');
  const overlayLabel = overlay ? overlay.querySelector('.page-trans__label') : null;

  // No incoming curtain: page bg is already black, so content just reveals.
  // The curtain only covers on outbound navigation.

  function isInternal(a) {
    if (!a) return false;
    if (a.target === '_blank' || a.hasAttribute('data-no-trans')) return false;
    const href = a.getAttribute('href') || '';
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return false;
    // Clean Astro routes ("/", "/about", …) plus legacy relative forms.
    return href.startsWith('/') || href.startsWith('./') || href.endsWith('.html');
  }

  if (overlay && !reduce) {
    document.addEventListener('click', e => {
      const a = e.target.closest('a');
      if (!isInternal(a)) return;
      const href = a.getAttribute('href');
      if (new URL(href, location.href).pathname === location.pathname) return;
      e.preventDefault();
      if (overlayLabel) {
        overlayLabel.textContent = a.getAttribute('data-label') || '';
        overlayLabel.animate(
          [{ opacity: 0 }, { opacity: 1, offset: 0.6 }, { opacity: 1 }],
          { duration: 600, fill: 'forwards' }
        );
      }
      overlay.classList.add('leaving');
      setTimeout(() => { location.href = href; }, 470);
    });
  }

  /* restore on back/forward cache */
  addEventListener('pageshow', e => {
    if (e.persisted && overlay) {
      overlay.classList.remove('leaving');
      overlay.style.transform = '';
    }
  });

  /* ---------- Year ---------- */
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  /* ---------- Lucide icons (progressive enhancement) ---------- */
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    try { window.lucide.createIcons(); } catch (e) { /* noop */ }
  }
})();
