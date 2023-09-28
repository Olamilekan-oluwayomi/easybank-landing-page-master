const displayMenu = document.getElementById('open');
const hideMenu = document.getElementById('close');
const menu = document.getElementById('menudisplay');
const body = document.getElementById('sec');

const togglemenuDisplay = () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
  hideMenu.classList.toggle('hidden');
  displayMenu.classList.toggle('hidden');
  body.style.filter = '';
};

displayMenu.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
  hideMenu.classList.toggle('hidden');
  displayMenu.classList.toggle('hidden');
  body.style.filter = 'blur(1px)';
});

hideMenu.addEventListener('click', togglemenuDisplay);
