import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware, thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
