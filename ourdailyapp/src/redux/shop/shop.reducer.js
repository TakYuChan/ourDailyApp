// import SHOP_DATA from "./shop.data.jsx";
import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  applications: null,
  // isFetching: true,
  errorMsg: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case ShopActionTypes.FETCH_APPLICATIONS_START:
    //   return {
    //     ...state,
    //     // isFetching: true,
    //   };
    case ShopActionTypes.FETCH_APPLICATIONS_SUCCESS:
      return {
        ...state,
        // isFetching: false,
        applications: action.payload,
      };
    case ShopActionTypes.FETCH_APPLICATIONS_FAILURE:
      return {
        ...state,
        // isFetching: false,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
