import styled, { keyframes } from "styled-components";
import { rgba } from "polished";

const S = {};

const spin = keyframes`
to {
    -webkit-transform: rotate(360deg);
  }
`;

S.applicationWrapperWithSpinner_wrapper = styled.div`
  width: 100vw;
  //   border: 1px solid pink;
`;

// ================ Spinner ==================
S.SpinnerOverlay = styled.div`
  //   border: 2px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  @media screen and (max-width: 810px) {
    height: 200px;
  }
`;

S.SpinnerContainer = styled.div`
  display: inline-block;
  margin-top: 3%;
  font-size: clamp(0.8rem, 1.2vw, 1vw);
  width: 3em;
  height: 3em;

  border: 3px solid
    ${(props) => {
      return rgba(props.theme.mainPage.spinner_applicationWrapper_primary, 0.4);
    }};
  border-radius: 50%;
  border-top-color: ${(props) =>
    props.theme.mainPage.spinner_applicationWrapper_secondary};
  animation: ${spin} 1s ease-in-out infinite;
`;

export default S;
