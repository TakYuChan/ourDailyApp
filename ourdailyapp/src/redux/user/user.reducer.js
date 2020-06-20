import { UserActionTypes } from "./user.types";

const INITIATE_STATE = {
  currentUser: null,
  userLogged: false,
};

const userReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        currentUser: action.payload,
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
