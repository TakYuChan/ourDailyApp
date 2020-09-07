import { takeLatest, call, put, all } from "redux-saga/effects";

import AuthActionTypes from "./auth.types";
import {
  signOutSuccess,
  signOutFailure,
  signInSuccess,
  signInFailure,
  signUpFailure,
  signUpSuccess,
} from "./auth.actions";

import globalErrHandler from "../../utils/globalErrHandler";

import axios from "axios";





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
  yield takeLatest(AuthActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
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

// function* signInWithGoogle() {
//   try {
//     // * Start spinner
//     yield put(setIsProcessingSignInTRUE());

//     const { user } = yield call([auth, auth.signInWithPopup], googleProvider);
//     yield call(getSnapshotFromAuth, user);

//     // Hide Modals
//     yield put(signInUpOnHide());

//     // * Stop spinner
//     yield put(setIsProcessingSignInFALSE());
//   } catch (error) {
//     yield put(signInFailure(error));

//     // * Stop spinner
//     yield put(setIsProcessingSignInFALSE());
//   }
// }

// function* signInWithEmail({ payload: { name, email, password, passwordConfirm, gender, birthday} }) {
//   try {
//     // const { user } = yield call(() =>
//     //   auth.signInWithEmailAndPassword(email, password)
//     // );
//     // const { user } = yield call(
//     //   [auth, auth.createUserWithEmailAndPassword],
//     //   email,
//     //   password
//     // );
//     axios.get("http://localhost:5000/api/v1/users/signup", {}).then((response) => {
//       console.log(response);
//     })

//   } catch (error) {
//     yield put(signInFailure(error));
//   }
// }

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
// { payload: { name, email, password, passwordConfirm, gender, birthday} }

function* signUp({signUpDetails}) {
  try {
    yield axios.post(`${process.env.REACT_APP_URL}/users/signup`, {
      ...signUpDetails
    }).then((response) => {
      console.log(response);
    })
  } catch (error) {
   yield put(signUpFailure(error, "signUpForm"));
  }
}

function* signUpFailHandler({error, targetComponent}) {
  console.log("SignUpFailHandler called");
  globalErrHandler(error, targetComponent);
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {

}
