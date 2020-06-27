import ShopNavTypes from "./shopNav.types";

export const toggleShopNavHidden = () => ({
  type: ShopNavTypes.TOGGLE_HIDDEN,
});

export const closeShopNav = () => ({
  type: ShopNavTypes.SET_HIDDEN_TRUE,
});
