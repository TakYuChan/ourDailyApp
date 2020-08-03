import SignInUpActionTypes from "./signInUp.types";

const INITIAL_STATE = {
  renderFor: "signIn",
  showSignInUpModal: false,
  isProcessingSignIn: false,
  signInFormError: {
    emailError: {
      emailNotExist: false,
    },
    passwordError: {
      passwordIncorrect: false,
    },
  },
  signUpFormError: {
    displayNameError: {
      shortDisplayName: false,
      longDisplayName: false,
      consistentBlankSpace: false,
      blankSpaceAtFrontEnd: false,
    },
    emailError: {
      NoAtSignError: false,
      blackSpaceError: false,
      emailInUseAlready: false,
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
        signInFormError: { ...INITIAL_STATE.signInFormError },
        signUpFormError: { ...INITIAL_STATE.signUpFormError },
      };
    case SignInUpActionTypes.UPDATE_SIGN_UP_ERROR_OBJ:
      return {
        ...state,
        signUpFormError: action.payload,
      };
    case SignInUpActionTypes.EMAIL_ALREADY_IN_USE_TRUE:
      return {
        ...state,
        signUpFormError: {
          ...state.signUpFormError,
          emailError: {
            ...state.emailError,
            emailInUseAlready: true,
          },
        },
      };
    case SignInUpActionTypes.EMAIL_ALREADY_IN_USE_FALSE:
      return {
        ...state,
        signUpFormError: {
          ...state.signUpFormError,
          emailError: {
            ...state.emailError,
            emailInUseAlready: false,
          },
        },
      };
    // ========= Sign Up Form error =============
    case SignInUpActionTypes.SET_PROCESSING_SIGNIN_TRUE:
      return {
        ...state,
        isProcessingSignIn: true,
      };
    case SignInUpActionTypes.SET_PROCESSING_SIGNIN_FALSE:
      return {
        ...state,
        isProcessingSignIn: false,
      };
    case SignInUpActionTypes.PASSWORD_INCORRECT_TRUE:
      return {
        ...state,
        signInFormError: {
          ...state.signInFormError,
          passwordError: {
            passwordIncorrect: true,
          },
        },
      };
    case SignInUpActionTypes.PASSWORD_INCORRECT_FALSE:
      return {
        ...state,
        signInFormError: {
          ...state.signInFormError,
          passwordError: {
            passwordIncorrect: false,
          },
        },
      };
    case SignInUpActionTypes.EMAIL_NOTREGISTERED_TRUE:
      return {
        ...state,
        signInFormError: {
          ...state.signInFormError,
          emailError: {
            emailNotExist: true,
          },
        },
      };
    case SignInUpActionTypes.EMAIL_NOTREGISTERED_FALSE:
      return {
        ...state,
        signInFormError: {
          ...state.signInFormError,
          emailError: {
            emailNotExist: false,
          },
        },
      };
    case SignInUpActionTypes.RESET_SIGNINFORM_ERROR:
      return {
        ...state,
        signInFormError: {
          ...INITIAL_STATE.signInFormError,
        },
      };
    default:
      return state;
  }
};

export default signInUpReducer;
