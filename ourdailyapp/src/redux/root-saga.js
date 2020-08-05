import { call, all } from "redux-saga/effects";

import appSaga from "./app/app.sagas";
import userSaga from "./user/user.sagas";
<<<<<<< HEAD
import pigGameSaga from "./pigGame/pigGame.sagas";

export default function* rootSaga() {
  yield all([call(appSaga), call(userSaga), call(pigGameSaga)]);
=======
import pigGameModalsSaga from "./pigGameModals/pigGameModals.sagas";
import pigGameSaga from "./pigGame/pigGameSaga";

export default function* rootSaga() {
  yield all([
    call(appSaga),
    call(userSaga),
    call(pigGameModalsSaga),
    call(pigGameSaga),
  ]);
>>>>>>> 53da1c25287e345bd66203e8d428cf24d327f672
}
