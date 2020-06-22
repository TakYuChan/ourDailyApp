import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectApplications = createSelector([selectShop], (shop) =>
  Object.keys(shop.applications).map((key) => shop.applications[key])
);
