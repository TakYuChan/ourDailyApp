import { takeLeading, takeLatest, call, put, all } from "redux-saga/effects";

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
  setUserAvatar,
  signOutSuccess,
  signOutFailure,
  signOut,
} from "./auth.actions";

import { changeAuthPage } from "../AuthPage/AuthPage.actions";

import {
  setIsSigningUpTRUE,
  setIsSigningUpFALSE,
} from "../signUpForm/signUpform.actions";

import {setIsLoggingInTRUE, setIsLoggingInFALSE} from "../logInForm/logInForm.actions";

import globalErrHandler from "../../utils/globalErrHandler";

import { signUpUser, checkAuthInfoFromDB, logInUser, getAvatar, signOutAndCleanCookie } from "./auth.requests";

// ================= Sagas ==================
function* onGoogleAuthorizationSuccess() {
  yield takeLatest(
    AuthActionTypes.GOOGLE_AUTHORIZATION_SUCCESS,
    signInWithGoogle
  );
}

function* onEmailSignInStart() {
  yield takeLeading(AuthActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}


function* onSignUpStart() {
  yield takeLeading(AuthActionTypes.SIGN_UP_START, signUp);
}

function* onSignUpSuccess() {
  yield takeLeading(AuthActionTypes.SIGN_UP_SUCCESS, afterSignUp);
}

function* onSignUpFailure() {
  yield takeLeading(AuthActionTypes.SIGN_UP_FAILURE, signUpFailHandler);
}

function* onLogInFailure() {
  yield takeLatest(AuthActionTypes.SIGN_IN_FAILURE, signInFailHandler);
}

function* onLogInSuccess() {
  yield takeLatest(AuthActionTypes.SIGN_IN_SUCCESS, afterSignIn);
}

function* onSignOutStart() {
  yield takeLeading(AuthActionTypes.SIGN_OUT_START, signOutStart);
}

export default function* authSaga() {
  yield all([
    call(onGoogleAuthorizationSuccess),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignUpFailure),
    call(onLogInFailure),
    call(onLogInSuccess),
    call(onSignOutStart),
  ]);
}

// ================= other generator functions ==================

function* signUp({ signUpDetails }) {
  try {
    // Start spinner
    yield put(setIsSigningUpTRUE());

    // 1) Sign up user and set user details
    const response = yield call(signUpUser, signUpDetails);
    yield put(setUserDetails(response.data.data.user));

    // 2) Get default avatar for new user
    const getAvatarResponse = yield call(getAvatar, "default.jpeg");
    // get avatar image from s3 via backend
    yield put(setUserAvatar(getAvatarResponse.data.data.image.data));

    yield put(signUpSuccess(signUpDetails.email, signUpDetails.password));

    // Stop spinner
    yield put(setIsSigningUpFALSE());

    yield put(clearSignUpAlert());
    yield put(changeAuthPage("uploadAvatar"));
  } catch (error) {
    yield put(signUpFailure(error, "signUpAlert"));
    // Stop spinner
    yield put(setIsSigningUpFALSE());
  }
}

function* signInWithEmail({ logInDetails }) {
  try {
    // Start spinner
    yield put(setIsLoggingInTRUE());
    
    // 1) Log in user
    const response = yield call(logInUser, logInDetails);
    yield put(setUserDetails(response.data.data.user));
    // 2) Get avatar from backend and aws
    const getAvatarResponse = yield call(getAvatar, response.data.data.user.photo);
    // get avatar image from s3 via backend
    yield put(setUserAvatar(getAvatarResponse.data.data.image.data));
    yield put(signInSuccess());
    // Stop spinner
    yield put(setIsLoggingInFALSE());
  } catch (error) {
    yield put(signInFailure(error, "logInAlert"));
    // Stop spinner
    yield put(setIsLoggingInFALSE());
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
    // yield put(clearSignUpAlert());
    // yield put(changeAuthPage("uploadAvatar"));
  } catch (error) {}
}

function* afterSignIn() {
  try {
    yield put(clearLogInAlert());
    yield put(setIsLoggedTrue());

    // yield put(clearClickedAlertSvg());
  } catch (error) {}
}

function* signOutStart() {
  try {
    // 1) clean up user from react state
    yield put(signOut());

    // 2) Clean up cookie via backend
    yield call(signOutAndCleanCookie);

    yield put(signUpSuccess());
  } catch (error) {
    yield put(signUpFailure());
  }
}



