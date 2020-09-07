import AuthActionTypes from "./auth.types";

const INITIATE_STATE = {
  currentUser: {
    id: null,
    displayName: null,
    email: null,
    photoURL: null,
  },
  isLogged: false,
  signUpAlert: null,
  logInAlert: null,
};

const userReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: {
          id: action.payload.id,
          displayName: action.payload.displayName,
          email: action.payload.email,
          photoURL: action.payload.photoURL,
        },
        isLogged: true,
        signUpAlert: null,
        logInAlert: null,
      };
    case AuthActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: INITIATE_STATE.currentUser,
        isLogged: false,
        signUpAlert: null,
        logInAlert: null,
      };
    // case AuthActionTypes.SIGN_OUT_FAILURE:
    // case AuthActionTypes.SIGN_IN_FAILURE:
    // case AuthActionTypes.SIGN_UP_FAILURE:
    //   return {
    //     ...state,
    //     signUpAlert: action.payload,
    //   };
    case AuthActionTypes.SET_SIGNUP_ALERT:
      return {
        ...state,
        signUpAlert: action.alert,
      }
    default:
      return state;
  }
};

export default userReducer;
