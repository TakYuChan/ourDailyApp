import PigGameActionTypes from "./pigGame.types";
import {
  switchActivePlayer,
  addPlayerCurrentScore,
  clearPlayerCurrentScore,
  addPlayerTotalScore,
  clearPlayerTotalScore,
  checkWinner,
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
  //winner -> none, player1, player2
  winner: "none",
  finalScore: 100,
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
      };
    case PigGameActionTypes.CHANGE_FINAL_SCORE:
      return {
        ...state,
        finalScore: action.payload,
      };
    default:
      return state;
  }
};

export default pigGameReducer;
