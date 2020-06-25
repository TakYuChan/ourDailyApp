import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectApplications = createSelector(
  [selectShop],
  (shop) => shop.applications
);

export const selectApplicationsInArray = createSelector([selectShop], (shop) =>
  Object.keys(shop.applications).map((key) => shop.applications[key])
);

export const selectApp = (applicationUrlParam) =>
  createSelector(
    [selectApplications],
    (applications) => applications[applicationUrlParam]
  );
