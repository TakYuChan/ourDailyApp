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
  type: PigGameActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: PigGameActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: PigGameActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: PigGameActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const rollDice = () => ({
  type: PigGameActionTypes.ROLL_DICE,
});

export const holdDice = () => ({
  type: PigGameActionTypes.HOLD_DICE,
});

export const restorePrevGameData = (gameState) => ({
  type: PigGameActionTypes.RESTORE_PREV_GAME_DATA,
  payload: gameState,
});

// ========= Thunk action flow =========

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
