// Year in footer
try {
  document.getElementById('year').textContent = new Date().getFullYear();
} catch (e) { /* non-critical */ }

// Navbar background on scroll
try {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
} catch (e) { /* non-critical */ }

// ===== Reveal on scroll (native IntersectionObserver, no external deps) =====
try {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    revealEls.forEach((el, i) => {
      el.classList.add('js-anim-ready');
      el.style.transitionDelay = (i % 6) * 60 + 'ms';
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));
  }
} catch (e) {
  console.warn('Reveal animation skipped:', e);
}

// ===== Animated counters =====
try {
  const counters = document.querySelectorAll('.stat-num');
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.count, 10);
    if (Number.isNaN(target)) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const tick = () => {
      current = Math.min(target, current + step);
      el.textContent = current;
      if (current < target) requestAnimationFrame(tick);
    };
    tick();
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  } else {
    counters.forEach(animateCounter);
  }
} catch (e) {
  console.warn('Counter animation skipped:', e);
}

// ===== Mobile nav toggle =====
try {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle?.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.right = '6vw';
    navLinks.style.background = 'rgba(10,14,26,0.95)';
    navLinks.style.backdropFilter = 'blur(14px)';
    navLinks.style.padding = '20px 28px';
    navLinks.style.borderRadius = '16px';
    navLinks.style.gap = '16px';
  });
} catch (e) { /* non-critical */ }
