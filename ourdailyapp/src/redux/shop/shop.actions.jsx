import ShopActionTypes from "./shop.types";
import { firestore } from "../../firebase/firebase.utils";
import { convertApplicationsArrayToMap } from "../../firebase/firestore/convertData";

// export const fetchApplicationsStart = () => ({
//   type: ShopActionTypes.FETCH_APPLICATIONS_START,
// });

export const fetchApplicationsSuccess = (applicationsMap) => ({
  type: ShopActionTypes.FETCH_APPLICATIONS_SUCCESS,
  payload: applicationsMap,
});

export const fetchApplicationsFailure = (errorMsg) => ({
  type: ShopActionTypes.FETCH_APPLICATIONS_FAILURE,
  payload: errorMsg,
});

// ========================== Fetching Thunk action ==========================
export const fetchApplicationsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("applications").get();
    // dispatch(fetchApplicationsStart());

    collectionRef
      .then((snapshot) => {
        console.log("here");
        const applicationsMap = convertApplicationsArrayToMap(snapshot);
        dispatch(fetchApplicationsSuccess(applicationsMap));
        console.log("there");
      })
      .catch((error) => dispatch(fetchApplicationsFailure(error.msg)));
  };
};
