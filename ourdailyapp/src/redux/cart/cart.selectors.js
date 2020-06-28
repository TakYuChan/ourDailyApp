import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
const selectCartNP = (state) => state.cartNP;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsQuantity = createSelector(
  [selectCart],
  (cart) => cart.cartItems.length
);

export const selectCartMoreItems = createSelector(
  [selectCartItemsQuantity],
  (quantity) => quantity - 3
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCart],
  (cart) => cart.itemTotalPrice
);

// ==================== Cart No Persistent =================

export const selectCartPopUpHidden = createSelector(
  [selectCartNP],
  (cart) => cart.cartPopUpHidden
);
