import styled from "styled-components";

const S = {};

// ============== Log in form wrapper ================

S.SignUpFormWrapper = styled.div`
  grid-column: 1;
  grid-row: 2;
  margin-bottom: 2rem;
  width: 60%;
  height: 100%;
  align-self: flex-start;
  justify-self: center;

  position: relative;

  &::before {
    content: "Sign Up";

    color: ${(props) => props.theme.SignUpPage.SignUpTitle};
    font-weight: 500;

    position: absolute;
    left: -1em;
    top: -3em;
  }
`;
// ============== Oauth wrapper ================
S.OauthBtnsWrapper = styled.div`
  grid-column: 7;
  grid-row: 2;
  justify-self: center;
  width: 10em;

  //   @media only screen and (max-width: 1000px) {
  //     grid-column: 3 / 6;
  //   }
  //   @media only screen and (max-width: 750px) {
  //     grid-column: 3 / 7;
  //   }

  //   @media only screen and (min-device-width: 320px) and (max-device-width: 1000px) and (orientation: landscape) {
  //     margin-bottom: 1.2rem;
  //   }
`;

export default S;
