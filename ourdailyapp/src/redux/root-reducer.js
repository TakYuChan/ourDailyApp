import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import navReducer from "./nav/nav.reducer";
import shopNavReducer from "./shopNav/shopNav.reducer";
import userReducer from "./user/user.reducer";
import signInUpReducer from "./signInUp/signInUp.reducer";
import appReducer from "./app/app.reducer";
import commentsConverterReducer from "./commentsConverter/commentsConverter.reducer";
import cart_P_Reducer from "./cart/cart_P.reducer";
import cartReducer from "./cart/cart.reducer";
import sectionHeaderReducer from "./sectionHeader/sectionHeader.reducer";

// =========== Applications ===========
import pigGameReducer from "./pigGame/pigGame.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  nav: navReducer,
  user: userReducer,
  signInUp: signInUpReducer,
  app: appReducer,
  commentsConverter: commentsConverterReducer,
  shopNav: shopNavReducer,
  cart_P: cart_P_Reducer,
  cart: cartReducer,
  sectionHeader: sectionHeaderReducer,
  // =========== Applications ===========
  pigGame: pigGameReducer,
});

// export default rootReducer;

export default persistReducer(persistConfig, rootReducer);
