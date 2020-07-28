import styled, { keyframes } from "styled-components";

const S = {};

const load = keyframes`
0% { 
  transform: scale(0);
} 
100% {
  transform: scale(1.0);
  opacity: 0;
}`;

S.applicationWrapperWithSpinner_wrapper = styled.div`
  width: 100vw;
`;

// ================ Spinner ==================
S.SpinnerOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  @media screen and (max-width: 810px) {
    height: 200px;
  }
`;

S.SpinnerContainer = styled.div`
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: ${(props) =>
    props.theme.mainPage.spinner_applicationWrapper};

  border-radius: 100%;
  animation: ${load} 1s infinite ease-in-out;
`;

export default S;
