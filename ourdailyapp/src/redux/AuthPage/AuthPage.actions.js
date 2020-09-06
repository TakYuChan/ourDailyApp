import AuthPageActionTypes from "./AuthPage.types";

export const changePage = (pageName) => ({
  type: AuthPageActionTypes.AUTH_PAGE_CHANGE,
  payload: pageName,
});
