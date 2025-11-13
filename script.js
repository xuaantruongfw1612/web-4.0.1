const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', e => {
  e.preventDefault();
  msg.textContent = 'Thank you! Your message has been sent.';
  form.reset();
});

