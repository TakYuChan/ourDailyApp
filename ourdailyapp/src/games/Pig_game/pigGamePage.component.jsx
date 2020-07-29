import React from "react";
import S from "./pigGamePage.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectDiceNumber,
  selectActivePlayer,
  selectPlayer1Obj,
  selectPlayer2Obj,
  selectWinner,
  selectFinalScore,
} from "../../redux/pigGame/pigGame.selectors";
import {
  rollDice,
  holdDice,
  startNewGame,
  changeFinalScore,
} from "../../redux/pigGame/pigGame.actions";

const PigGamePage = ({
  diceNumber,
  rollDice,
  holdDice,
  startNewGame,
  activePlayer,
  selectPlayer1Obj,
  selectPlayer2Obj,
  selectWinner,
  finalScore,
  changeFinalScore,
}) => {
  return (
    <S.PigGameContainer className="PigGame-Page pages">
      <S.GameConsoleContainer className="game-console-container">
        {/* ================= Player One Panel ================= */}
        <S.PlayerOnePanel className={activePlayer === 1 && "active"}>
          <S.PlayerName
            className={`${activePlayer === 1 && "active"} player-name`}
          >
            {selectWinner === "player1" ? "WINNER" : "PLAYER 1"}
          </S.PlayerName>
          {selectWinner === "player1" && (
            <S.Fireworks className="fireworks">
              <i className="iconfont icon-crown"></i>
            </S.Fireworks>
          )}
          <S.TotalScore>{selectPlayer1Obj.totalScore}</S.TotalScore>
          <S.CurrentScoreContainer>
            <S.CurrentSpan>CURRENT</S.CurrentSpan>
            <S.CurrentScore id="currentScore-player1">
              {selectPlayer1Obj.currentScore}
            </S.CurrentScore>
          </S.CurrentScoreContainer>
        </S.PlayerOnePanel>
        {/* ================= Player Two Panel ================= */}
        <S.PlayerTwoPanel className={activePlayer === 2 && "active"}>
          <S.PlayerName
            className={`${activePlayer === 2 && "active"} player-name`}
          >
            {selectWinner === "player2" ? "WINNER" : "PLAYER 2"}
          </S.PlayerName>
          <S.TotalScore>{selectPlayer2Obj.totalScore}</S.TotalScore>
          <S.CurrentScoreContainer>
            <S.CurrentSpan>CURRENT</S.CurrentSpan>
            <S.CurrentScore id="currentScore-player2">
              {selectPlayer2Obj.currentScore}
            </S.CurrentScore>
          </S.CurrentScoreContainer>
        </S.PlayerTwoPanel>
        {/* ================= Controls ================= */}
        <S.NewGameBtn onClick={startNewGame}>NEW GAME</S.NewGameBtn>
        <S.RollDiceBtn
          onClick={() => {
            rollDice();
          }}
        >
          ROLL DICE
        </S.RollDiceBtn>
        <S.HoldBtn onClick={holdDice}>HOLD</S.HoldBtn>
        <S.TargetInput
          type="number"
          placeholder="FINAL SCORE"
          value={finalScore}
          onChange={(event) => {
            const value = parseInt(event.target.value, 10);
            changeFinalScore(value);
          }}
        />
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
  selectPlayer1Obj: selectPlayer1Obj,
  selectPlayer2Obj: selectPlayer2Obj,
  selectWinner: selectWinner,
  finalScore: selectFinalScore,
});

const mapDispatchToProps = (dispatch) => ({
  rollDice: () => dispatch(rollDice()),
  holdDice: () => dispatch(holdDice()),
  startNewGame: () => dispatch(startNewGame()),
  changeFinalScore: (newFinalScore) =>
    dispatch(changeFinalScore(newFinalScore)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PigGamePage);
