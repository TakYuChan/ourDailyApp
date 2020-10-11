import AuthActionTypes from "./auth.types";

const INITIATE_STATE = {
  isLogged: false,
  user: null,
};

const authReducer_P = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_ISLOGGED_TRUE:
      return {
        ...state,
        isLogged: true,
      };
    case AuthActionTypes.SET_USER_DETAILS:
      return {
        ...state,
        isLogged: true,
        user: action.user,
      };
      case AuthActionTypes.SIGN_OUT:
        return {
          ...state,
          isLogged: false,
        }
    default:
      return state;
  }
};

export default authReducer_P;
