import { takeLatest, call, put, all } from "redux-saga/effects";

import AppActionTypes from "./app.types";
import {
  fetchAppLogoItemsSuccess,
  fetchApplicationsFailure,
  fetchApplicationsSuccess,
} from "./app.actions";
import {
  convertApplicationsArrayToMap,
  transformAppLogoItemsArray,
} from "../../firebase/firestore/convertData";

import { firestore } from "../../firebase/firebase.utils";

// ================= Sagas ==================
function* onFetchAppLogoItemsStart() {
  yield takeLatest(AppActionTypes.FETCH_APPLOGO_ITEM_START, fetchAppLogoItems);
}

function* onFetchApplicationsStart() {
  yield takeLatest(AppActionTypes.FETCH_APPLICATIONS_START, fetchApplications);
}

export default function* appSaga() {
  yield all([call(onFetchAppLogoItemsStart), call(onFetchApplicationsStart)]);
}

// ================= other generator functions ==================

function* fetchAppLogoItems() {
  try {
    const collectionRef = firestore.collection("appLogoItems");
    const snapshot = yield collectionRef.get();
    const appLogoItemsArray = yield call(transformAppLogoItemsArray, snapshot);
    yield put(fetchAppLogoItemsSuccess(appLogoItemsArray));
  } catch (error) {
    yield put(fetchApplicationsFailure(error));
  }
}

function* fetchApplications() {
  try {
    const collectionRef = firestore.collection("applications");
    const snapshot = yield collectionRef.get();
    const applicationsMap = convertApplicationsArrayToMap(snapshot);
    yield put(fetchApplicationsSuccess(applicationsMap));
  } catch (error) {
    yield put(fetchApplicationsFailure(error));
  }
}
