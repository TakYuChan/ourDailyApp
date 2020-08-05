import { call, all } from "redux-saga/effects";

import appSaga from "./app/app.sagas";
import userSaga from "./user/user.sagas";
import pigGameSaga from "./pigGame/pigGame.sagas";

export default function* rootSaga() {
  yield all([call(appSaga), call(userSaga), call(pigGameSaga)]);
}
