import styled, { keyframes } from "styled-components";
import { rgba } from "polished";

const S = {};

const spin = keyframes`
to {
    -webkit-transform: rotate(360deg);
  }
`;

const load2 = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}`;

.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
}
.loader {
  color: #521e1e;
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before,
.loader:after {
  position: absolute;
  content: '';
}
.loader:before {
  width: 5.2em;
  height: 10.2em;
  background: #0dc5c1;
  border-radius: 10.2em 0 0 10.2em;
  top: -0.1em;
  left: -0.1em;
  -webkit-transform-origin: 5.1em 5.1em;
  transform-origin: 5.1em 5.1em;
  -webkit-animation: load2 2s infinite ease 1.5s;
  animation: load2 2s infinite ease 1.5s;
}
.loader:after {
  width: 5.2em;
  height: 10.2em;
  background: #0dc5c1;
  border-radius: 0 10.2em 10.2em 0;
  top: -0.1em;
  left: 4.9em;
  -webkit-transform-origin: 0.1em 5.1em;
  transform-origin: 0.1em 5.1em;
  -webkit-animation: load2 2s infinite ease;
  animation: load2 2s infinite ease;
}



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
