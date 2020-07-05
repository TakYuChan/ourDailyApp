import { createSelector } from "reselect";

const selectCart = (state) => state.cart;
const selectCartNP = (state) => state.cartNP;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsQuantity = createSelector([selectCart], (cart) => {
  return cart.cartItems.length;
});

export const selectCartMoreItems = createSelector(
  [selectCartItemsQuantity],
  (quantity) => quantity - 3
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCart],
  (cart) => cart.itemTotalPrice
);

export const selectCartItemExist = (itemIdToCheck) =>
  createSelector([selectCartItems], (cartItems) => {
    console.log(itemIdToCheck);
    if (cartItems.find((item) => item.id === itemIdToCheck) === undefined) {
      return false;
    } else {
      return true;
    }
  });

// ==================== Cart No Persistent =================

export const selectCartPopUpHidden = createSelector(
  [selectCartNP],
  (cart) => cart.cartPopUpHidden
);

// ==================== WishList =================
export const selectWishListItems = createSelector(
  [selectCart],
  (cart) => cart.wishListItems
);

export const selectWishListQuantity = createSelector([selectCart], (cart) => {
  return cart.wishListItems.length;
});

export const selectWishListItemExist = (itemIdToCheck) =>
  createSelector([selectWishListItems], (wishList) => {
    if (wishList.find((item) => item.id === itemIdToCheck) === undefined) {
      return false;
    } else {
      return true;
    }
  });
