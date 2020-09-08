import {
  takeLatest,
  call,
  put,
  all
} from "redux-saga/effects";

import AuthActionTypes from "./auth.types";
import {
  signOutSuccess,
  signOutFailure,
  signInSuccess,
  signInFailure,
  signUpFailure,
  signUpSuccess,
  clearSignUpAlert,
} from "./auth.actions";

import {
  clearClickedAlertSvg
} from "../signUpForm/signUpform.actions";

import globalErrHandler from "../../utils/globalErrHandler";

import {
  signUpUser
} from "./auth.requests";





// ================= Sagas ==================
// function* onGoogleSignInStart() {
//   yield takeLatest(AuthActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
// }

// function* onEmailSignInStart() {
//   yield takeLatest(AuthActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
// }
function* onCheckAuthSession() {
  yield takeLatest(AuthActionTypes.CHECK_AUTH_SESSION, isUserAuthenticated);
}

function* onSignOutStart() {
  yield takeLatest(AuthActionTypes.SIGN_OUT_START, signOut);
}

function* onSignUpStart() {
  yield takeLatest(AuthActionTypes.SIGN_UP_START, signUp);
}

function* onSignUpSuccess() {
  yield takeLatest(AuthActionTypes.SIGN_UP_SUCCESS, afterSignUp);
}

function* onSignUpFailure() {
  yield takeLatest(AuthActionTypes.SIGN_UP_FAILURE, signUpFailHandler);
}

export default function* authSaga() {
  yield all([
    // call(onGoogleSignInStart),
    // call(onEmailSignInStart),
    call(onCheckAuthSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignUpFailure),
  ]);
}

// ================= other generator functions ==================


function* isUserAuthenticated() {
  // try {
  //   const userAuth = yield call(getCurrentUser);
  //   if (userAuth === null) return;
  //   const userRef = yield call(createUserProfileDocument, userAuth);
  //   const snapshot = yield userRef.get();
  //   yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  // } catch (error) {
  //   yield put(signInFailure(error));
  // }
}

function* signOut() {

}

function* signUp({
  signUpDetails
}) {
  try {
    yield call(signUpUser, signUpDetails);
    yield put(signUpSuccess());
  } catch (error) {
    yield put(signUpFailure(error, "signUpAlert"));
  }
}

function* signUpFailHandler({
  error,
  targetComponent
}) {
  yield globalErrHandler(error, targetComponent);
}

function* afterSignUp() {
  try {
    yield put(clearSignUpAlert());
    yield put(clearClickedAlertSvg());
  } catch (error) {

  }
}