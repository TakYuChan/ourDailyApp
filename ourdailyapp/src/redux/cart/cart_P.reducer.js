import CartActionTypes from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  addWishListItem,
  moveItemToWishlist,
  moveItemToCartList,
  toggleWishListItems,
} from "./cart.utils";

const INITIATE_STATE = {
  cartItems: [],
  itemTotalPrice: 0,
  wishListItems: [],
};

const cartReducer_P = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM_CART:
      return addItemToCart(state, action.payload);
    case CartActionTypes.REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
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
    case CartActionTypes.MOVE_TO_WISHLIST:
      return moveItemToWishlist(state, action.payload);
    // ================= WishList Actions =================
    case CartActionTypes.ADD_ITEM_WISHLIST:
      return addWishListItem(state, action.payload);
    case CartActionTypes.REMOVE_ITEM_WISHLIST:
      return {
        ...state,
        wishListItems: removeItemFromCart(state.wishListItems, action.payload),
      };
    case CartActionTypes.TOGGLE_ITEM_WISHLIST:
      return toggleWishListItems(state, action.payload);
    case CartActionTypes.MOVE_TO_CARTLIST:
      return moveItemToCartList(state, action.payload);
    default:
      return state;
  }
};

export default cartReducer_P;
