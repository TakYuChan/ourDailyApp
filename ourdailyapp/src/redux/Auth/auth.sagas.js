import { takeLatest, call, put, all } from "redux-saga/effects";

import AuthActionTypes from "./auth.types";
import {
  // signOutSuccess,
  // signOutFailure,
  // signInSuccess,
  // signInFailure,
  signUpFailure,
  signUpSuccess,
  clearSignUpAlert,
} from "./auth.actions";

import {
  clearClickedAlertSvg,
  setIsSigningUpTRUE,
  setIsSigningUpFALSE,
} from "../signUpForm/signUpform.actions";

import globalErrHandler from "../../utils/globalErrHandler";

import { signUpUser, checkAuthInfoFromDB } from "./auth.requests";

// ================= Sagas ==================
function* onGoogleAuthorizationSuccess() {
  yield takeLatest(
    AuthActionTypes.GOOGLE_AUTHORIZATION_SUCCESS,
    signInWithGoogle
  );
}

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
    call(onGoogleAuthorizationSuccess),
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

function* signOut() {}

function* signUp({ signUpDetails }) {
  try {
    // Start spinner
    yield put(setIsSigningUpTRUE());

    yield call(signUpUser, signUpDetails);
    yield put(signUpSuccess());

    // Stop spinner
    yield put(setIsSigningUpFALSE());
  } catch (error) {
    yield put(signUpFailure(error, "signUpAlert"));
    // Stop spinner
    yield put(setIsSigningUpFALSE());
  }
}

function* signInWithGoogle({ authorizeServerRes }) {
  try {
    // Start spinner

    yield call(
      checkAuthInfoFromDB,
      authorizeServerRes,
      `http://localhost:5000/api/v1/users/googlelogin`
    );

    // Stop spinner
  } catch (error) {
    // Stop spinner
  }
}

function* signUpFailHandler({ error, targetComponent }) {
  yield globalErrHandler(error, targetComponent);
}

function* afterSignUp() {
  try {
    yield put(clearSignUpAlert());
    yield put(clearClickedAlertSvg());
  } catch (error) {}
}
