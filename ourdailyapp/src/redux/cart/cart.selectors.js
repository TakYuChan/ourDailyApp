import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItemsQuantity = createSelector(
  [selectCart],
  (cart) => cart.cartItems.length
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartMoreItems = createSelector(
  [selectCartItemsQuantity],
  (quantity) => quantity - 3
);

export const selectCartPopUpHidden = createSelector(
  [selectCart],
  (cart) => cart.cartPopUpHidden
);
