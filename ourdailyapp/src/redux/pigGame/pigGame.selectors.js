import { createSelector } from "reselect";

const selectPigGameReducer = (state) => state.pigGame;

export const selectDiceNumber = createSelector(
  [selectPigGameReducer],
  (pigGame) => pigGame.diceNumber
);

export const selectActivePlayer = createSelector(
  [selectPigGameReducer],
  (pigGame) => pigGame.activePlayer
);
