import LogInFormActionTypes from "./logInForm.types";

export const setIsSigningUpTRUE = () => ({
  type: LogInFormActionTypes.SET_IS_LOGGINGIN_TRUE,
});

export const setIsSigningUpFALSE = () => ({
  type: LogInFormActionTypes.SET_IS_LOGGINGIN_FALSE,
});
