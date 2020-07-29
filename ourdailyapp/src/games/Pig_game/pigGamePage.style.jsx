import styled, { css } from "styled-components";

const S = {};

// =============== CSS ================
const panelStyles = css`
  position: relative;
  height: 100%;
  width: 50%;
  padding: 10%;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  touch-action: manipulation;

  background: ${(props) => props.theme.pigGamePage.panel_bg};

  &.active {
    background: ${(props) => props.theme.pigGamePage.activePanel_bg};
  }

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
      background: ${(props) => props.theme.pigGamePage.dot_color};
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

  touch-action: manipulation;
`;

S.GameConsoleContainer = styled.div`
  width: 100vw;
  max-width: 1200px;
  height: 60vh;
  background: white;

  font-family: Lato;

  display: flex;

  position: relative;

  touch-action: manipulation;
`;

S.PlayerOnePanel = styled.div`
  ${panelStyles}
`;
S.PlayerTwoPanel = styled.div`
  ${panelStyles}
`;

// ================== Panel Common =====================
S.PlayerName = styled.h2`
  position: relative;
  display: inline-block;

  font-weight: 100;

  font-size: clamp(1.2rem, 2vw, 2rem);

  letter-spacing: 2px;

  &.active {
    font-weight: 300;
  }
`;
S.TotalScore = styled.h2`
  font-weight: 200;
  font-size: clamp(2rem, 4vw, 4rem);
  color: ${(props) => props.theme.pigGamePage.totalScore};
`;
S.CurrentScoreContainer = styled.div`
  background: ${(props) => props.theme.pigGamePage.current_container};
  display: inline-block;
  font-size: clamp(0.7rem, 1.2vw, 1.2rem);
  padding: 1em 1.6em;
`;

S.CurrentSpan = styled.span`
  font-size: clamp(0.5rem, 0.7vw, 0.7rem);
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
  font-size: clamp(0.9rem, 1.2vw, 1.2rem);
`;

S.HoldBtn = styled.button`
  ${btnStyles}
  transform: translateX(-51%);
  top: 75%;
  font-size: clamp(0.9rem, 1.2vw, 1.2rem);
`;

// ================== Others =====================

S.CrownLeft = styled.div`
  position: absolute;
  top: 4%;
  left: 4%;
  animation: firework 1s forwards;

  & svg {
    font-size: clamp(1.4rem, 2.5vw, 2.5rem);
  }

  @keyframes firework {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

S.CrownRight = styled.div`
  position: absolute;
  top: 4%;
  right: 4%;
  animation: firework 1s forwards;

  & svg {
    font-size: clamp(1.4rem, 2.5vw, 2.5rem);
  }

  @keyframes firework {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`;

S.TargetInput = styled.input`
  position: absolute;
  font-size: clamp(0.7rem, 1.5vw, 1.3rem);
  left: 50%;
  transform: translateX(-50%);
  top: 85%;
  padding: 0.2em 0.5em;
  width: 8em;
  border: 1px solid ${(props) => props.theme.pigGamePage.targetInput_border};

  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
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
