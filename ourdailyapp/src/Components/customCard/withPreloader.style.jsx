import styled, { keyframes, css } from "styled-components";

const S = {};

const loading = (background) => keyframes`
from {transition:none;}
to {background: ${background};
}
`;

const loadingCardPopsUp = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

const loadingContentStyles = css`
  background-color: ${(props) => props.theme.appStore.cardLoadingContentStart};
  animation: ${(props) => loading(props.theme.appStore.cardLoadingContentEnd)}
    2s infinite linear alternate;
`;

S.CardSectionContainer = styled.div`
  display: grid;
  width: 90%;
  max-width: 900px;
  margin: 50px auto;

  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));

  gap: 20px;

  @media screen and (max-width: 1125px) {
    grid-template-columns: 450px;
    justify-content: center;
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: minmax(100px, 440px);
    justify-content: center;
  }
`;

S.LoadingCardContainer = styled.div`
  padding: 20px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.appStore.cartBg};

  &.card-entering {
    opacity: 0;
  }

  &.card-entered {
    opacity: 1;
    transition: all 500ms;
  }

  &.card-exiting {
    opacity: 1;
  }

  &.card-exited {
    opacity: 0;
    transition: all 500ms;
  }

  animation: ${loadingCardPopsUp} 250ms;
`;

// ========================= Image ============================

S.LoadingImgWrapper = styled.div`
  width: 90%;
  height: 200px;
  ${loadingContentStyles}
`;

// ========================= Text ============================
S.LoadingTitleText = styled.div`
  margin: 20px 0;

  border-radius: 20px;
  width: 30%;
  height: 1rem;
  ${loadingContentStyles}
`;

S.LoadingDescriptionText = styled.div`
  color: ${(props) => props.theme.appStore.cardText};
  font-size: clamp(0.8rem, 1.1vw, 1.1rem);
  margin-bottom: 20px;
  border-radius: 20px;
  width: 40%;
  height: 1rem;
  ${loadingContentStyles}
`;

S.LoadingBtnStart = styled.div`
  border-radius: 20px;
  width: 35%;
  height: 1rem;
  ${loadingContentStyles}
`;

export default S;
