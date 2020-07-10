import SectionHeaderActionTypes from "./sectionHeader.types";
export const updatePage = (pageDetails) => ({
  type: SectionHeaderActionTypes.UPDATE_SECTION_HEADER,
  payload: pageDetails,
});
