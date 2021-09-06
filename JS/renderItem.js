const menuListEl = document.querySelector('.menu-list');

export default function renderItem(menuList) {
  menuListEl.innerHTML = '';
  if (menuList == null) {
    menuListEl.innerHTML = `<h2>There are no pizzas in menu</h2>`;
  } else {
    menuList.forEach((item) => {
      return (menuListEl.innerHTML += `
        <div class="pizza-card" id=${item.index}>
            <div class="pizza-card-photo" style='background-image: url(${item.photo})'></div>
            <h3 class="pizza-card-name">${item.name}</h3>
            <p class="pizza-card-toppings">${item.toppings}</p>
            <div class="pizza-card-heat" style='background-image: url("./heatImages/${item.heat}.png")'></div>
            <h3 class="pizza-card-price">$${item.price}</h3>
            <button class="delete-pizza">Delete</button>
            <div class="delete-popUp">
                <h3 class="popUp-header">Do you really want to delete this pizza?</h3>
                <button class="popUp-cancel">Cancel delete</button>
                <button class="popUp-delete" id=${item.index}>Yes, I want to delete</button>
            </div>
        </div>
        `);
    });
  }
}
