import { combineReducers } from "redux";

import navReducer from "./nav/nav.reducer";
import shopNavReducer from "./shopNav/shopNav.reducer";
import userReducer from "./user/user.reducer";
import signInUpReducer from "./signInUp/signInUp.reducer";
import shopReducer from "./shop/shop.reducer";
import commentsConverterReducer from "./commentsConverter/commentsConverter.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  nav: navReducer,
  user: userReducer,
  signInUp: signInUpReducer,
  shop: shopReducer,
  commentsConverter: commentsConverterReducer,
  shopNav: shopNavReducer,
  cart: cartReducer,
});

export default rootReducer;
