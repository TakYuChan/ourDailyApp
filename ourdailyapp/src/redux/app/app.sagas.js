import { takeLatest, call, put, all } from "redux-saga/effects";

import AppActionTypes from "./app.types";
import {
  fetchAccessAppBtnsSuccess,
  fetchApplicationsFailure,
  fetchApplicationsSuccess,
} from "./app.actions";
import {
  convertApplicationsArrayToMap,
  transformAccessAppBtnsArray,
} from "../../firebase/firestore/convertData";

import { firestore } from "../../firebase/firebase.utils";

// ================= Sagas ==================
function* onFetchAccessAppBtnsStart() {
  yield takeLatest(
    AppActionTypes.FETCH_ACCESS_APP_BTN_START,
    fetchAccessAppBtns
  );
}

function* onFetchApplicationsStart() {
  yield takeLatest(AppActionTypes.FETCH_APPLICATIONS_START, fetchApplications);
}

export default function* appSaga() {
  yield all([call(onFetchAccessAppBtnsStart), call(onFetchApplicationsStart)]);
}

// ================= other generator functions ==================

function* fetchAccessAppBtns() {
  try {
    const collectionRef = firestore.collection("appLogoItems");
    const snapshot = yield collectionRef.get();
    const accessAppBtnsArray = yield call(
      transformAccessAppBtnsArray,
      snapshot
    );
    yield put(fetchAccessAppBtnsSuccess(accessAppBtnsArray));
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
