const menuBtnEl = document.getElementById('header-btn-menu');
const addPizzaBtnEl = document.getElementById('header-btn-add');
const menuContainerEl = document.querySelector('.menu-container');
const createContainerEl = document.querySelector('.create-container');

export default function manageNavButtons() {
  menuBtnEl.addEventListener('click', () => {
    createContainerEl.classList.add('disable');
    menuContainerEl.classList.remove('disable');
  });
  addPizzaBtnEl.addEventListener('click', () => {
    createContainerEl.classList.remove('disable');
    menuContainerEl.classList.add('disable');
  });
}
