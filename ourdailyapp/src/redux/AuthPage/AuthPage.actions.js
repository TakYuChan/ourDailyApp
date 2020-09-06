import AuthRouterActionTypes from "./AuthRouter.types";

export const changePage = (pageName) => ({
  type: AuthRouterActionTypes.AUTH_PAGE_CHANGE,
  payload: pageName,
});
