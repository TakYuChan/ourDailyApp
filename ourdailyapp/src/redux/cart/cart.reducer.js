import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIATE_STATE = {
  cartItems: [],
  cartPopUpHidden: true,
};

const cartReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.TOGGLE_CART_POPUP_HIDDEN:
      return {
        ...state,
        cartPopUpHidden: !state.cartPopUpHidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
