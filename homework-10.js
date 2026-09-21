import {productsArray} from "./products-array.js";
console.log(productsArray);

const productTemplate = document.getElementById('product-template');
const productsList = document.getElementById('products-list');

//Задание 5

function getCardCount() {
  while (true) {
    const input = prompt("Сколько карточек отобразить? От 1 до 5");

    if (input === null) {
      return null;
    }

    const count = Number(input);

    if (count >= 1 && count <= 5 && Number.isInteger(count)) {
      return count;
    }

    alert("Некорректный ввод! Пожалуйста, введите число от 1 до 5.");
  }
}

function renderProducts(products, count) {
  productsList.innerHTML = '';

  const itemsToRender = products.slice(0, count);

  itemsToRender.forEach(product => {
    const productElement = productTemplate.content.cloneNode(true);

    productElement.querySelector('.product__img').src = product.img;
    productElement.querySelector('.product__category').textContent = product.category;
    productElement.querySelector('.product__name').textContent = product.name;
    productElement.querySelector('.product__stars').textContent = product.ratingstars;
    productElement.querySelector('.product__rating-value').textContent = product.rating;
    productElement.querySelector('.product__description').textContent = product.description;

    const compoundItems = productElement.querySelectorAll('.product__compounds-list li');

    product.compounds.forEach((item, index) => {
      if (compoundItems[index]) {
        compoundItems[index].textContent = item;
      }
    });

    productElement.querySelector('.product__price-value').textContent = `${product.price} ₽`;
    productsList.appendChild(productElement);

  });
}

const count = getCardCount();
if (count !== null) {
  renderProducts(productsArray, count);
}