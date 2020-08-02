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

// ========== Redux Thunk (Action Flow) ============
export const signUpSubmitFlow = ({
  displayName,
  email,
  password,
  confirmPassword,
}) => {
  return async (dispatch) => {
    console.log("Sign Up Submit Flow start");

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
