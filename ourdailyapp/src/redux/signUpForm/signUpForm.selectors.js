import {
  createSelector
} from "reselect";

const selectSignUpForm = (state) => state.signUpForm;

export const selectClickedAlertSvg = createSelector(
  [selectSignUpForm],
  signUpFormReducer => signUpFormReducer.clickedAlertSvg
)

export const selectIsSigningUp = createSelector(
  [selectSignUpForm],
  signUpFormReducer => signUpFormReducer.isSigningUp
)