import PigGameModalsActionTypes from "./pigGameModals.types";
import { signInFailure } from "../pigGame/pigGame.actions";
import {
  signInFormOnHide,
  setIsProcessingSignInTRUE,
  setIsProcessingSignInFALSE,
} from "./pigGameModals.actions";
import { auth } from "../../firebase/firebase.utils";
import { all, put, call, takeLatest } from "redux-saga/effects";

import {
  getSnapshotFromAuth,
  checkSignInFormError,
} from "./pigGameModals.sagaUtils";

function* onEmailSignInStart() {
  yield takeLatest(
    PigGameModalsActionTypes.PIGGAME_EMAIL_SIGN_IN_START,
    emailSignIn
  );
}

// function* onGoogleSignInStart() {
//   yield takeLatest(PigGameModalsActionTypes.PIGGAME_GOOGLE_SIGN_IN_START);
// }

export default function* pigGameModalsSaga() {
  yield all([call(onEmailSignInStart)]);
}

// ===================== More generator functions =====================

function* emailSignIn({ payload: { email, password } }) {
  try {
    // * Start spinner
    yield put(setIsProcessingSignInTRUE());
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(getSnapshotFromAuth, user);

    // Hide modals
    yield put(signInFormOnHide());

    // * Stop spinner
    yield put(setIsProcessingSignInFALSE());
  } catch (error) {
    yield call(checkSignInFormError, error);
    console.log("error");
    yield put(signInFailure(error.message));
    // * Stop spinner
    yield put(setIsProcessingSignInFALSE());
  }
}
