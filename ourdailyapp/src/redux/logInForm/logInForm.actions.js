import LogInFormActionTypes from "./logInForm.types";

export const setClickedAlertSvg_loginForm = (target) => ({
  type: LogInFormActionTypes.SET_CLICKED_ALERTSVG_LOGIN,
  target,
});

export const clearClickedAlertSvg = () => ({
  type: LogInFormActionTypes.CLEAR_CLICKED_ALERTSVG_LOGIN,
});

export const setIsSigningUpTRUE = () => ({
  type: LogInFormActionTypes.SET_IS_LOGGINGIN_TRUE,
});

export const setIsSigningUpFALSE = () => ({
  type: LogInFormActionTypes.SET_IS_LOGGINGIN_FALSE,
});
