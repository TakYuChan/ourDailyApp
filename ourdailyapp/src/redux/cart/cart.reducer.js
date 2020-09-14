import CartActionTypes from "./cart.types";

const INITIATE_STATE = {
  cartPopUpHidden: true,
};

const cartReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_POPUP_HIDDEN:
      return {
        ...state,
        cartPopUpHidden: !state.cartPopUpHidden,
      };
    case CartActionTypes.CLOSE_CART_POPUP:
      return {
        ...state,
        cartPopUpHidden: true,
      };
    default:
      return state;
  }
};

export default cartReducer;
