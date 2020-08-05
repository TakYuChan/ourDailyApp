import { takeLatest, call, put, all } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import { signInSuccess, signInFailure } from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";
// ================= Sagas ==================
function* onGoogleSignIn() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN, signInWithGoogle);
}

export default function* userSaga() {
  yield all([call(onGoogleSignIn)]);
}

// ================= other generator functions ==================

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}
