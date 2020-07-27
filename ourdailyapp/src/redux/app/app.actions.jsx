import AppActionTypes from "./app.types";
import { firestore } from "../../firebase/firebase.utils";
import {
  convertApplicationsArrayToMap,
  transformAppLogoItemsArray,
} from "../../firebase/firestore/convertData";

// export const fetchApplicationsStart = () => ({
//   type: ShopActionTypes.FETCH_APPLICATIONS_START,
// });
// ====================== App Description + content =====================
export const fetchApplicationsSuccess = (applicationsMap) => ({
  type: AppActionTypes.FETCH_APPLICATIONS_SUCCESS,
  payload: applicationsMap,
});

export const fetchApplicationsFailure = (errorMsg) => ({
  type: AppActionTypes.FETCH_APPLICATIONS_FAILURE,
  payload: errorMsg,
});

// ====================== App Logo items =================

export const fetchAppLogoItemsSuccess = (appLogoItems) => ({
  type: AppActionTypes.FETCH_APPLOGO_ITEM_SUCCESS,
  payload: appLogoItems,
});

export const fetchAppLogoItemsFailure = (errorMsg) => ({
  type: AppActionTypes.FETCH_APPLOGO_ITEM_FAILURE,
  payload: errorMsg,
});

// ------------------- Fetching Thunk action -------------------
export const fetchApplicationsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("applications");
    // dispatch(fetchApplicationsStart());

    setTimeout(() => {
      collectionRef
        .get()
        .then((snapshot) => {
          const applicationsMap = convertApplicationsArrayToMap(snapshot);
          dispatch(fetchApplicationsSuccess(applicationsMap));
        })
        .catch((error) => dispatch(fetchApplicationsFailure(error.msg)));
    }, 1000);
  };
};

export const fetchAppLogoItemsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("appLogoItems");

    // setTimeout(() => {
    collectionRef
      .get()
      .then((snapshot) => {
        const appLogoItemsArray = transformAppLogoItemsArray(snapshot);
        console.log(appLogoItemsArray);
        dispatch(fetchAppLogoItemsSuccess(appLogoItemsArray));
      })
      .catch((error) => dispatch(fetchAppLogoItemsFailure(error.msg)));
    // }, 0);
  };
};
