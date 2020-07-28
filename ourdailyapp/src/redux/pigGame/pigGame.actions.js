import PigGameActionTypes from "./pigGame.types";

export const changeDiceNumber = () => {
  return (dispatch) => {
    const newDiceNum = Math.floor(Math.random() * 6) + 1;
    dispatch({
      type: PigGameActionTypes.CHANGE_DICE_NUM,
      payload: newDiceNum,
    });
    return newDiceNum;
  };
};

export const switchActivePlayer = () => ({
  type: PigGameActionTypes.SWITCH_ACTIVE_PLAYER,
});

// ========= Thunk action flow =========
export const rollDice = () => {
  return (dispatch) => {
    console.log("rolling dice...");
    const newDiceNum = dispatch(changeDiceNumber());

    // Game Rules applied
    newDiceNum === 6 && dispatch(switchActivePlayer());
  };
};
