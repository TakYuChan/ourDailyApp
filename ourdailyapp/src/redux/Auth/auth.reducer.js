import AuthActionTypes from "./auth.types";

import {allocateSignUpAlerts} from "./auth.utils";

const INITIATE_STATE = {
  currentUser: {
    id: null,
    displayName: null,
    email: null,
    photoURL: null,
  },
  isLogged: false,
  signUpAlert: {        
    nameAlerts: [],
    emailAlerts: [],
    passwordAlerts: [],
    genderAlerts: [],
    birthdayAlerts: [],
  },
  logInAlert: {},
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
        signUpAlert: {},
        logInAlert: {},
      };
    case AuthActionTypes.SET_SIGNUP_ALERT:
      return {
        ...state,
        signUpAlert: allocateSignUpAlerts(action.alert),
      }
    // case AuthActionTypes.SET_LOGIN_ALERT:
    //   return {
    //     ...state,
    //     logInAlert: action.alert,
    //   }
    default:
      return state;
  }
};

export default userReducer;
