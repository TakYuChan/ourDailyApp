import { takeLatest, call, put, all } from "redux-saga/effects";

import AuthActionTypes from "./auth.types";
import {
  signInFailure,
  signInSuccess,
  signUpFailure,
  signUpSuccess,
  clearSignUpAlert,
  clearLogInAlert,
  setIsLoggedTrue,
  setUserDetails,
  updateUserDetailsSuccess,
  updateUserDetailsFailure,
} from "./auth.actions";

import { changeAuthPage } from "../AuthPage/AuthPage.actions";

import {
  setIsSigningUpTRUE,
  setIsSigningUpFALSE,
} from "../signUpForm/signUpform.actions";

import globalErrHandler from "../../utils/globalErrHandler";

import { signUpUser, checkAuthInfoFromDB, logInUser, updateUserInfo } from "./auth.requests";

// ================= Sagas ==================
function* onGoogleAuthorizationSuccess() {
  yield takeLatest(
    AuthActionTypes.GOOGLE_AUTHORIZATION_SUCCESS,
    signInWithGoogle
  );
}

function* onEmailSignInStart() {
  yield takeLatest(AuthActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onUpdateUserDetailsStart() {
  yield takeLatest(AuthActionTypes.UPDATE_USER_DETAILS_START, updateUserDetailsStart);
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

function* onLogInFailure() {
  yield takeLatest(AuthActionTypes.SIGN_IN_FAILURE, signInFailHandler);
}

function* onLogInSuccess() {
  yield takeLatest(AuthActionTypes.SIGN_IN_SUCCESS, afterSignIn);
}

export default function* authSaga() {
  yield all([
    call(onGoogleAuthorizationSuccess),
    call(onEmailSignInStart),
    call(onUpdateUserDetailsStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignUpFailure),
    call(onLogInFailure),
    call(onLogInSuccess),
  ]);
}

// ================= other generator functions ==================

function* signUp({ signUpDetails }) {
  try {
    // Start spinner
    yield put(setIsSigningUpTRUE());

    yield call(signUpUser, signUpDetails);
    yield put(signUpSuccess(signUpDetails.email, signUpDetails.password));

    // Stop spinner
    yield put(setIsSigningUpFALSE());
  } catch (error) {
    yield put(signUpFailure(error, "signUpAlert"));
    // Stop spinner
    yield put(setIsSigningUpFALSE());
  }
}

function* signInWithEmail({ logInDetails }) {
  try {
    // Start spinner
    const response = yield call(logInUser, logInDetails);
    yield put(setUserDetails(response.data.data.user));
    yield put(signInSuccess());
    // Stop spinner
  } catch (error) {
    yield put(signInFailure(error, "logInAlert"));
    // Stop spinner
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

function* signInFailHandler({ error, targetComponent }) {
  yield globalErrHandler(error, targetComponent);
}

function* afterSignUp() {
  try {
    yield put(clearSignUpAlert());
    yield put(changeAuthPage("uploadAvatar"));
  } catch (error) {}
}

function* afterSignIn() {
  try {
    yield put(clearLogInAlert());
    yield put(setIsLoggedTrue());

    // yield put(clearClickedAlertSvg());
  } catch (error) {}
}


// =========== Update User Details ===========

function* updateUserDetailsStart({userDetails}) {
  try {
    // request back end to update user details
    yield call(updateUserInfo,userDetails);
    console.log("update user")
    yield put(updateUserDetailsSuccess());
  } catch (error) {
    yield put(updateUserDetailsFailure());
  }
}
