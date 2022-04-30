import './style.css';
import './Layer/style.css';

console.log('funguju!');
// vybrání a aktivace menu
const hamburger = document.querySelector('#nav-btn');
const menu = document.querySelectorAll('a');

const closeMenu = () => {
  document.querySelector('nav').classList.toggle('nav-closed');
};

hamburger.addEventListener('click', closeMenu);

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', closeMenu);
}

//objednávka a změna
const order = () => {
  orderButton.innerHTML = 'Zrušit';
  document.querySelector('.drink__cup').classList.add('drink__cup--selected');
};

const cancelOrder = () => {
  orderButton.innerHTML = 'Objednat';
  document
    .querySelector('.drink__cup')
    .classList.remove('drink__cup--selected');
};
let ordered = true;

const Objednavka = () => {
  if (ordered === false) {
    order();
    ordered = true;
  } else if (ordered === true) {
    cancelOrder();
    ordered = false;
  }
};
const orderButton = document.querySelector('.order-btn');
orderButton.addEventListener('click', Objednavka);

import { Layer } from './Layer/index.js';
const drinkInfoElm = document.querySelector('.drink__info');
drinkInfoElm.innerHTML += Layer({ color: '#feeeca', label: 'mléčná pěna' });
