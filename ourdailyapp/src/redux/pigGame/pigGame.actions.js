import PigGameActionTypes from "./pigGame.types";

export const changeDiceNumber = (newDiceNum) => ({
  type: PigGameActionTypes.CHANGE_DICE_NUM,
  payload: newDiceNum,
});

export const switchActivePlayer = () => ({
  type: PigGameActionTypes.SWITCH_ACTIVE_PLAYER,
});

// Game Score Calculation

export const playerAddTotalScore = (num) => ({
  type: PigGameActionTypes.PLAYER_ADD_TOTAL_SCORE,
  // this logic will be handled in utils within reducer
  payload: num,
});
export const playerClearTotalScore = () => ({
  type: PigGameActionTypes.PLAYER_CLEAR_TOTAL_SCORE,
  // this logic will be handled in utils within reducer
});

export const playerAddCurrentScore = (num) => ({
  type: PigGameActionTypes.PLAYER_ADD_CURRENT_SCORE,
  // this logic will be handled in utils within reducer
  payload: num,
});
export const playerClearCurrentScore = () => ({
  type: PigGameActionTypes.PLAYER_CLEAR_CURRENT_SCORE,
  // this logic will be handled in utils within reducer
});

export const changeWinner = () => ({
  type: PigGameActionTypes.CHANGE_WINNER,
});

export const startNewGame = () => ({
  type: PigGameActionTypes.START_NEW_GAME,
});

// ========= Thunk action flow =========
export const rollDice = () => {
  return (dispatch, getState) => {
    if (getState().pigGame.winner === "none") {
      console.log("rolling dice...");
      const newDiceNum = Math.floor(Math.random() * 6) + 1;
      dispatch(changeDiceNumber(newDiceNum));

      // Game Rules applied
      // 1. IF dice === 6 -> STOP following action
      if (newDiceNum === 6) {
        dispatch(playerClearTotalScore());
        dispatch(playerClearCurrentScore());
        dispatch(switchActivePlayer());
        return;
      }

      // 2. IF dice is not 6 -> START applying game logic
      dispatch(playerAddCurrentScore(newDiceNum));
    }
  };
};

export const holdDice = (oldCurrentScore) => {
  return (dispatch, getState) => {
    if (getState().pigGame.winner === "none") {
      console.log("Player held dice!");

      dispatch(playerAddTotalScore(parseInt(oldCurrentScore, 10)));
      dispatch(playerClearCurrentScore());

      // Check if someone has won
      dispatch(changeWinner());
      dispatch(switchActivePlayer());
    }
  };
};
