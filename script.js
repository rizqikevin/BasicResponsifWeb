const MenuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

MenuToggle.addEventListener('click', function() {
  nav.classList.toggle('slide');
});