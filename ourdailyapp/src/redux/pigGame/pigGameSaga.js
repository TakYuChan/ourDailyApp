import { all, put, call, takeLatest } from "redux-saga/effects";
import PigGameActionTypes from "./pigGame.types";
import { player2LogOut } from "./pigGame.actions";

import { localStorageClearItem } from "../../utils/localStorage";

function* onSignOut() {
  yield takeLatest(PigGameActionTypes.PLAYER2_USER_LOGOUT, signout);
}

export default function* pigGameSaga() {
  yield all([call(onSignOut)]);
}

function* signout() {
  try {
    yield put(player2LogOut());
    yield call(localStorageClearItem, "pigGame_P");
    console.log("LOGGED OUT PLAYER 2");
  } catch (error) {
    console.log(error.message);
  }
}
