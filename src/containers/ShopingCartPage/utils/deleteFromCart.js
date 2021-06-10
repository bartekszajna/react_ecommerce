const deleteFromCart = (itemId, myCart) => {
  console.log(itemId, myCart);
  const filteredArray = myCart.filter((item) => item.id !== itemId);
  localStorage.setItem('userCart', JSON.stringify(filteredArray));
  return filteredArray;
};

export default deleteFromCart;
