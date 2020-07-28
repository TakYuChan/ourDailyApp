import React from "react";
import S from "./pigGamePage.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectDiceNumber,
  selectActivePlayer,
} from "../../redux/pigGame/pigGame.selectors";
import {
  rollDice,
  switchActivePlayer,
} from "../../redux/pigGame/pigGame.actions";

const PigGamePage = ({
  diceNumber,
  rollDice,
  activePlayer,
  switchActivePlayer,
}) => {
  return (
    <S.PigGameContainer className="PigGame-Page pages">
      <S.GameConsoleContainer className="game-console-container">
        <S.PlayerOnePanel className={activePlayer === 1 && "active"}>
          <S.PlayerName className="player-name">Player 1</S.PlayerName>
          <S.TotalScole>0</S.TotalScole>
          <S.CurrentScoreContainer>
            <span>CURRENT</span>
            <S.CurrentScore>0</S.CurrentScore>
          </S.CurrentScoreContainer>
        </S.PlayerOnePanel>
        <S.PlayerTwoPanel className={activePlayer === 2 && "active"}>
          <S.PlayerName className="player-name">Player 2</S.PlayerName>
          <S.TotalScole>0</S.TotalScole>
          <S.CurrentScoreContainer>
            <span>CURRENT</span>
            <S.CurrentScore>0</S.CurrentScore>
          </S.CurrentScoreContainer>
        </S.PlayerTwoPanel>
        <S.NewGameBtn>NEW GAME</S.NewGameBtn>
        <S.RollDiceBtn
          onClick={() => {
            rollDice();
          }}
        >
          ROLL DICE
        </S.RollDiceBtn>
        <S.HoldBtn onClick={switchActivePlayer}>HOLD</S.HoldBtn>
        <S.TargetInput placeholder="FINAL SCORE" />
        {diceNumber !== null && (
          <S.Dice
            src={`/images/assets/thePigGame/dice-${diceNumber}.png`}
            onClick={rollDice}
          />
        )}
      </S.GameConsoleContainer>
    </S.PigGameContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  diceNumber: selectDiceNumber,
  activePlayer: selectActivePlayer,
});

const mapDispatchToProps = (dispatch) => ({
  rollDice: () => dispatch(rollDice()),
  switchActivePlayer: () => dispatch(switchActivePlayer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PigGamePage);
