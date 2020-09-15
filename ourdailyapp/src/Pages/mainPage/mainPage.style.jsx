import styled, { keyframes } from "styled-components";

const S = {};

// Animation
const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// ==================== Container ====================

S.MainPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  font-size: clamp(0.8rem, 2vw, 1.7rem);

  display: grid;
  grid-template-rows: minmax(1em, 16em) minmax(1em, 1fr);
  grid-template-columns: 1fr 1fr 1fr;

  grid-template-areas:
    ". imageFrame ."
    "accessAppWrapperBtn accessAppWrapperBtn accessAppWrapperBtn";
`;

// ======================= profile Pic and name ===========================
S.ImageFrameWrapper = styled.div`
  grid-area: imageFrame;

  align-self: flex-end;

  display: grid;
  place-items: center;

  animation: ${appear} 350ms;
`;

S.username = styled.h2`
  color: ${(props) => props.theme.mainPage.username};
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
`;

S.AccessAppBtnWrapper = styled.div`
  grid-area: accessAppWrapperBtn;
  width: 100%;

  max-width: 1000px;
  justify-self: center;
  align-self: flex-start;

  margin-top: 3.5em;
`;

export default S;
