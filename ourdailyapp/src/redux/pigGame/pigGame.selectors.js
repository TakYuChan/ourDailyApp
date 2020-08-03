import { createSelector } from "reselect";

const selectPigGameReducer = (state) => state.pigGame_P;

export const selectDiceNumber = createSelector(
  [selectPigGameReducer],
  (pigGame_P) => pigGame_P.diceNumber
);

export const selectActivePlayer = createSelector(
  [selectPigGameReducer],
  (pigGame_P) => pigGame_P.activePlayer
);

export const selectPlayer1Obj = createSelector(
  [selectPigGameReducer],
  (pigGame_P) => pigGame_P.player1
);

export const selectPlayer2Obj = createSelector(
  [selectPigGameReducer],
  (pigGame_P) => pigGame_P.player2
);

export const selectWinner = createSelector(
  [selectPigGameReducer],
  (pigGame_P) => pigGame_P.winner
);

export const selectFinalScore = createSelector(
  [selectPigGameReducer],
  (pigGame_P) => pigGame_P.finalScore
);

export const selectIsLoading = createSelector(
  [selectPigGameReducer],
  (pigGame_P) => pigGame_P.isLoading
);

export const selectPlayer2UserInfo = createSelector(
  [selectPigGameReducer],
  (pigGame_P) => pigGame_P.player2UserInfo
);

export const selectStrikes = createSelector(
  [selectPigGameReducer],
  (pigGame_P) => pigGame_P.strikes
);
