import styled from "styled-components";

const S = {};

// ============== Log in form wrapper ================

S.LogInFormWrapper = styled.div`
  // grid-column: 2 / 7;
  // margin-bottom: 2rem;
  grid-area: form;
`;
// ============== Oauth wrapper ================
S.OauthBtnsWrapper = styled.div`
  // grid-column: 4;
  grid-area: authBtns;

  // @media only screen and (max-width: 1000px) {
  //   grid-column: 3 / 6;
  // }
  // @media only screen and (max-width: 750px) {
  //   grid-column: 3 / 7;
  // }

  @media only screen and (min-device-width: 320px) and (max-device-width: 1000px) and (orientation: landscape) {
    margin-bottom: 1.2rem;
  }
`;

export default S;
