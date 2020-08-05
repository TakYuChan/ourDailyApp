import React from "react";
import S from "./pigGamePage.style";

import { displayNameLengthFilter } from "../../utils/dataFilter";
import { renderProfilePicture } from "../../utils/conditional";
import { playerNameFontSize } from "./pigGameUtils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectDiceNumber,
  selectActivePlayer,
  selectPlayer1Obj,
  selectPlayer2Obj,
  selectWinner,
  selectFinalScore,
  selectPlayer2UserInfo,
  selectStrikes,
} from "../../redux/pigGame/pigGame.selectors";
import {
  toggleSignInModal,
  toggleInfoModal,
} from "../../redux/pigGameModals/pigGameModals.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
  rollDice,
  holdDice,
  startNewGame,
  changeFinalScore,
  player2SignOutFlow,
<<<<<<< HEAD
  signOutStart,
=======
  player2LogOut,
>>>>>>> 53da1c25287e345bd66203e8d428cf24d327f672
} from "../../redux/pigGame/pigGame.actions";

import Player2SignInModal from "./Components/player2SignInModal.component";
import InfoModal from "./Components/infoModal.component";

class PigGamePage extends React.Component {
  render() {
    const {
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
      selectCurrentUser,
      toggleSignInModal,
      player2Obj,
      player2LogOut,
      toggleInfoModal,
      strikesNum,
      signOutStart,
    } = this.props;

    return (
      <S.PigGameContainer className="PigGame-Page pages">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        </style>
        {/* ================= Player TWO Sign In BTN and MODAL ================= */}
        <Player2SignInModal />
        <InfoModal />
        <S.ModalsContainer>
          {player2Obj !== null ? (
<<<<<<< HEAD
            <S.Player2SignOutBtn onClick={signOutStart}>
=======
            <S.Player2SignOutBtn onClick={player2LogOut}>
>>>>>>> 53da1c25287e345bd66203e8d428cf24d327f672
              <S.playerIcon className="iconfont icon-player" />
              Player2 Log Out
            </S.Player2SignOutBtn>
          ) : (
            <S.Player2SignInBtn onClick={toggleSignInModal}>
              <S.playerIcon className="iconfont icon-player" />
              Player2 Log In
            </S.Player2SignInBtn>
          )}
          <S.InfoBtn onClick={toggleInfoModal}>
            <S.InfoIcon className="iconfont icon-FontAwesomeinfo" />
          </S.InfoBtn>
        </S.ModalsContainer>

        <S.GameConsoleContainer className="game-console-container">
          {/* ================= Player One Panel ================= */}
          <S.PlayerOnePanel className={activePlayer === 1 && "active"}>
            {/* ================= Player 1 Strikes effect ================= */}
            {strikesNum !== 0 && activePlayer === 1 && (
              <S.Player1Strikes>
                {strikesNum} STRIKES
                <S.StrikeIcon className="iconfont icon-dice" />
              </S.Player1Strikes>
            )}
            {/* ================= Player One Info Container ================= */}
            <S.PlayerInfoContainer>
              <S.PlayerPic
                imgsrc={renderProfilePicture(selectCurrentUser)}
              ></S.PlayerPic>
              <S.PlayerName
                className={`${activePlayer === 1 && "active"} player-name`}
                fontSize={
                  selectCurrentUser !== null &&
                  selectCurrentUser.displayName !== null
                    ? playerNameFontSize(selectCurrentUser.displayName.length)
                    : 1
                }
              >
                {selectCurrentUser !== null
                  ? displayNameLengthFilter(selectCurrentUser.displayName, 8)
                  : "Player 1"}
              </S.PlayerName>
            </S.PlayerInfoContainer>
            {selectWinner === "player1" && (
              <S.CrownLeft className="fireworks">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-crown"></use>
                </svg>
              </S.CrownLeft>
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
            {/* ================= Player 2 Strikes effect ================= */}
            {strikesNum !== 0 && activePlayer === 2 && (
              <S.Player2Strikes>
                {strikesNum} STRIKES
                <S.StrikeIcon className="iconfont icon-dice" />
              </S.Player2Strikes>
            )}
            {/* ================= Player Two Info Container ================= */}
            <S.PlayerInfoContainer>
              <S.PlayerPic
                imgsrc={renderProfilePicture(player2Obj)}
              ></S.PlayerPic>
              <S.PlayerName
                className={`${activePlayer === 2 && "active"} player-name`}
                fontSize={
                  player2Obj !== undefined && player2Obj !== null
                    ? playerNameFontSize(player2Obj.displayName.length)
                    : 1
                }
              >
                {player2Obj !== undefined && player2Obj !== null
                  ? displayNameLengthFilter(player2Obj.displayName, 12)
                  : "Player 2"}
              </S.PlayerName>
            </S.PlayerInfoContainer>
            {selectWinner === "player2" && (
              <S.CrownRight className="fireworks">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-crown"></use>
                </svg>
              </S.CrownRight>
            )}
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
  }
}

const mapStateToProps = createStructuredSelector({
  diceNumber: selectDiceNumber,
  activePlayer: selectActivePlayer,
  selectPlayer1Obj: selectPlayer1Obj,
  selectPlayer2Obj: selectPlayer2Obj,
  selectWinner: selectWinner,
  finalScore: selectFinalScore,
  selectCurrentUser: selectCurrentUser,
  player2Obj: selectPlayer2UserInfo,
  strikesNum: selectStrikes,
});

const mapDispatchToProps = (dispatch) => ({
  rollDice: () => dispatch(rollDice()),
  holdDice: () => dispatch(holdDice()),
  startNewGame: () => dispatch(startNewGame()),
  changeFinalScore: (newFinalScore) =>
    dispatch(changeFinalScore(newFinalScore)),
  toggleSignInModal: () => dispatch(toggleSignInModal()),
  player2LogOut: () => dispatch(player2LogOut()),
  toggleInfoModal: () => dispatch(toggleInfoModal()),
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PigGamePage);
