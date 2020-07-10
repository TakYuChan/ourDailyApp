// import SHOP_DATA from "./shop.data.jsx";
import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  applications: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_APPLICATIONS:
      return {
        ...state,
        applications: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
