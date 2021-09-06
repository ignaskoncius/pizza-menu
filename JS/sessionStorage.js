export default (item) => {
  if (!!item) sessionStorage.setItem('allPizzas', JSON.stringify(item));
  return JSON.parse(sessionStorage.getItem('allPizzas'));
};
