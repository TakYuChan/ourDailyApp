import { combineReducers } from "redux";

import navReducer from "./nav/nav.reducer";
import userReducer from "./user/user.reducer";
import signInUpReducer from "./signInUp/signInUp.reducer";
import shopReducer from "./shop/shop.reducer";

const rootReducer = combineReducers({
  nav: navReducer,
  user: userReducer,
  signInUp: signInUpReducer,
  shop: shopReducer,
});

export default rootReducer;
