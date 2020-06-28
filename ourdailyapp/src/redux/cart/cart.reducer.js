import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIATE_STATE = {
  cartItems: [],
  cartPopUpHidden: true,
  itemTotalPrice: 0,
};

const cartReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM_CART:
      return addItemToCart(state, action.payload);
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
    case CartActionTypes.ADD_ITEM_PRICE:
      return {
        ...state,
        itemTotalPrice: state.itemTotalPrice + action.payload,
      };
    case CartActionTypes.MINUS_ITEM_PRICE:
      return {
        ...state,
        itemTotalPrice: state.itemTotalPrice - action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
