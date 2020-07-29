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

export const selectPlayer1Obj = createSelector(
  [selectPigGameReducer],
  (pigGame) => pigGame.player1
);

export const selectPlayer2Obj = createSelector(
  [selectPigGameReducer],
  (pigGame) => pigGame.player2
);

export const selectWinner = createSelector(
  [selectPigGameReducer],
  (pigGame) => pigGame.winner
);

export const selectFinalScore = createSelector(
  [selectPigGameReducer],
  (pigGame) => pigGame.finalScore
);

export const selectIsLoading = createSelector(
  [selectPigGameReducer],
  (pigGame) => pigGame.isLoading
);
