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

export const closeCartPopUp = () => ({
  type: CartActionTypes.CLOSE_CART_POPUP,
});

export const addItemPriceToTotal = (price) => ({
  type: CartActionTypes.ADD_ITEM_PRICE,
  payload: price,
});
export const minusItemPriceToTotal = (price) => ({
  type: CartActionTypes.MINUS_ITEM_PRICE,
  payload: price,
});

export const moveToWishList = (item) => ({
  type: CartActionTypes.MOVE_TO_WISHLIST,
  payload: item,
});

// ================= WishList Actions =================
export const addWishListItem = (item) => ({
  type: CartActionTypes.ADD_ITEM_WISHLIST,
  payload: item,
});

export const removeWishListItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM_WISHLIST,
  payload: item,
});

export const toggleWishListItem = (item) => ({
  type: CartActionTypes.TOGGLE_ITEM_WISHLIST,
  payload: item,
});

export const moveToCartList = (item) => ({
  type: CartActionTypes.MOVE_TO_CARTLIST,
  payload: item,
});
