import SignUpFormActionTypes from "./signUpForm.types";

const INITIATE_STATE = {
    clickedAlertSvg: null,
};

const signUpFormReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case SignUpFormActionTypes.SET_CLICKED_ALERTSVG:
        return {
            ...state,
            clickedAlertSvg: action.target,
        }
    default:
      return state;
  }
};

export default signUpFormReducer;
