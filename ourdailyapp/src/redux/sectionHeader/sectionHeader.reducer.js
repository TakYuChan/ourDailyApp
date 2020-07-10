import SectionHeaderActionTypes from "./sectionHeader.types";
import { updateStates } from "./sectionHeader.utils";

const INITIAL_STATE = {
  page: "preloader",
  details: {},
};

const sectionHeaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SectionHeaderActionTypes.UPDATE_SECTION_HEADER:
      return updateStates(state, action.payload);
    default:
      return state;
  }
};

export default sectionHeaderReducer;
