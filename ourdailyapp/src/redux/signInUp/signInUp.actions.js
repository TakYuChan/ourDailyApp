import SignInUpActionTypes from "../signInUp/signInUp.types";

export const setRenderForSignIn = () => ({
  type: SignInUpActionTypes.SET_RENDER_FOR_SIGNIN,
});
export const setRenderForSignUp = () => ({
  type: SignInUpActionTypes.SET_RENDER_FOR_SIGNIUP,
});
export const setRenderForRegisterSuccess = () => ({
  type: SignInUpActionTypes.SET_RENDER_FOR_REGISTER_SUCCESS,
});

export const toggleSignInUpModal = () => ({
  type: SignInUpActionTypes.TOGGLE_SIGNINUP_MODAL,
});

export const turnSignInUpOFF = () => ({
  type: SignInUpActionTypes.TURN_SIGNINUP_OFF,
});

export const updateSignUpError = (errorObj) => ({
  type: SignInUpActionTypes.UPDATE_SIGN_UP_ERROR_OBJ,
  payload: errorObj,
});

export const setIsProcessingSignInTRUE = () => ({
  type: SignInUpActionTypes.SET_PROCESSING_SIGNIN_TRUE,
});

export const setIsProcessingSignInFALSE = () => ({
  type: SignInUpActionTypes.SET_PROCESSING_SIGNIN_FALSE,
});

export const setIsProcessingSignUpTRUE = () => ({
  type: SignInUpActionTypes.SET_PROCESSING_SIGNUP_TRUE,
});

export const setIsProcessingSignUpFALSE = () => ({
  type: SignInUpActionTypes.SET_PROCESSING_SIGNUP_FALSE,
});

export const setPasswordIncorrectTRUE = () => ({
  type: SignInUpActionTypes.PASSWORD_INCORRECT_TRUE,
});

export const setPasswordIncorrectFALSE = () => ({
  type: SignInUpActionTypes.PASSWORD_INCORRECT_FALSE,
});

export const setEmailNotRegisteredTRUE = () => ({
  type: SignInUpActionTypes.EMAIL_NOTREGISTERED_TRUE,
});

export const setEmailNotRegisteredFALSE = () => ({
  type: SignInUpActionTypes.EMAIL_NOTREGISTERED_FALSE,
});

export const resetSignInSignUpError = () => ({
  type: SignInUpActionTypes.RESET_SIGNIN_SIGNUP_ERROR,
});

export const setEmailAlreadyInUserTRUE = () => ({
  type: SignInUpActionTypes.EMAIL_ALREADY_IN_USE_TRUE,
});

export const setEmailAlreadyInUserFALSE = () => ({
  type: SignInUpActionTypes.setEmailAlreadyInUserFALSE,
});

// ========== Redux Thunk (Action Flow) ============

export const signInUpOnHide = () => {
  return (dispatch) => {
    dispatch(turnSignInUpOFF());

    setTimeout(() => {
      dispatch(resetSignInSignUpError());
      dispatch(setRenderForSignIn());
    }, 300);
  };
};
