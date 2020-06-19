import { combineReducers } from "redux";

import navReducer from "./nav/nav.reducer";

const rootReducer = combineReducers({
  nav: navReducer,
});

export default rootReducer;
