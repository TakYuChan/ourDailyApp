import SignInUpActionTypes from "../signInUp/signInUp.types";

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
