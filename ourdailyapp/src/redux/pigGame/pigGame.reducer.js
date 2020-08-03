import PigGameActionTypes from "./pigGame.types";

const INITIAL_STATE = {
  isLoading: true,
};

const pigGameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PigGameActionTypes.LOADING_FINISHED:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};

export default pigGameReducer;
