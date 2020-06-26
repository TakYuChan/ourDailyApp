import ShopNavTypes from "./shopNav.types";

const INITIAL_STATE = {
  hidden: true,
};

const shopNavReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopNavTypes.TOGGLE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default shopNavReducer;
