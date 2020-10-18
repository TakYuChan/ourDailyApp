import { takeLeading, takeLatest, call, put, all } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
    updateUserDetailsSuccess,
    updateUserDetailsFailure,
    updateUserAvatarSuccess,
    updateUserAvatarFailure,
    setIsUploadingAvatarTrue,
    setIsUploadingAvatarFalse
} from "./user.actions";

import {changeAuthPage} from "../AuthPage/AuthPage.actions";

import {
    setIsLoggedTrue,
    setUserAvatar,
} from "../Auth/auth.actions";

import {getAvatar} from "../Auth/auth.requests";
import {updateUserInfo} from "./user.requests";

// ================= Sagas ==================
function* onUpdateUserDetailsStart() {
    yield takeLeading(UserActionTypes.UPDATE_USER_DETAILS_START, updateUserDetailsStart);
  }
  
  function* onUpdateUserDetailsSuccess() {
    yield takeLatest(UserActionTypes.UPDATE_USER_DETAILS_SUCCESS, afterUpdateUserDetailsSuccess);
  }
  
  function* onUpdateUserAvatarStart() {
    yield takeLeading(UserActionTypes.UPDATE_USER_AVATAR_START, updateUserAvatarStart);
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

function* updateUserDetailsStart({formData, imgName}) {
    try {

      // request back end to update user details
      yield call(updateUserInfo, {formData, imgName});
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
      // 1) request back end to update user avatar
      const updatedAvatarName = yield call(updateUserInfo, formData);
      // 2) Upload user avatar in state for display
      const getAvatarResponse = yield call(getAvatar, updatedAvatarName);
      // 3) get avatar image from s3 via backend
      yield put(setUserAvatar(getAvatarResponse.data.data.image.data));
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
    yield put(changeAuthPage("logIn"));

  }