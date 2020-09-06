import { createSelector } from "reselect";

const selectAuthRouterReducer = (state) => state.authRouter;

export const selectAuthPage = createSelector(
  [selectAuthRouterReducer],
  (authRouterReducer) => authRouterReducer.authPage
);
