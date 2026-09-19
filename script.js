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
