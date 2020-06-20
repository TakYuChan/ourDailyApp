import { UserActionTypes } from "./user.types";

export const setUser = (user) => ({
  type: UserActionTypes.SET_USER,
  payload: user,
});

export const userLoggedOn = () => ({
  type: UserActionTypes.USER_LOGGED_ON,
});

export const userLoggedOFF = () => ({
  type: UserActionTypes.USER_LOGGED_OFF,
});
