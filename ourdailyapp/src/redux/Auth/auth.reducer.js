import AuthActionTypes from "./auth.types";

import { allocateSignUpAlerts, allocateLogInAlerts } from "./auth.utils";

const INITIATE_STATE = {
  isLogged: false,
  signUpAlert: {
    nameAlerts: [],
    emailAlerts: [],
    passwordAlerts: [],
    genderAlerts: [],
    birthdayAlerts: [],
  },
  logInAlert: {
    emailAlerts: [],
    formAlerts: [],
  },
};

const authReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_SIGNUP_ALERT:
      return {
        ...state,
        signUpAlert: allocateSignUpAlerts(action.alert),
      };
    case AuthActionTypes.SET_LOGIN_ALERT:
      return {
        ...state,
        logInAlert: allocateLogInAlerts(action.alert),
      };
    case AuthActionTypes.CLEAR_LOGIN_ALERT:
    case AuthActionTypes.CLEAR_SIGNUP_ALERT:
      return {
        ...state,
        signUpAlert: INITIATE_STATE.signUpAlert,
        logInAlert: INITIATE_STATE.logInAlert,
      };
    default:
      return state;
  }
};

export default authReducer;
