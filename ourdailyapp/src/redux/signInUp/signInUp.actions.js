import SignInUpActionTypes from "../signInUp/signInUp.types";
import { signUpFormErrorCheck } from "../../utils/errorCheckUtils";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

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

export const resetSignUpFormError = () => ({
  type: SignInUpActionTypes.RESET_SIGNUPFORM_ERROR,
});

export const setIsProcessingSignInTRUE = () => ({
  type: SignInUpActionTypes.SET_PROCESSING_SIGNIN_TRUE,
});

export const setIsProcessingSignInFALSE = () => ({
  type: SignInUpActionTypes.SET_PROCESSING_SIGNIN_FALSE,
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

export const resetSignInFormError = () => ({
  type: SignInUpActionTypes.RESET_SIGNINFORM_ERROR,
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
      dispatch(resetSignInFormError());
      dispatch(resetSignUpFormError());
      dispatch(setRenderForSignIn());
    }, 300);
  };
};

export const signUpSubmitFlow = ({
  displayName,
  email,
  password,
  confirmPassword,
}) => {
  return async (dispatch) => {
    //1. Error Checking
    const errorObj = signUpFormErrorCheck(
      displayName,
      email,
      password,
      confirmPassword
    );

    dispatch(updateSignUpError(errorObj));

    //2. if NO error is detected, start creating new user in firebase.
    if (Object.keys(errorObj).length === 0) {
      // Create user account
      console.log("errorObj is CLEAN");
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // Create User profile in firestore
      await createUserProfileDocument(user, { displayName, password });

      // Registration Successful will direct users to the "registerSuccessScene"
      dispatch(setRenderForRegisterSuccess());

      return true;
    }

    return false;
  };
};
