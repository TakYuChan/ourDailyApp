import { combineReducers } from "redux";

import navReducer from "./nav/nav.reducer";
import userReducer from "./user/user.reducer";
import signInUpReducer from "./signInUp/signInUp.reducer";

const rootReducer = combineReducers({
  nav: navReducer,
  user: userReducer,
  signInUp: signInUpReducer,
});

export default rootReducer;
