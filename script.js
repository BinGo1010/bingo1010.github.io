(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'dark') {
    root.dataset.theme = 'dark';
  }

  toggle?.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    localStorage.setItem('portfolio-theme', nextTheme);
  });

  document.querySelector('#current-year').textContent = new Date().getFullYear();

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('visible'));
  }

  const awardCards = document.querySelectorAll('.award-card');
  awardCards.forEach((card) => {
    const setFlipped = (flipped) => {
      card.classList.toggle('is-flipped', flipped);
      card.setAttribute('aria-pressed', String(flipped));
      const front = card.querySelector('.award-front');
      const back = card.querySelector('.award-back');
      front?.setAttribute('aria-hidden', String(flipped));
      back?.setAttribute('aria-hidden', String(!flipped));
    };

    card.addEventListener('click', () => {
      card.classList.add('has-interacted');
      setFlipped(!card.classList.contains('is-flipped'));
    });

    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      card.classList.add('has-interacted');
      setFlipped(!card.classList.contains('is-flipped'));
    });
  });

  const navLinks = [...document.querySelectorAll('.nav a')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => sectionObserver.observe(section));
  }
})();
