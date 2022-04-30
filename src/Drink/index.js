import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { id, name, layers, image } = props;
  let { ordered } = props;
  const element = document.createElement('div');
  element.classList.add('drink');
  element.innerHTML = ` 
  <div class="drink__product">
    <div class="drink__cup">
      <img src="${image}"/>
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
      </div>
            </div>
            <div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div>`;
  const drinkInfoElm = element.querySelector('.drink__info');
  for (let i = 0; i < layers.length; i++) {
    drinkInfoElm.innerHTML += Layer(layers[i]);
  }

  //objednávka a změna
  const order = () => {
    orderButton.innerHTML = 'Zrušit';
    element.querySelector('.drink__cup').classList.add('drink__cup--selected');
  };

  const cancelOrder = () => {
    orderButton.innerHTML = 'Objednat';
    element
      .querySelector('.drink__cup')
      .classList.remove('drink__cup--selected');
  };

  const Objednavka = () => {
    if (ordered === false) {
      order();
      ordered = true;
    } else if (ordered === true) {
      cancelOrder();
      ordered = false;
    }
  };
  const orderButton = element.querySelector('.order-btn');
  orderButton.addEventListener('click', Objednavka);
  return element;
};
