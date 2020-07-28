import styled, { css } from "styled-components";

const S = {};

// =============== CSS ================
const panelStyles = css`
  height: 100%;
  width: 50%;
  padding: 10%;
  text-align: center;

  &.active > .player-name {
    &:after {
      content: "";
      display: block;
      position: absolute;
      right: -25%;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 100%;

      font-size: clamp(1.2rem, 2vw, 2rem);
      --size: 0.4em;
      width: var(--size);
      height: var(--size);
      background: red;
    }
  }
`;

const btnStyles = css`
  all: unset;
  position: absolute;
  left: 50%;
  &:hover {
    color: red;
  }
`;

S.PigGameContainer = styled.div`
  background: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)),
    url("/images/assets/thePigGame/back.jpg") !important;
  background-size: cover !important;
  background-position: center !important;

  display: grid;
  place-items: center;

  user-select: none;
`;

S.GameConsoleContainer = styled.div`
  width: 100vw;
  max-width: 1200px;
  height: 60vh;
  background: white;

  display: flex;

  position: relative;
`;

S.PlayerOnePanel = styled.div`
  ${panelStyles}
`;
S.PlayerTwoPanel = styled.div`
  ${panelStyles}
  background: pink;
`;

// ================== Panel Common =====================
S.PlayerName = styled.h2`
  margin-bottom: 20px;
  position: relative;
  display: inline-block;

  font-size: clamp(1.2rem, 2vw, 2rem);
`;
S.TotalScole = styled.h2`
  margin-bottom: 150px;
  font-size: clamp(1.2rem, 2vw, 2rem);
`;
S.CurrentScoreContainer = styled.div`
  background: orangered;
  display: inline-block;
  font-size: clamp(0.7rem, 1.2vw, 1.2rem);
  padding: 1em;
`;
S.CurrentScore = styled.h3`
  font-size: clamp(0.7rem, 1.2vw, 1.2rem);
  color: white;
`;

// ================== Btns =====================
S.NewGameBtn = styled.button`
  ${btnStyles}
  top: 60px;
  transition: all 500ms;
  transform: translateX(-45%);
  font-size: clamp(1rem, 1.8vw, 1.6rem);
`;

S.RollDiceBtn = styled.button`
  ${btnStyles}
  transform: translateX(-51%);
  top: 65%;
  font-size: clamp(0.7rem, 1.2vw, 1.2rem);
`;

S.HoldBtn = styled.button`
  ${btnStyles}
  transform: translateX(-51%);
  top: 75%;
  font-size: clamp(0.7rem, 1.2vw, 1.2rem);
`;

// ================== Others =====================

S.TargetInput = styled.input`
  position: absolute;
  font-size: clamp(0.7rem, 1.5vw, 1.3rem);
  left: 50%;
  transform: translateX(-50%);
  top: 85%;
  padding: 0.2em 0.5em;
  width: 8em;

  text-align: center;
`;

S.Dice = styled.img`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);

  font-size: clamp(0.7rem, 1.5vw, 1.3rem);
  --size: 5em;
  width: var(--size);
  height: var(--size);
  box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.1);

  cursor: grab;

  &:active {
    transform: scale(1.4) translateX(-35%);
    box-shadow: 0px 15px 12px rgba(0, 0, 0, 0.2);
  }
`;

export default S;
