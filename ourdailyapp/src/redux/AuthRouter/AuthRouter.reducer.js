import AuthRouterActionTypes from "./AuthRouter.types";

const INITIATE_STATE = {
  authPage: "login",
};

const AuthRouterReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case AuthRouterActionTypes.AUTH_PAGE_CHANGE:
      return {
        ...state,
        authPage: action.payload,
      };
    default:
      return state;
  }
};

export default AuthRouterReducer;
