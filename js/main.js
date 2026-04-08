/**
 * Evio Production — main.js
 * Handles: custom cursor, nav scroll state, scroll reveal,
 *          mobile nav toggle, contact form submission
 */

/* ══════════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════════ */
(function initCursor() {
  const isTouchDevice = () =>
    window.matchMedia('(hover: none)').matches ||
    'ontouchstart' in window;

  if (isTouchDevice()) return;

  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--cx', e.clientX + 'px');
    document.documentElement.style.setProperty('--cy', e.clientY + 'px');
  });

  // Scale cursor on interactive elements
  const interactives = document.querySelectorAll('a, button, [role="button"]');
  interactives.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      document.body.style.setProperty('--cursor-scale', '2');
    });
    el.addEventListener('mouseleave', () => {
      document.body.style.setProperty('--cursor-scale', '1');
    });
  });
})();

/* ══════════════════════════════════════════
   NAV — SCROLL STATE
══════════════════════════════════════════ */
(function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // init state
})();

/* ══════════════════════════════════════════
   MOBILE NAV TOGGLE
══════════════════════════════════════════ */
(function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (!toggle || !links) return;

  let isOpen = false;

  const open = () => {
    isOpen = true;
    links.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    isOpen = false;
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => (isOpen ? close() : open()));

  // Close when a nav link is clicked
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', close);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) close();
  });
})();

/* ══════════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════════ */
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
})();

/* ══════════════════════════════════════════
   HERO — STAGGERED ENTRY
══════════════════════════════════════════ */
(function initHeroEntry() {
  // Trigger hero reveals immediately on load
  const heroReveals = document.querySelectorAll('.hero .reveal');
  requestAnimationFrame(() => {
    setTimeout(() => {
      heroReveals.forEach((el) => el.classList.add('visible'));
    }, 100);
  });
})();

/* ══════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════ */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('[type="submit"]');
    const originalText = btn.textContent;

    // Collect form data (wire to backend/email service as needed)
    const data = Object.fromEntries(new FormData(form));
    console.log('Form submitted:', data);

    // Visual feedback
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#2d6a3f';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3500);
  });
})();

/* ══════════════════════════════════════════
   SMOOTH ANCHOR SCROLL (respects nav height)
══════════════════════════════════════════ */
(function initSmoothScroll() {
  const NAV_OFFSET = 80;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
