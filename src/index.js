import './style.css';

console.log('funguju!');

const hamburger = document.querySelector('#nav-btn');
const menu = document.querySelectorAll('a');

const closeMenu = () => {
  document.querySelector('nav').classList.toggle('nav-closed');
};

hamburger.addEventListener('click', closeMenu);

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', closeMenu);
}
