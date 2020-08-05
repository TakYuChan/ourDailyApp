import UserActionTypes from "./user.types";

export const setUser = (user) => ({
  type: UserActionTypes.SET_USER,
  payload: user,
});

export const userLoggedOn = () => ({
  type: UserActionTypes.USER_LOGGED_ON,
});

export const userLoggedOFF = () => ({
  type: UserActionTypes.USER_LOGGED_OFF,
});

export const googleSignIn = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN,
});

export const emailSignIn = () => ({
  type: UserActionTypes.EMAIL_SIGN_IN,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: error,
});
