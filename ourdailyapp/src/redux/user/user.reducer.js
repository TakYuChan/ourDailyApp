import UserActionTypes from "./user.types";

const INITIATE_STATE = {
  currentUser: null,
  userLogged: false,
  error: null,
};

const userReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.SING_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.USER_LOGGED_ON:
      return {
        ...state,
        userLogged: true,
      };
    case UserActionTypes.USER_LOGGED_OFF:
      return {
        ...state,
        userLogged: false,
      };
    default:
      return state;
  }
};

export default userReducer;
