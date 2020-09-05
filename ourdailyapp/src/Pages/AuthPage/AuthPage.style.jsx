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
  max-width: 1650px;
  max-height: 850px;

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
  font-size: clamp(0.8rem, 1.4vw, 1.5rem);

  ${props => {if(props.styled_authPage === "login") {
    return `grid-template-rows: 1em minmax(9em, 1fr) 1.5em minmax(18em, 1fr) 1fr;
            grid-template-columns: minmax(80px, 1fr) minmax(50px, 100px) minmax(8em, 250px) minmax(50px, 100px)  minmax(80px, 1fr);
            grid-template-areas:
            ". . . . ."
            ". . logo . ."
            ". . . . ."
            ". logInPage logInPage logInPage ."
            "footer footer footer footer footer";

            @media only screen and (max-width: 1000px) {
              grid-template-rows: 1em minmax(9em, 1fr) 1.5em minmax(22em, 1fr) 1fr;
              grid-template-columns: minmax(80px, 1fr) minmax(50px, 60px) minmax(8em, 250px) minmax(50px, 60px)  minmax(80px, 1fr);
            }

            @media only screen and (max-width: 426px) {
              grid-template-columns: 50px minmax(20px, 150px) minmax(6em, 250px) minmax(20px, 150px) 50px;
            }

            `;
  }}};

  ${props => {if(props.styled_authPage === "signup") {
    return `grid-template-rows: 1em minmax(9em, 1fr) 1.5em minmax(19em, 1fr) 1fr;
            grid-template-columns: minmax(40px, 1fr) minmax(50px, 1fr) minmax(8em, 250px) minmax(50px, 1fr)  minmax(40px, 1fr);
            grid-template-areas:
            ". . . . ."
            ". . logo . ."
            ". . . . ."
            ". signUpPage signUpPage signUpPage ."
            "footer footer footer footer footer";

            @media only screen 
          and (min-device-width: 768px) 
          and (max-device-width: 1024px) 
          {
            grid-template-rows: 1em minmax(9em, 1fr) 1.5em minmax(22em, 1fr) minmax(5em, 1fr);
          }

          @media only screen and (max-width: 700px) {
            grid-template-rows: 1em minmax(9em, 1fr) 1.5em 5em minmax(35em, 1fr) minmax(2em, 1fr);
            grid-template-areas:
            ". . . . ."
            ". . logo . ."
            ". . . . ."
            ". signUpPage signUpPage signUpPage ."
            "footer footer footer footer footer";
          }

            `;
  }}};
`;

S.LogInWrapper = styled.div`
grid-area: logInPage;

display: flex;
flex-direction: column;
justify-content: space-between

`;

S.SignupWrapper = styled.div`
grid-area: signUpPage;
display: flex;
justify-content: space-between;
align-items: center;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }

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
