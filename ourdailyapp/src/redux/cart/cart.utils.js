export const addItemToCart = (cartItems, cartItemToAdd) => {
  const itemExist = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (itemExist === undefined) {
    cartItems.push(cartItemToAdd);
    return cartItems;
  } else {
    return cartItems;
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};
