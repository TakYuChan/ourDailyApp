import LogInFormActionTypes from "./logInForm.types";

const INITIATE_STATE = {
  isSigningUp: false,
};

const logInFormReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case LogInFormActionTypes.SET_IS_LOGGINGIN_TRUE:
      return {
        ...state,
        isSigningUp: true,
      };
    case LogInFormActionTypes.SET_IS_LOGGINGIN_FALSE:
      return {
        ...state,
        isSigningUp: false,
      };
    default:
      return state;
  }
};

export default logInFormReducer;
