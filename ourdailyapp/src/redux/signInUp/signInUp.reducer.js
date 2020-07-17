import SignInUpActionTypes from "./signInUp.types";

const INITIAL_STATE = {
  renderFor: "signIn",
  showSignInUpModal: false,
  signUpFormError: {
    displayNameError: {
      shortDisplayName: false,
      longDisplayName: false,
      consistentBlankSpace: false,
      blankSpaceAtFrontEnd: false,
    },
    passwordError: {
      passwordNotMatch: false,
      passwordSpecialCharacter: false,
      passwordCapitalLetter: false,
      shortPassword: false,
    },
  }, // Objects nested in an object
};

const signInUpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SignInUpActionTypes.SET_RENDER_FOR_SIGNIN:
      return {
        ...state,
        renderFor: "signIn",
      };
    case SignInUpActionTypes.SET_RENDER_FOR_SIGNIUP:
      return {
        ...state,
        renderFor: "signUp",
      };
    case SignInUpActionTypes.SET_RENDER_FOR_REGISTER_SUCCESS:
      return {
        ...state,
        renderFor: "registerSuccess",
      };
    case SignInUpActionTypes.TOGGLE_SIGNINUP_MODAL:
      return {
        ...state,
        showSignInUpModal: !state.showSignInUpModal,
      };
    case SignInUpActionTypes.TURN_SIGNINUP_OFF:
      return {
        ...state,
        showSignInUpModal: false,
      };
    // ========= Sign Up Form error =============
    case SignInUpActionTypes.RESET_SIGNUPFORM_ERROR:
      return {
        ...state,
        signUpFormError: {
          displayNameError: {
            shortDisplayName: false,
            longDisplayName: false,
          },
          passwordError: {
            passwordNotMatch: false,
            passwordSpecialCharacter: false,
            passwordCapitalLetter: false,
            shortPassword: false,
          },
        },
      };
    case SignInUpActionTypes.UPDATE_SIGN_UP_ERROR_OBJ:
      return {
        ...state,
        signUpFormError: action.payload,
      };
    default:
      return state;
  }
};

export default signInUpReducer;
