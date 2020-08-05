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

export const setIsLoadingToTrue = () => ({
  type: PigGameActionTypes.SET_ISLOADING_TRUE,
});

export const resetPrevScore = () => ({
  type: PigGameActionTypes.RESET_PREV_SCORE,
});

export const setPlayer2UserInfo = (userObj) => ({
  type: PigGameActionTypes.SET_PLAYER2_USER_INFO,
  payload: userObj,
});

export const player2LogOut = () => ({
  type: PigGameActionTypes.PLAYER2_USER_LOGOUT,
});

export const addStrikes = () => ({
  type: PigGameActionTypes.ADD_STRIKES,
});

export const clearStrikes = () => ({
  type: PigGameActionTypes.CLEAR_STRIKES,
});

export const signInStart = (email, password) => ({
  type: PigGameActionTypes.SIGN_IN_START,
  email,
  password,
});

export const signInFailure = (error) => ({
  type: PigGameActionTypes.SIGN_In_FAILURE,
  payload: error,
});

// ========= Thunk action flow =========
export const rollDice = () => {
  return (dispatch, getState) => {
    if (getState().pigGame_P.winner === "none") {
      console.log("rolling dice...");
      const newDiceNum = Math.floor(Math.random() * 6) + 1;
      const pigGameReducer = getState().pigGame_P;
      const activePlayer = pigGameReducer.activePlayer;

      dispatch(changeDiceNumber(newDiceNum));
      // Save the number
      dispatch(changePrevScores(newDiceNum));

      // 2. IF prev dice + current dice === 8 -> STOP
      const prev_scores = pigGameReducer.prev_scores;
      if (newDiceNum + prev_scores[activePlayer - 1] === 8) {
        dispatch(playerClearTotalScore());
        dispatch(playerClearCurrentScore());
        dispatch(switchActivePlayer());
      }
      // 3. IF prev dice + current dice !== 8 START applying game logic
      dispatch(playerAddCurrentScore(newDiceNum));

      // 4. IF prev dice and the current dice are the same === strikes++
      if (newDiceNum === prev_scores[activePlayer - 1]) {
        dispatch(addStrikes());
      } else {
        dispatch(clearStrikes());
      }

      // 5. Save Data to firestore
      const pigGameStateObj = getState().pigGame_P;
      saveGameState(pigGameStateObj);
    }
  };
};

export const holdDice = () => {
  return (dispatch, getState) => {
    if (getState().pigGame_P.winner === "none") {
      const activePlayer = getState().pigGame_P.activePlayer;

      // Clear strikes
      dispatch(clearStrikes());

      // 1. Add current score to total score
      dispatch(
        playerAddTotalScore(
          getState().pigGame_P[`player${activePlayer}`].currentScore
        )
      );
      // Clear current score
      dispatch(playerClearCurrentScore());

      // 2. Check if someone has won
      dispatch(checkWinner());

      // 3. IF no one has won, game continue and switch player
      if (getState().pigGame_P.winner === "none") {
        // Reset prev score
        dispatch(resetPrevScore());
        // Switch Player
        dispatch(switchActivePlayer());

        // Save Data to firestore
        const pigGameStateObj = getState().pigGame_P;
        saveGameState(pigGameStateObj);
      }

      // 4. Save Data to firestore
      const pigGameStateObj = getState().pigGame_P;
      saveGameState(pigGameStateObj);
    }
  };
};

export const player2SignOutFlow = () => {
  return (dispatch, getState) => {
    dispatch(player2LogOut());

    // CLEAR UP every game data
    dispatch(startNewGame());

    // Save everything after log out
    const pigGameStateObj = getState().pigGame_P;
    saveGameState(pigGameStateObj);
  };
};
