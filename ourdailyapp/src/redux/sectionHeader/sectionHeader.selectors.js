import { createSelector } from "reselect";

const selectSectionHeader = (state) => state.sectionHeader;

export const selectPage = createSelector(
  [selectSectionHeader],
  (sectionHeader) => sectionHeader.page
);

export const selectDetails = createSelector(
  [selectSectionHeader],
  (sectionHeader) => sectionHeader.details
);
