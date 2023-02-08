import '../index.scss';
import '@splidejs/splide/css';
import splidePhotos from "./slider";

splidePhotos.mount();

const minusButton    = document.querySelector('.order__quantity-button_minus');
const plusButton     = document.querySelector('.order__quantity-button_plus');
const quantityResult = document.querySelector('.order__quantity-result');

let goodsQuantity = 10;

function addGoods() {
  goodsQuantity += 1;
  quantityResult.textContent = `${goodsQuantity} шт.`;
}

function reduceGoods() {
  if (goodsQuantity > 0) {
    goodsQuantity -= 1;
    quantityResult.textContent = `${goodsQuantity} шт.`;
  }
}

minusButton.addEventListener('mousedown', reduceGoods);
plusButton.addEventListener('mousedown', addGoods);

