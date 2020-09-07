import AuthActionTypes from "./auth.types";

const INITIATE_STATE = {
  currentUser: {
    id: null,
    displayName: null,
    email: null,
    photoURL: null,
  },
  isLogged: false,
  error: null,
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
        error: null,
      };
    case AuthActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: INITIATE_STATE.currentUser,
        isLogged: false,
        error: null,
      };
    case AuthActionTypes.SIGN_OUT_FAILURE:
    case AuthActionTypes.SIGN_IN_FAILURE:
    case AuthActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
