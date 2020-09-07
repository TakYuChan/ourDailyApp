import AuthActionTypes from "./auth.types";

export const googleSignInStart = () => ({
  type: AuthActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: AuthActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: AuthActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: AuthActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const checkAuthSession = () => ({
  type: AuthActionTypes.CHECK_AUTH_SESSION,
});

export const signOutStart = () => ({
  type: AuthActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: AuthActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: AuthActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (registerDetails) => ({
  type: AuthActionTypes.SIGN_UP_START,
  payload: registerDetails,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: AuthActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: AuthActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
