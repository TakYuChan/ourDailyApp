import { createSelector } from "reselect";

const selectSignInUp = (state) => state.signInUp;

export const selectRenderFor = createSelector(
  [selectSignInUp],
  (signInUp) => signInUp.renderFor
);

export const selectShowSignInUpModal = createSelector(
  [selectSignInUp],
  (signInUp) => signInUp.showSignInUpModal
);
