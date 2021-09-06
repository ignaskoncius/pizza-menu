import renderItem from './renderItem.js';
import sessionStorage from './sessionStorage.js';

const nameInputEl = document.getElementById('input-name');
const priceInputEl = document.getElementById('input-price');
const heatInputEl = document.getElementById('select-heat');
const toppingInputEl = document.getElementById('input-toppings');
const toppingListEl = document.querySelector('.toppings-list');
const pizzaPhotoEl = document.getElementById('pizza-image');
const errorMsgEl = document.querySelector('.error-msg');

let toppingsArr = [];

function addToppingToList() {
  if (toppingInputEl.value !== '') {
    toppingsArr.push(toppingInputEl.value);
    toppingListEl.innerHTML += `<li>${toppingInputEl.value}</li>`;
  } else {
    errorMsgEl.classList.add('enabled');
    errorMsgEl.innerHTML += `<h4>Toppings field is required</h4>`;
  }
}

function inputValidations() {
  if (nameInputEl.value.length === 0 || nameInputEl.value.length > 30) {
    errorMsgEl.classList.add('enabled');
    errorMsgEl.innerHTML += `<h4>Name must not be blank and shorter than 30 symbols</h4>`;
  }
  if (priceInputEl.value < 0 || priceInputEl.value === '') {
    errorMsgEl.classList.add('enabled');
    errorMsgEl.innerHTML += `<h4>Price cannot be negative and is required field</h4>`;
  }
  if (toppingInputEl.value === '') {
    errorMsgEl.classList.add('enabled');
    errorMsgEl.innerHTML += `<h4>Toppings field is required</h4>`;
  }
  if (toppingsArr.length < 2) {
    errorMsgEl.classList.add('enabled');
    errorMsgEl.innerHTML += `<h4>Pizza must have at least 2 toppings</h4>`;
  }
}

function submitForm() {
  errorMsgEl.innerHTML = '';
  inputValidations();
  if (errorMsgEl.innerHTML !== '') {
    return;
  }
  let newPizza = {
    name: nameInputEl.value,
    price: priceInputEl.value,
    heat: heatInputEl.value,
    toppings: toppingsArr.join(', '),
    photo: pizzaPhotoEl.value,
  };

  let allPizzas = sessionStorage();
  allPizzas.push(newPizza);
  allPizzas.forEach((item, i) => {
    item.index = i;
  });
  renderItem(allPizzas);
  sessionStorage(allPizzas);

  nameInputEl.value = '';
  toppingInputEl.value = '';
  heatInputEl.value = '1';
  pizzaPhotoEl.value = '';
  priceInputEl.value = '';
  toppingListEl.innerHTML = '';

  toppingsArr = [];
  location.reload();
}

export { addToppingToList, inputValidations, submitForm };
