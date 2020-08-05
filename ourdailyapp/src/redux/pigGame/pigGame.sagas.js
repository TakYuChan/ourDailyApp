import { takeLatest, all, call, put, select } from "redux-saga/effects";
import PigGameActionTypes from "./pigGame.types";
import {
  startNewGame,
  setPlayer2UserInfo,
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from "./pigGame.actions";
import {
  setIsProcessingSignInTRUE,
  setIsProcessingSignInFALSE,
  signInFormOnHide,
} from "../pigGameModals/pigGameModals.actions";

import { getUserAuthInfo, saveGameState } from "./pigGame.sagaUtils";

function* onSignInStart() {
  yield takeLatest(PigGameActionTypes.SIGN_IN_START, signIn);
}

function* onSignOutStart() {
  yield takeLatest(PigGameActionTypes.SIGN_OUT_START, signOut);
}

export default function* pigGameSaga() {
  yield all([call(onSignInStart), call(onSignOutStart)]);
}

// ================= More generator functions =================

function* signIn({ email, password }) {
  try {
    yield;
    // * Start spinner
    yield put(setIsProcessingSignInTRUE());
    const user = yield call(getUserAuthInfo, email, password);
    if (user) {
      // 1. Reset game data
      yield put(startNewGame());

      // 2. Player 2 data -> reducer
      yield put(setPlayer2UserInfo(user));

      const pigGameState = yield select((state) => state.pigGame_P);
      yield put(signInFormOnHide());
      yield call(saveGameState, pigGameState);
    }

    // * Stop spinner
    yield put(setIsProcessingSignInFALSE());
  } catch (error) {
    // * Stop spinner
    yield put(setIsProcessingSignInFALSE());
    yield put(signInFailure(error.message));
  }
}

function* signOut() {
  try {
    yield put(signOutSuccess());
    yield put(startNewGame());
    // Save state to firestore
    const pigGameState = yield select((state) => state.pigGame_P);
    yield call(saveGameState, pigGameState);
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}
