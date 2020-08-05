import { signInSuccess, signInFailure } from "../pigGame/pigGame.actions";
import {
  setEmailNotRegisteredTRUE,
  setEmailNotRegisteredFALSE,
  setPasswordIncorrectTRUE,
  setPasswordIncorrectFALSE,
} from "./pigGameModals.actions";

import { put, call } from "redux-saga/effects";

import { createUserProfileDocument } from "../../firebase/firebase.utils";

export function* checkSignInFormError(error) {
  error.code === "auth/user-not-found"
    ? yield put(setEmailNotRegisteredTRUE())
    : yield put(setEmailNotRegisteredFALSE());
  error.code === "auth/wrong-password"
    ? yield put(setPasswordIncorrectTRUE())
    : yield put(setPasswordIncorrectFALSE());
  return;
}

export function* getSnapshotFromAuth(user) {
  try {
    console.log("getting");
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}
