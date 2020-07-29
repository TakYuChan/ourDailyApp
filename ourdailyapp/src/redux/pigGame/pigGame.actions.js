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

export const checkWinner = () => ({
  type: PigGameActionTypes.CHECK_WINNER,
});

export const startNewGame = () => ({
  type: PigGameActionTypes.START_NEW_GAME,
});

export const changeFinalScore = (newFinalScore) => ({
  type: PigGameActionTypes.CHANGE_FINAL_SCORE,
  payload: newFinalScore,
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

export const holdDice = () => {
  return (dispatch, getState) => {
    if (getState().pigGame.winner === "none") {
      console.log("Player held dice!");
      const pigGameReducer = getState().pigGame;
      const activePlayer = pigGameReducer.activePlayer;

      console.log(
        "TOTAL SCORE: ",
        pigGameReducer[`player${activePlayer}`].currentScore
      );

      dispatch(
        playerAddTotalScore(
          pigGameReducer[`player${activePlayer}`].currentScore
        )
      );
      dispatch(playerClearCurrentScore());

      // Check if someone has won
      dispatch(checkWinner());

      if (getState().pigGame.winner === "none") {
        dispatch(switchActivePlayer());
      }
    }
  };
};
