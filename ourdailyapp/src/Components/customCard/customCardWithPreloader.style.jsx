import styled, { keyframes, css } from "styled-components";
import { rgba } from "polished";

const S = {};

const loading = keyframes`
  from {
    transform: translateX(-98%);
  }
  to {
    transform: translateX(1000%)
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

const preloaderContentStyles = css`
  background-color: ${(props) =>
    props.theme.appStore.cardLoadingContent_primary};

  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    width: 60%;
    height: 100%;
    background: ${(props) => props.theme.appStore.cardLoadingContent_secondary};
    filter: blur(100px);
    left: 0;
    right: 0;
    animation: ${loading} 2.8s infinite;
  }
`;

const borderRadiusPreloaderStyles = css`
  border-radius: 20px;
`;

// ================ Card Section Container - for transition ======================

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

// ================ Loading Card ======================

S.LoadingCardContainer = styled.div`
  padding: 20px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.appStore.cartBg};

  animation: ${loadingCardPopsUp} 250ms;

  box-shadow: 0px 4px 8px ${rgba("#000000", 0.12)};
`;

// ========================= Image ============================

S.LoadingImgWrapper = styled.div`
  width: 90%;
  height: 200px;
  ${preloaderContentStyles}
`;

// ========================= Text ============================
S.LoadingTitleText = styled.div`
  margin: 20px 0;

  width: 30%;
  height: 1rem;
  ${borderRadiusPreloaderStyles}
  ${preloaderContentStyles}
  position: relative;
`;

S.LoadingDescriptionText = styled.div`
  color: ${(props) => props.theme.appStore.cardText};
  font-size: clamp(0.8rem, 1.1vw, 1.1rem);
  margin-bottom: 20px;

  width: 40%;
  height: 1rem;
  ${borderRadiusPreloaderStyles}
  ${preloaderContentStyles}
`;

S.LoadingBtnStart = styled.div`
  width: 35%;
  height: 1rem;
  ${borderRadiusPreloaderStyles}
  ${preloaderContentStyles}
`;

export default S;
