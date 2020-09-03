import styled from "styled-components";

const S = {};

// ============== Log in form wrapper ================

S.SignUpFormWrapper = styled.div`
  grid-area: form;
  justify-self: flex-end;

  width: 90%;
  max-width: 400px;
  height: 100%;
  // justify-self: flex-end;

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
  justify-self: center;
  align-self: center;

  grid-area: seperate;

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
`

// ============== Oauth wrapper ================
S.OauthBtnsWrapper = styled.div`

  grid-area: authBtns;
  align-self: center;

  width: 80%;
  max-width: 240px;
`;

export default S;
