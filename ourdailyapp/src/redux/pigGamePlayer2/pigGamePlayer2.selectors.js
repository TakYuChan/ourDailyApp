import { createSelector } from "reselect";

const selectPigGamePlayer2Reducer = (state) => state.pigGamePlayer2_P;

export const selectPlayer2DisplayName = createSelector(
  [selectPigGamePlayer2Reducer],
  (pigGamePlayer2_P_Reducer) => pigGamePlayer2_P_Reducer.displayName
);

export const selectPlayer2PhotoURL = createSelector(
  [selectPigGamePlayer2Reducer],
  (pigGamePlayer2_P_Reducer) => pigGamePlayer2_P_Reducer.photoURL
);

export const selectIsLogged = createSelector(
  [selectPigGamePlayer2Reducer],
  (pigGamePlayer2_P_Reducer) => pigGamePlayer2_P_Reducer.isLogged
);
