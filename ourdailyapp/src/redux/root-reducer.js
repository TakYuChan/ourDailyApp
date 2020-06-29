import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import navReducer from "./nav/nav.reducer";
import shopNavReducer from "./shopNav/shopNav.reducer";
import userReducer from "./user/user.reducer";
import signInUpReducer from "./signInUp/signInUp.reducer";
import shopReducer from "./shop/shop.reducer";
import commentsConverterReducer from "./commentsConverter/commentsConverter.reducer";
import cartReducer from "./cart/cart.reducer";
import cartNPReducer from "./cart/cartNP.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  nav: navReducer,
  user: userReducer,
  signInUp: signInUpReducer,
  shop: shopReducer,
  commentsConverter: commentsConverterReducer,
  shopNav: shopNavReducer,
  cart: cartReducer,
  cartNP: cartNPReducer,
});

// export default rootReducer;

export default persistReducer(persistConfig, rootReducer);
