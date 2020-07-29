import PigGameActionTypes from "./pigGame.types";
import { saveGameState } from "../../firebase/firestore/setData";

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

export const changePrevScores = (score) => ({
  type: PigGameActionTypes.CHANGE_PREV_SCORES,
  payload: score,
});

export const loadGameState = (gameState) => ({
  type: PigGameActionTypes.LOAD_GAME_STATE,
  payload: gameState,
});

export const loadingIsFinished = () => ({
  type: PigGameActionTypes.LOADING_FINISHED,
});

// ========= Thunk action flow =========
export const rollDice = () => {
  return (dispatch, getState) => {
    if (getState().pigGame.winner === "none") {
      console.log("rolling dice...");
      const newDiceNum = Math.floor(Math.random() * 6) + 1;
      const pigGameReducer = getState().pigGame;
      const activePlayer = pigGameReducer.activePlayer;

      dispatch(changeDiceNumber(newDiceNum));
      // Save the number
      dispatch(changePrevScores(newDiceNum));

      // Game Rules applied
      // 1. IF dice === 6 -> STOP following action
      // if (newDiceNum === 6) {
      //   dispatch(playerClearTotalScore());
      //   dispatch(playerClearCurrentScore());
      //   dispatch(switchActivePlayer());
      //   return;
      // }

      // 2. IF prev dice + current dice === 8 -> STOP
      const prev_scores = pigGameReducer.prev_scores;
      if (newDiceNum + prev_scores[activePlayer - 1] === 8) {
        dispatch(playerClearTotalScore());
        dispatch(playerClearCurrentScore());
        dispatch(switchActivePlayer());
      }
      // 3. IF prev dice + current dice !== 8 START applying game logic
      dispatch(playerAddCurrentScore(newDiceNum));

      // 4. Save Data to firestore
      const pigGameStateObj = getState().pigGame;
      saveGameState(pigGameStateObj);
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
        // Save Data to firestore
        const pigGameStateObj = getState().pigGame;
        saveGameState(pigGameStateObj);
      }

      // Save Data to firestore
      const pigGameStateObj = getState().pigGame;
      saveGameState(pigGameStateObj);
    }
  };
};
