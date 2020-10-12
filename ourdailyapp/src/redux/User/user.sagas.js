import { takeLatest, call, put, all } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
    updateUserDetailsSuccess,
    updateUserDetailsFailure,
    updateUserAvatarSuccess,
    updateUserAvatarFailure,
    setIsUploadingAvatarTrue,
    setIsUploadingAvatarFalse
} from "./user.actions";

import {
    setIsLoggedTrue,
} from "../Auth/auth.actions";

import {updateUserInfo} from "./user.requests";

// ================= Sagas ==================
function* onUpdateUserDetailsStart() {
    yield takeLatest(UserActionTypes.UPDATE_USER_DETAILS_START, updateUserDetailsStart);
  }
  
  function* onUpdateUserDetailsSuccess() {
    yield takeLatest(UserActionTypes.UPDATE_USER_DETAILS_SUCCESS, afterUpdateUserDetailsSuccess);
  }
  
  function* onUpdateUserAvatarStart() {
    yield takeLatest(UserActionTypes.UPDATE_USER_AVATAR_START, updateUserAvatarStart);
  }
  
  function* onUpdateUserAvatarSuccess() {
    yield takeLatest(UserActionTypes.UPDATE_USER_AVATAR_SUCCESS, afterUpdateUserAvatarSuccess);
  }

  export default function* userSaga() {
    yield all([
      call(onUpdateUserDetailsStart),
      call(onUpdateUserDetailsSuccess),
      call(onUpdateUserAvatarStart),
      call(onUpdateUserAvatarSuccess),
    ]);
  }

  // =========== Update User Details ===========

function* updateUserDetailsStart({formData}) {
    try {
      // request back end to update user details
      yield call(updateUserInfo, formData);
      yield put(updateUserDetailsSuccess());
    } catch (error) {
      yield put(updateUserDetailsFailure());
    }
  }
  function* afterUpdateUserDetailsSuccess() {
  }
  
  function* updateUserAvatarStart({formData}) {
    try {
      // Loading -> true
      yield put(setIsUploadingAvatarTrue());
      // request back end to update user avatar
      yield call(updateUserInfo, formData);
      yield put(updateUserAvatarSuccess());

    } catch (error) {
        
        // Loading -> false
        yield put(setIsUploadingAvatarFalse());
        yield put(updateUserAvatarFailure());
    }
  }
  
  function* afterUpdateUserAvatarSuccess() {
    // Loading -> false
    yield put(setIsUploadingAvatarFalse());
    yield put(setIsLoggedTrue());
  }