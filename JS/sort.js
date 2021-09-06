function sortByName(items) {
  return items.sort((a, b) => (a.name > b.name ? 1 : -1));
}

function sortByPrice(items) {
  return items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
}

function sortByHeat(items) {
  return items.sort((a, b) => (a.heat > b.heat ? 1 : -1));
}

export { sortByName, sortByPrice, sortByHeat };
