import { addToppingToList, submitForm } from './JS/form.js';
import sessionStorage from './JS/sessionStorage.js';
import renderItem from './JS/renderItem.js';
import manageNavButtons from './JS/nav.js';
import { sortByName, sortByPrice, sortByHeat } from './JS/sort.js';

manageNavButtons();

// form buttons
const submitBtnEl = document.getElementById('submit-btn');
const toppingsBtnEl = document.getElementById('add-topping');

// form eventListeners
toppingsBtnEl.addEventListener('click', (e) => {
  e.preventDefault();
  addToppingToList();
});

submitBtnEl.addEventListener('click', (e) => {
  e.preventDefault();
  submitForm();
});

// sort buttons
const sortNameEl = document.querySelector('.sort-by-name');
const sortPriceEl = document.querySelector('.sort-by-price');
const sortHeatEl = document.querySelector('.sort-by-heat');

// sort eventListeners
sortNameEl.addEventListener('click', () => {
  renderItem(sortByName(sessionStorage()));
});

sortPriceEl.addEventListener('click', () => {
  renderItem(sortByPrice(sessionStorage()));
});

sortHeatEl.addEventListener('click', () => {
  renderItem(sortByHeat(sessionStorage()));
});

// render on page load
renderItem(sessionStorage());

if (!sessionStorage()) sessionStorage([]);
