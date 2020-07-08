import ShopActionTypes from "./shop.types";

export const updateApplications = (applicationsMap) => ({
  type: ShopActionTypes.UPDATE_APPLICATIONS,
  payload: applicationsMap,
});
