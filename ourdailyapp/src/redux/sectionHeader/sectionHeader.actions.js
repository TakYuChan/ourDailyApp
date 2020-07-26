import SectionHeaderActionTypes from "./sectionHeader.types";
export const updateSectionHeader = (sectionHeaderDetails) => ({
  type: SectionHeaderActionTypes.UPDATE_SECTION_HEADER,
  payload: sectionHeaderDetails,
});
