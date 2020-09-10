import styled from "styled-components";

const S = {};

// ============== Log in form wrapper ================

S.SignUpFormWrapper = styled.div`

  flex-basis: 45%;
  width: 100%;
  ${props => { 
    if(!props.mq_IsTallScreen) 
    return `
    flex-basis: 100%;
    `
  }}}
  height: 70%;
  position: relative;

  &::before {
    content: "Sign Up";

    color: ${(props) => props.theme.SignUpPage.SignUpTitle};
    font-weight: 500;

    position: absolute;
    left: -1em;
    top: -3em;
  }

  @media screen and (max-width: 750px) {
    justify-self: center;
  }
`;

/* // =================== OR Seperate Line ====================== */
S.Or = styled.span`
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
    height: 8em;
  }

  &:before {
    top: -600%;
  }

  &:after {
    bottom: -600%;
  }

  &:before,
  &:after {
    transform: rotate(90deg);
    top: -220%;
  }

  &:before {
    left: -350%;
  }

  &:after {
    bottom: 0;
    left: 450%;
  }

  @media screen and (min-width: 700px) {
    &:before,
    &:after {  
      left: 50%;
      transform: rotate(0);
    }

    &:before {
      top: -600%;
    }
  
    &:after {
      top: 180%;
    }
  }

  ${props => !props.mq_IsTallScreen && "display: none;"}
`;

// ============== Oauth wrapper ================
S.OauthBtnsWrapper = styled.div`
  flex-basis: 45%;

  ${props => {if(!props.mq_IsTallScreen) {
    return `
    position: absolute;
    top: 2vw;
    right: 2vw;
    `}}}
`;

export default S;