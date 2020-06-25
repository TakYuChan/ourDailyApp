import { combineReducers } from "redux";

import navReducer from "./nav/nav.reducer";
import userReducer from "./user/user.reducer";
import signInUpReducer from "./signInUp/signInUp.reducer";
import shopReducer from "./shop/shop.reducer";
import commentsConverterReducer from "./commentsConverter/commentsConverter.reducer";

const rootReducer = combineReducers({
  nav: navReducer,
  user: userReducer,
  signInUp: signInUpReducer,
  shop: shopReducer,
  commentsConverter: commentsConverterReducer,
});

export default rootReducer;
