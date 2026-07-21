document.addEventListener('DOMContentLoaded', () => {

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('main section[id]');
  const navItems = document.querySelectorAll('.nav-link');
  const setActiveLink = () => {
    let current = sections[0].id;
    sections.forEach(section => {
      const top = section.offsetTop - 140;
      if (window.scrollY >= top) current = section.id;
    });
    navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.section === current);
    });
  };
  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  // Project filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hide', !match);
      });
    });
  });

  // Contact form (front-end only, no backend)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = 'Terima kasih! Pesan kamu sudah tercatat (demo, belum terhubung ke server).';
    form.reset();
    setTimeout(() => { status.textContent = ''; }, 5000);
  });

});