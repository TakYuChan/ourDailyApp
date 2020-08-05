import { call, all } from "redux-saga/effects";

import appSaga from "./app/app.sagas";
import userSaga from "./user/user.sagas";
import pigGameModalsSaga from "./pigGameModals/pigGameModals.sagas";
import pigGameSaga from "./pigGame/pigGameSaga";

export default function* rootSaga() {
  yield all([
    call(appSaga),
    call(userSaga),
    call(pigGameModalsSaga),
    call(pigGameSaga),
  ]);
}
