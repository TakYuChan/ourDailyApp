import PigGameActionTypes from "./pigGame.types";
import {
  switchActivePlayer,
  addPlayerCurrentScore,
  clearPlayerCurrentScore,
  addPlayerTotalScore,
  clearPlayerTotalScore,
  checkWinner,
  changePrevScores,
  resetPlayerPrevScore,
} from "./pigGame.utils";

const INITIAL_STATE = {
  diceNumber: null,
  activePlayer: 1,
  player1: {
    totalScore: 0,
    currentScore: 0,
  },
  player2: {
    totalScore: 0,
    currentScore: 0,
  },
  player2UserInfo: null,
  //winner -> none, player1, player2
  winner: "none",
  finalScore: 100,
  // prev_scores stores 2 values.
  // the prev value of player 1 and player 2
  prev_scores: [0, 0],

  isLoading: true,
};

const pigGameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PigGameActionTypes.CHANGE_DICE_NUM:
      return {
        ...state,
        diceNumber: action.payload,
      };
    case PigGameActionTypes.SWITCH_ACTIVE_PLAYER:
      return {
        ...state,
        activePlayer: switchActivePlayer(state.activePlayer),
      };
    case PigGameActionTypes.PLAYER_ADD_CURRENT_SCORE:
      return addPlayerCurrentScore(state, action.payload);
    case PigGameActionTypes.PLAYER_CLEAR_CURRENT_SCORE:
      return clearPlayerCurrentScore(state);
    case PigGameActionTypes.PLAYER_ADD_TOTAL_SCORE:
      return addPlayerTotalScore(state, action.payload);
    case PigGameActionTypes.PLAYER_CLEAR_TOTAL_SCORE:
      return clearPlayerTotalScore(state);
    case PigGameActionTypes.CHECK_WINNER:
      return checkWinner(state);
    case PigGameActionTypes.START_NEW_GAME:
      return {
        ...INITIAL_STATE,
        finalScore: state.finalScore,
        player2UserInfo: state.player2UserInfo,
        isLoading: false,
      };
    case PigGameActionTypes.CHANGE_FINAL_SCORE:
      return {
        ...state,
        finalScore: action.payload,
      };
    case PigGameActionTypes.CHANGE_PREV_SCORES:
      return {
        ...state,
        prev_scores: changePrevScores(state, action.payload),
      };
    case PigGameActionTypes.LOAD_GAME_STATE:
      return action.payload;
    case PigGameActionTypes.LOADING_FINISHED:
      return {
        ...state,
        isLoading: false,
      };
    case PigGameActionTypes.SET_ISLOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };
    case PigGameActionTypes.RESET_PREV_SCORE:
      return {
        ...state,
        prev_scores: resetPlayerPrevScore(
          state.activePlayer,
          state.prev_scores
        ),
      };
    case PigGameActionTypes.SET_PLAYER2_USER_INFO:
      return {
        ...state,
        player2UserInfo: action.payload,
      };
    case PigGameActionTypes.PLAYER2_USER_LOGOUT:
      return {
        ...state,
        player2UserInfo: INITIAL_STATE.player2UserInfo,
      };
    default:
      return state;
  }
};

export default pigGameReducer;