import SignUpFormActionTypes from "./signUpForm.types";

export const setClickedAlertSvg = (target) => ({
  type: SignUpFormActionTypes.SET_CLICKED_ALERTSVG,
  target,
});

export const clearClickedAlertSvg = () => ({
  type: SignUpFormActionTypes.CLEAR_CLICKED_ALERTSVG,
});

export const setIsSigningUpTRUE = () => ({
  type: SignUpFormActionTypes.SET_IS_SIGNINGUP_TRUE,
});

export const setIsSigningUpFALSE = () => ({
  type: SignUpFormActionTypes.SET_IS_SIGNINGUP_FALSE,
});
