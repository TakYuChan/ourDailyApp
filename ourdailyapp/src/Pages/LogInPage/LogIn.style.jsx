import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const S = {};

const switchPageBtnStyle = css`
  background: 0;
  border: 0;
  outline: 0;

  cursor: pointer;

  font-size: 0.8em;
  text-decoration: underline;

  margin-left: 2em;
  margin-bottom: 0.3em;
`;

S.LogInPageContainer = styled.div`
  display: grid;

  height: 100%;
  width: 100%;

  font-size: clamp(0.9rem, 1.4vw, 1.5rem);
  grid-template-rows: 1em minmax(7em, 8em) 1em minmax(21em, 1fr) minmax(
      2.5em,
      1fr
    );
  grid-template-columns:
    minmax(40px, 1fr) minmax(3em, 100px) minmax(7em, 250px) minmax(3em, 100px)
    minmax(40px, 1fr);
  grid-template-areas:
    ". . . . ."
    ". . logo . ."
    ". . . . ."
    ". logInPage logInPage logInPage ."
    "footer footer footer footer footer";

  @media only screen and (min-width: 1280px) {
    grid-template-rows: 1em minmax(9em, 1fr) 1em minmax(19em, 1fr) minmax(
        2em,
        1fr
      );
  }
`;

S.LogInWrapper = styled.div`
  grid-area: logInPage;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// ============= Logo ==============
S.LogoWrapper = styled.div`
  grid-area: logo;
  transition: transform 800ms linear;
  transform: scale(1);

  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  &.styled_smallerLogo {
    transform: scale(0.8);
  }
`;

/* // ============== Create Account Btn ==============  */
S.ToSignUpPage = styled(Link)`
  ${switchPageBtnStyle}
  color: ${(props) => props.theme.AuthPage.ToSignUpPageBtn};
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
  font-size: 0.6em;
  align-self: flex-end;
  margin-right: 2em;
  color: #f8f8f8;
`;

export default S;
