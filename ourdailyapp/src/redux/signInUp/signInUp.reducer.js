import SignInUpActionTypes from "./signInUp.types";

const INITIAL_STATE = {
  renderFor: "signIn",
  showSignInUpModal: false,
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
    default:
      return state;
  }
};

export default signInUpReducer;
