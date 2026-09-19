// mobile nav
const burger = document.getElementById('burgerBtn');
const panel = document.getElementById('mobilePanel');
if (burger && panel) {
  burger.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    panel.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));
}

// catalog filter (only present on the home page)
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.cat-card');
if (filterBtns.length && cards.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(card => {
        card.style.display = (f === 'all' || card.dataset.breed === f) ? '' : 'none';
      });
    });
  });
}

// contact form (demo only, present on the home page)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.submit-btn');
    const original = btn.textContent;
    btn.textContent = 'Дякуємо, надіслано!';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = original; btn.disabled = false; e.target.reset(); }, 2400);
  });
}

// keep only one FAQ item open at a time (only present on the about page)
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length) {
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(other => { if (other !== item) other.open = false; });
      }
    });
  });
}
// mobile nav
const burger = document.getElementById('burgerBtn');
const panel = document.getElementById('mobilePanel');
if (burger && panel) {
  burger.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    panel.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));
}

// catalog filter (only present on the home page)
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.cat-card');
if (filterBtns.length && cards.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(card => {
        card.style.display = (f === 'all' || card.dataset.breed === f) ? '' : 'none';
      });
    });
  });
}

// contact form (demo only, present on the home page)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('.submit-btn');
    const original = btn.textContent;
    btn.textContent = 'Дякуємо, надіслано!';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = original; btn.disabled = false; e.target.reset(); }, 2400);
  });
}

// keep only one FAQ item open at a time (only present on the about page)
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length) {
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(other => { if (other !== item) other.open = false; });
      }
    });
  });
}

// scroll reveal animation (fade + rise into view on scroll down)
const revealSelectors = [
  '.section-head',
  '.cat-card',
  '.about-art', '.about-text',
  '.process-item',
  '.guarantee-card',
  '.testi-card',
  '.team-card',
  '.value-card',
  '.tour-main', '.tour-side .row',
  '.cert-pill',
  '.faq-item',
  '.cta-banner'
];

const revealTargets = document.querySelectorAll(revealSelectors.join(','));

if (revealTargets.length) {
  if ('IntersectionObserver' in window) {
    revealTargets.forEach((el, i) => {
      el.classList.add('reveal', 'reveal-stagger');
      // невелика ступінчаста затримка для елементів, що йдуть групами (карти, картки процесу тощо)
      const groupIndex = i % 6;
      el.style.setProperty('--reveal-delay', `${groupIndex * 70}ms`);
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });

    revealTargets.forEach(el => revealObserver.observe(el));
  } else {
    // фолбек для старих браузерів без IntersectionObserver
    revealTargets.forEach(el => el.classList.add('visible'));
  }
}
