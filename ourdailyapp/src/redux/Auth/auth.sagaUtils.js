import {
  setEmailNotRegisteredTRUE,
  setPasswordIncorrectTRUE,
  setPasswordIncorrectFALSE,
  setEmailNotRegisteredFALSE,
  setEmailAlreadyInUserTRUE,
  setEmailAlreadyInUserFALSE,
} from "../signInUp/signInUp.actions";

import { signInSuccess, signInFailure } from "./user.actions";

import { createUserProfileDocument } from "../../firebase/firebase.utils";

import { put, call } from "redux-saga/effects";

export function* checkSignInFormError(error) {
  error.code === "auth/user-not-found"
    ? yield put(setEmailNotRegisteredTRUE())
    : yield put(setEmailNotRegisteredFALSE());
  error.code === "auth/wrong-password"
    ? yield put(setPasswordIncorrectTRUE())
    : yield put(setPasswordIncorrectFALSE());
  return;
}

export function* getSnapshotFromAuth(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* checkSignUpFormError(error) {
  error.code === "auth/email-already-in-use"
    ? yield put(setEmailAlreadyInUserTRUE())
    : yield put(setEmailAlreadyInUserFALSE());
  return;
}
