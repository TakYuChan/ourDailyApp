import AppActionTypes from "./app.types";

const INITIAL_STATE = {
  applications: null,
  appLogo_items: null,
  // isFetching: true,
  errorMsg: "",
  // customAppLength: null,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case ShopActionTypes.FETCH_APPLICATIONS_START:
    //   return {
    //     ...state,
    //     // isFetching: true,
    //   };

    // ====================== App Description + content =====================
    case AppActionTypes.FETCH_APPLICATIONS_SUCCESS:
      return {
        ...state,
        // isFetching: false,
        applications: action.payload,
      };
    case AppActionTypes.FETCH_APPLICATIONS_FAILURE:
      return {
        ...state,
        // isFetching: false,
        errorMsg: action.payload,
      };

    // ====================== App Logo items =================

    case AppActionTypes.FETCH_APPLOGO_ITEM_SUCCESS:
      return {
        ...state,
        appLogo_items: action.payload,
      };
    case AppActionTypes.FETCH_APPLOGO_ITEM_FAILURE:
      return {
        ...state,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
