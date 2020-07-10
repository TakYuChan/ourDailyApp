import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectApplications = createSelector(
  [selectShop],
  (shop) => shop.applications
);

export const selectApplicationsInArray = createSelector(
  [selectApplications],
  (applications) => {
    return applications
      ? Object.keys(applications).map((key) => applications[key])
      : [];
  }
);

export const selectApp = (applicationUrlParam) =>
  createSelector([selectApplications], (applications) => {
    return applications ? applications[applicationUrlParam] : null;
  });
