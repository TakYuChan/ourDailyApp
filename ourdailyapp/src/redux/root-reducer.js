import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import navReducer from "./nav/nav.reducer";
import shopNavReducer from "./shopNav/shopNav.reducer";
import authReducer from "./Auth/auth.reducer";
import signInUpReducer from "./signInUp/signInUp.reducer";
import appReducer from "./app/app.reducer";
import commentsConverterReducer from "./commentsConverter/commentsConverter.reducer";
import cart_P_Reducer from "./cart/cart_P.reducer";
import cartReducer from "./cart/cart.reducer";
import routePathReducer from "./routePath/routePath.reducer";
import authPageReducer from "./AuthPage/AuthPage.reducer";

// =========== Applications ===========
import pigGameReducer from "./pigGame/pigGame.reducer";
import pigGameModalsReducer from "./pigGameModals/pigGameModals.reducer";
import pigGamePlayer2Reducer from "./pigGamePlayer2/pigGamePlayer2.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart_P", "user"],
  // whitelist: ["cart_P", "pigGame"],
};

const rootReducer = combineReducers({
  nav: navReducer,
  auth: authReducer,
  signInUp: signInUpReducer,
  app: appReducer,
  commentsConverter: commentsConverterReducer,
  shopNav: shopNavReducer,
  cart_P: cart_P_Reducer,
  cart: cartReducer,
  routePath: routePathReducer,
  authPage: authPageReducer,
  // =========== Applications ===========
  pigGame: pigGameReducer,
  pigGameModals: pigGameModalsReducer,
  pigGamePlayer2: pigGamePlayer2Reducer,
});

// export default rootReducer;

export default persistReducer(persistConfig, rootReducer);
