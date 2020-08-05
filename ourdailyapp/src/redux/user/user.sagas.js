import { takeLatest, call, put, all } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import {
  signOutSuccess,
  signOutFailure,
  signInSuccess,
  signInFailure,
  signUpFailure,
} from "./user.actions";
import {
  setIsProcessingSignInTRUE,
  setIsProcessingSignInFALSE,
  setIsProcessingSignUpTRUE,
  setIsProcessingSignUpFALSE,
  signInUpOnHide,
  updateSignUpError,
  setRenderForRegisterSuccess,
} from "../signInUp/signInUp.actions";

import {
  checkSignInFormError,
  getSnapshotFromAuth,
  checkSignUpFormError,
} from "./user.sagaUtils";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import { signUpFormErrorCheck } from "../../utils/errorCheckUtils";
// ================= Sagas ==================
function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onCheckAuthSession() {
  yield takeLatest(UserActionTypes.CHECK_AUTH_SESSION, isUserAuthenticated);
}

function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export default function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckAuthSession),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}

// ================= other generator functions ==================

function* signInWithGoogle() {
  try {
    // * Start spinner
    yield put(setIsProcessingSignInTRUE());

    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(getSnapshotFromAuth, user);

    // Hide Modals
    yield put(signInUpOnHide());

    // * Stop spinner
    yield put(setIsProcessingSignInFALSE());
  } catch (error) {
    yield put(signInFailure(error));

    // * Stop spinner
    yield put(setIsProcessingSignInFALSE());
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    // * Start spinner
    yield put(setIsProcessingSignInTRUE());

    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(getSnapshotFromAuth, user);

    // Hide Modals
    yield put(signInUpOnHide());

    // * Stop spinner
    yield put(setIsProcessingSignInFALSE());
  } catch (error) {
    yield call(checkSignInFormError, error);
    // * Stop spinner
    yield put(setIsProcessingSignInFALSE());
    yield put(signInFailure(error));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (userAuth === null) return;
    const userRef = yield call(createUserProfileDocument, userAuth);
    const snapshot = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* signUp({
  payload: { displayName, email, password, confirmPassword },
}) {
  try {
    // * Start Spinner
    yield put(setIsProcessingSignUpTRUE());
    // 1. Customized error checking
    const errorObj = yield call(
      signUpFormErrorCheck,
      displayName,
      email,
      password,
      confirmPassword
    );
    // 2. Update sign up error obj
    yield put(updateSignUpError(errorObj));

    // 3. if NO error is detected, start creating new user in firebase.
    if (Object.keys(errorObj).length === 0) {
      // Create user account
      console.log("errorObj is CLEAN");
      const { user } = yield auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // Create User profile in firestore
      yield call(createUserProfileDocument, user, { displayName, password });

      // Redirect to "registerSuccessScene"
      yield put(setRenderForRegisterSuccess());
    }

    // * Stop Spinner
    yield put(setIsProcessingSignUpFALSE());
  } catch (error) {
    yield call(checkSignUpFormError, error);
    // * Stop Spinner
    yield put(setIsProcessingSignUpFALSE());
    yield put(signUpFailure(error));
  }
}
