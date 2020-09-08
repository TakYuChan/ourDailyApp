import AuthActionTypes from "./auth.types";

export const googleSignInStart = () => ({
  type: AuthActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (signUpDetails) => ({
  type: AuthActionTypes.EMAIL_SIGN_IN_START,
  payload: signUpDetails,
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

// export const signOutStart = (error, targetComponent) => ({
//   type: AuthActionTypes.SIGN_OUT_START,
//   error,
//   targetComponent,
// });

export const signOutSuccess = () => ({
  type: AuthActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: AuthActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (signUpDetails) => ({
  type: AuthActionTypes.SIGN_UP_START,
  signUpDetails,
});

export const signUpSuccess = () => ({
  type: AuthActionTypes.SIGN_UP_SUCCESS,
});

export const signUpFailure = (error, targetComponent) => ({
  type: AuthActionTypes.SIGN_UP_FAILURE,
  error,
  targetComponent,
});

export const setSignUpAlert = (alert) => ({
  type: AuthActionTypes.SET_SIGNUP_ALERT,
  alert,
})

export const setLogInAlert = (alert) => ({
  type: AuthActionTypes.SET_LOGIN_ALERT,
  alert,
})

export const clearSignUpAlert = () => ({
  type: AuthActionTypes.CLEAR_SIGNUP_ALERT,
})

export const clearLogInAlert = () => ({
  type: AuthActionTypes.CLEAR_LOGIN_ALERT,
})