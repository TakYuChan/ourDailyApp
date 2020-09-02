import styled from "styled-components";

const S = {};

// ============== Log in form wrapper ================

S.SignUpFormWrapper = styled.div`
  grid-column: 1;
  grid-row: 2;
  margin-bottom: 2rem;
  width: 60%;
  height: 100%;
  justify-self: flex-end;

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

/* // =================== OR Seperate Line ====================== */
S.Or = styled.span`
  grid-column: 4 / 5;
  justify-self: center;
  align-self: center;

  color: ${(props) => props.theme.SignUpPage.OrSepereateLine};

  position: relative;

  opacity: 0.8;

  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    background: ${(props) => props.theme.SignUpPage.OrSepereateLine};
    width: 2px;
    height: 7em;

    left: 50%;
  }

  &:before {
    top: -500%;
  }

  &:after {
    bottom: -500%;
  }
`;

// ============== Oauth wrapper ================
S.OauthBtnsWrapper = styled.div`
  grid-column: 7;
  grid-row: 2;
  justify-self: flex-start;

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
