export const addItemToCart = (state, cartItemToAdd) => {
  //Check if item is already in the cart
  //!!Each application can be bought once and added once only
  const itemExist = state.cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (itemExist === undefined) {
    //Add item
    state.cartItems.push(cartItemToAdd);
    //Add price
    state.itemTotalPrice += cartItemToAdd.price;
    return {
      ...state,
      cartItems: state.cartItems,
      itemTotalPrice: state.itemTotalPrice,
    };
  } else {
    return state;
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};
