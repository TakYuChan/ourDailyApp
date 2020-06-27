import ShopNavActionTypes from "./shopNav.types";

export const toggleShopNavHidden = () => ({
  type: ShopNavActionTypes.TOGGLE_HIDDEN,
});

export const closeShopNav = () => ({
  type: ShopNavActionTypes.SET_HIDDEN_TRUE,
});
