import CartActionTypes from "./cart.types";

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const toggleCartPopUp = () => ({
  type: CartActionTypes.TOGGLE_CART_POPUP_HIDDEN,
});
