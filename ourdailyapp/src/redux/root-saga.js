import { call, all } from "redux-saga/effects";

import appSaga from "./app/app.sagas";
import userSaga from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(appSaga), call(userSaga)]);
}
