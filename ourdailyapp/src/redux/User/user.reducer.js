import UserActionTypes from "./user.types";


const INITIATE_STATE = {
    isUploadingAvatar: false,
};

const UserReducer = (state = INITIATE_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.IS_UPLOADING_AVATAR_TRUE:
        return {
            ...state,
            isUploadingAvatar: true,
        }
    case UserActionTypes.IS_UPLOADING_AVATAR_FALSE:
        return {
            ...state,
            isUploadingAvatar: false,
        }
    default:
      return state;
  }
};

export default UserReducer;
