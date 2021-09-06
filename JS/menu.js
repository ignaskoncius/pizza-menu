const menuItemEl = document.querySelector('.menu-list');
const deletePopUp = document.querySelector('.delete-popUp');

import sessionStorage from './sessionStorage.js';
import renderItem from './renderItem.js';

let pizzaData = sessionStorage();

menuItemEl.addEventListener('click', (event) => {
  let id = event.target.parentElement.parentElement.id;
  if (event.target.className === 'delete-pizza') {
    deletePopUp.style.display = 'block';
  }
  if (event.target.className === 'popUp-cancel') {
    deletePopUp.style.display = 'none';
  }
  if (event.target.className === 'popUp-delete') {
    let newPizzaArr = pizzaData.filter(
      (item) => Number(item.index) !== Number(id)
    );
    sessionStorage(newPizzaArr);
    renderItem(newPizzaArr);
    location.reload();
  }
});
