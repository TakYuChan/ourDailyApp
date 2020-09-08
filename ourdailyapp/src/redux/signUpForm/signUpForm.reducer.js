import SignUpFormActionTypes from "./signUpForm.types";

const INITIATE_STATE = {
  clickedAlertSvg: null,
  isSigningUp: false,
};

const signUpFormReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case SignUpFormActionTypes.SET_CLICKED_ALERTSVG:
      return {
        ...state,
        clickedAlertSvg: action.target,
      };
    case SignUpFormActionTypes.CLEAR_CLICKED_ALERTSVG:
      return {
        ...state,
        clickedAlertSvg: INITIATE_STATE.clickedAlertSvg,
      };
    case SignUpFormActionTypes.SET_IS_SIGNINGUP_TRUE:
      return {
        ...state,
        isSigningUp: true,
      };
    case SignUpFormActionTypes.SET_IS_SIGNINGUP_FALSE:
      return {
        ...state,
        isSigningUp: false,
      };
    default:
      return state;
  }
};

export default signUpFormReducer;