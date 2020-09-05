import styled, { css } from "styled-components";
import { rgba } from "polished";

import bg from "../../assets/bg/bgJpg.jpg";

const S = {};

const switchPageBtnStyle = css`
  background: 0;
  border: 0;
  outline: 0;

  cursor: pointer;

  font-size: 0.7em;
  text-decoration: underline;

  margin-left: 2em;
  margin-bottom: 0.3em;
`;

S.LogInPageHazyBg = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bg}) no-repeat center center fixed;
  background-size: cover;
  filter: blur(18px);

  position: fixed;
`;

S.LogInPageContent = styled.div`
  overflow-y: auto;
  width: 85%;
  height: 85%;
  user-select: none;
  border-radius: 20px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${bg});
  background-image: ${rgba("#000000", 0.5)};
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  font-size: clamp(0.8rem, 1.8vw, 1.5rem);

  ${(props) => {
    if (props.styled_authPage === "login") {
      return `
      grid-template-rows: 1em 10em 2em 7em 2em 7em 0em 1fr;
      grid-template-columns: auto 4em 1.5em 8em 1.5em 4em auto;
      grid-template-areas: 
    " . . . . . . ."
    ". . logo logo logo . ."
    ". . . . . . ."
    ". form form form form form ."
    " . . . . . . ."
    ". . authBtns authBtns authBtns . ."
    " . . . . . . ."
    "footer footer footer footer footer footer footer";
    `;
    }
  }};

  ${(props) => {
    if (props.styled_authPage === "signup") {
      return `
      grid-template-rows: 1em 10em 2em 10em 2em 4em 1fr;
      grid-template-columns: auto 4em 1.5em 8em 1.5em 4em auto;
      grid-template-areas:
      " . . . . . . ."
      ". . logo logo logo . ."
      "form . . . . . authBtns"
      "form . . seperate . . authBtns"
      "form . . seperate . . authBtns"
      ". . . . . . ."
      "footer footer footer footer footer footer footer";
      `;
    }
  }};

  @media screen and (max-width: 1300px) {
    ${(props) =>
      props.styled_authPage === "signup" &&
      `
       grid-template-rows: 1em 10em 2em 10em 2em 7em 1fr;
       grid-template-columns: auto 2em 1.5em 8em 1.5em 2em auto;
      `};
  }

  @media screen and (max-width: 890px) {
    ${(props) =>
      props.styled_authPage === "login" &&
      `
        grid-template-rows: 1em 10em 2em 10em 4em 7em 4em 1fr;
       grid-template-columns: auto 2em 2.8em 8em 2.8em 2em auto;
      `};

    ${(props) =>
      props.styled_authPage === "signup" &&
      `
       grid-template-rows: 1em 10em 2em 10em 2em 7em 1fr;
       grid-template-columns: auto .5em .5em 8em .5em .5em auto;
      `};
  }

  @media screen and (max-width: 750px) {
    ${(props) =>
      props.styled_authPage === "signup" &&
      `
       grid-template-rows: 1em 10em 2em 15em 5em 10em 1fr;
       grid-template-columns: auto 2em 15em 2em auto;
      `};

    ${(props) =>
      props.styled_authPage === "signup" &&
      `grid-template-areas:
      " . . . . ."
      ". . logo . ."
      ". . . . ."
      ". form form form ."
      " . . seperate . ."
      ". . authBtns . ."
      "footer footer footer footer footer";
      `};
  }
`;

// ============= Logo ==============
S.LogoWrapper = styled.div`
  grid-area: logo;
  transition: transform 800ms linear;
  transform: scale(1);
  & img {
    object-fit: contain;
  }
  &.styled_smallerLogo {
    transform: scale(0.8);
  }
`;

/* // ============== Create Account Btn ==============  */
S.ToSignUpPage = styled.button`
  ${switchPageBtnStyle}
  color: ${(props) => props.theme.AuthPage.ToSignUpPageBtn};
`;
S.ToLogInPage = styled.button`
${switchPageBtnStyle}
  color: ${(props) => props.theme.AuthPage.ToLogInPageBtn};
`;

/* // ============== S.Footer ==============  */
S.FooterWrapper = styled.div`
  grid-area: footer;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin-bottom: 0.2em;
`;
/* // ============== S.SocialContactAndCopyRightWrapper ==============  */

S.SocialContactAndCopyRightWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 647px) {
    flex-direction: column;
  }
`;
/* // ============== My Social Media Contact ==============  */
S.SocialContactWrapper = styled.div`
  display: flex;
`;

/* // ============== Copy Right Text ==============  */
S.CopyRightText = styled.span`
  font-size: 0.7em;
  align-self: flex-end;
  // margin-bottom: 0.3em;
  margin-right: 2em;
  color: #f8f8f8;
`;

export default S;
