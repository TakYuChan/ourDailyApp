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

export const selectSignUpFormError = createSelector(
  [selectSignInUp],
  (signInUp) => signInUp.signUpFormError
);

export const selectIsProcessingSignIn = createSelector(
  [selectSignInUp],
  (signInUp) => signInUp.isProcessingSignIn
);

export const selectIsProcessingSignUp = createSelector(
  [selectSignInUp],
  (signInUp) => signInUp.isProcessingSignUp
);

export const selectSignInFormError = createSelector(
  [selectSignInUp],
  (signInUp) => signInUp.signInFormError
);
