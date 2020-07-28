import PigGameActionTypes from "./pigGame.types";
import { switchActivePlayer } from "./pigGame.utils";

const INITIAL_STATE = {
  diceNumber: null,
  activePlayer: 1,
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
    default:
      return state;
  }
};

export default pigGameReducer;
