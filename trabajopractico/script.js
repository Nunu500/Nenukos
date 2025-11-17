// Menú móvil
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const searchIcon = document.getElementById('searchIcon');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');

searchIcon.addEventListener('click', (e) => {
  e.preventDefault();
  searchOverlay.classList.add('active');
});

closeSearch.addEventListener('click', () => {
  searchOverlay.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') searchOverlay.classList.remove('active');
});