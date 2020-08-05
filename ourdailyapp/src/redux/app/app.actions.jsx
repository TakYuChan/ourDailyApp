import AppActionTypes from "./app.types";

export const fetchApplicationsStart = () => ({
  type: AppActionTypes.FETCH_APPLICATIONS_START,
});
// ====================== App Description + content =====================
export const fetchApplicationsSuccess = (applicationsMap) => ({
  type: AppActionTypes.FETCH_APPLICATIONS_SUCCESS,
  payload: applicationsMap,
});

export const fetchApplicationsFailure = (errorMsg) => ({
  type: AppActionTypes.FETCH_APPLICATIONS_FAILURE,
  payload: errorMsg,
});

// ====================== App Logo items =================
export const fetchAppLogoItemsStart = () => ({
  type: AppActionTypes.FETCH_APPLOGO_ITEM_START,
});

export const fetchAppLogoItemsSuccess = (appLogoItems) => ({
  type: AppActionTypes.FETCH_APPLOGO_ITEM_SUCCESS,
  payload: appLogoItems,
});
