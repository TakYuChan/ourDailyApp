import {  call, put } from "redux-saga/effects";

import {updateUserInfo} from "./user.requests";
import {getAvatar} from "../Auth/auth.requests";
import {
    setUserAvatar,
} from "../Auth/auth.actions";

export function* requestAndUpdateAvatar(formData) {
    
      // 1) request back end to update user avatar
      const updatedUser = yield call(updateUserInfo, formData);
      console.log({updatedUser})
      // 2) Upload user avatar in state for display
      const getAvatarResponse = yield call(getAvatar, updatedUser.photo);
      // 3) get avatar image from s3 via backend
      yield put(setUserAvatar(getAvatarResponse.data.data.image.data));

      return updatedUser;
}