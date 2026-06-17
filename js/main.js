/* Science Corps — Main JS */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Navbar scroll behaviour (transparent → white) ─── */
  const navbar = document.querySelector('.navbar');
  const hasHero = !!document.querySelector('.hero');
  if (navbar) {
    function updateNav() {
      if (!hasHero || window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  /* ── Mobile nav toggle ──────────────────────────────── */
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('open');
      }
    });
  }

  /* ── Mobile dropdown toggles ────────────────────────── */
  if (window.innerWidth <= 640) {
    document.querySelectorAll('.dropdown > a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const parent = link.parentElement;
        parent.classList.toggle('open');
      });
    });
  }

  /* ── Smooth scroll for anchor links ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 70;
        const top  = target.getBoundingClientRect().top + window.pageYOffset - navH - 16;
        window.scrollTo({ top: top, behavior: 'smooth' });
        if (menu) menu.classList.remove('open');
      }
    });
  });

  /* ── FAQ accordion ──────────────────────────────────── */
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      const item = q.closest('.faq-item');
      item.classList.toggle('open');
    });
  });

  /* ── Active nav link ────────────────────────────────── */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.closest('li').classList.add('active');
    }
  });

  /* ── Contact form (submits to Web3Forms; stays on page) ─ */
  const form = document.getElementById('contact-form');
  if (form) {
    const ok  = document.getElementById('form-success');
    const btn = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const label = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      if (ok) ok.style.display = 'none';

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            form.reset();
            if (ok) ok.style.display = 'block';
          } else {
            window.alert('Sorry, your message could not be sent. Please email us directly at fellows@science-corps.org.');
          }
        })
        .catch(function () {
          window.alert('Sorry, your message could not be sent. Please email us directly at fellows@science-corps.org.');
        })
        .finally(function () {
          if (btn) { btn.disabled = false; btn.textContent = label; }
        });
    });
  }

});
