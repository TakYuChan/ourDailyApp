import styled, { css } from "styled-components";
import { rgba } from "polished";

import bg from "../../assets/bg/bgJpg.jpg";

const S = {};

const switchPageBtnStyle = css`
  grid-column: 1/ 5;
  left: 1.5em;

  background: 0;
  border: 0;
  outline: 0;

  cursor: pointer;

  font-size: 0.7em;
  align-self: center;
  text-decoration: underline;
  align-self: flex-end;
  justify-self: flex-start;

  margin-left: 2em;
  margin-bottom: 0.3em;
`;

S.LogInPageHazyBg = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bg}) no-repeat center center fixed;
  background-size: cover;
  filter: blur(18px);
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
  grid-template-columns: 1fr 1em 1em 10em 1em 1em 1fr;
`;

// ============= Logo ==============
S.LogoWrapper = styled.div`
  // grid-column: 5;
  grid-column: 4;
  grid-row: 1;
  align-self: flex-start;
  margin-top: 2rem;

  margin-bottom: 1.2rem;

  transition: transform 1s linear;

  & img {
    object-fit: contain;
  }

  &.styled_smallerLogo {
    transform: scale(0.7);
  }
`;

/* // ============== Switch Auth Page Btn ==============  */
S.ToSignUpBtn = styled.button`
  ${switchPageBtnStyle}
  color: ${(props) => props.theme.AuthPage.ToSignUpBtn}
`;
S.ToLogInBtn = styled.button`
  ${switchPageBtnStyle}
  color: ${(props) => props.theme.AuthPage.ToLogInBtn}
`;

/* // ============== S.SocialContactAndCopyRightWrapper ==============  */
S.SocialContactAndCopyRightWrapper = styled.div`
  grid-column: 5 / 10;
  display: flex;
  align-self: flex-end;
  justify-self: flex-end;
  right: 1.5em;

  margin-bottom: 0.1em;

  @media only screen and (max-width: 647px) {
    flex-direction: column;
  }
`;
/* // ============== My Social Media Contact ==============  */
S.SocialContactWrapper = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  right: 1.5em;
  display: flex;

  margin-bottom: 0.1em;
`;

/* // ============== Copy Right Text ==============  */
S.CopyRightText = styled.span`
  grid-column: 7;
  font-size: 0.7em;
  align-self: flex-end;
  margin-bottom: 0.3em;
  margin-right: 2em;
  color: #f8f8f8;
`;

export default S;
