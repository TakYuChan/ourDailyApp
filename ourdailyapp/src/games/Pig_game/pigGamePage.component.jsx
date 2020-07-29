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
} from "../../redux/pigGame/pigGame.selectors";
import {
  rollDice,
  holdDice,
  startNewGame,
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
}) => {
  return (
    <S.PigGameContainer className="PigGame-Page pages">
      <S.GameConsoleContainer className="game-console-container">
        {/* ================= Player One Panel ================= */}
        <S.PlayerOnePanel className={activePlayer === 1 && "active"}>
          <S.PlayerName className="player-name">
            {selectWinner === "player1" ? "WINNER" : "Player 1"}
          </S.PlayerName>
          <S.TotalScore>{selectPlayer1Obj.totalScore}</S.TotalScore>
          <S.CurrentScoreContainer>
            <span>CURRENT</span>
            <S.CurrentScore id="currentScore-player1">
              {selectPlayer1Obj.currentScore}
            </S.CurrentScore>
          </S.CurrentScoreContainer>
        </S.PlayerOnePanel>
        {/* ================= Player Two Panel ================= */}
        <S.PlayerTwoPanel className={activePlayer === 2 && "active"}>
          <S.PlayerName className="player-name">
            {selectWinner === "player2" ? "WINNER" : "Player 2"}
          </S.PlayerName>
          <S.TotalScore>{selectPlayer2Obj.totalScore}</S.TotalScore>
          <S.CurrentScoreContainer>
            <span>CURRENT</span>
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
        <S.HoldBtn
          onClick={() => {
            const oldCurrentScore = document.querySelector(
              `#currentScore-player${activePlayer}`
            ).innerText;

            holdDice(oldCurrentScore);
          }}
        >
          HOLD
        </S.HoldBtn>
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
  selectPlayer1Obj: selectPlayer1Obj,
  selectPlayer2Obj: selectPlayer2Obj,
  selectWinner: selectWinner,
});

const mapDispatchToProps = (dispatch) => ({
  rollDice: () => dispatch(rollDice()),
  holdDice: (oldCurrentScore) => dispatch(holdDice(oldCurrentScore)),
  startNewGame: () => dispatch(startNewGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PigGamePage);
