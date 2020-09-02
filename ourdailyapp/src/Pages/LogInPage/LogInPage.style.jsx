import styled from "styled-components";

// import { Link } from "react-router-dom";

const S = {};

// // ============= Logo ==============
// S.LogoWrapper = styled.div`
//   // grid-column: 5;
//   grid-column: 4;
//   align-self: flex-end;

//   margin-bottom: 1.2rem;

//   & img {
//     object-fit: contain;
//   }
// `;

// ============== Log in form wrapper ================

S.LogInFormWrapper = styled.div`
  // grid-column: 3 / 8;
  grid-column: 2 / 7;
  margin-bottom: 2rem;
`;
// ============== Oauth wrapper ================
S.OauthBtnsWrapper = styled.div`
  grid-column: 4;

  @media only screen and (max-width: 1000px) {
    grid-column: 3 / 6;
  }
  @media only screen and (max-width: 750px) {
    grid-column: 3 / 7;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 1000px) and (orientation: landscape) {
    margin-bottom: 1.2rem;
  }
`;

// /* // ============== Create Account Btn ==============  */
// S.ToCreateAccount = styled(Link)`
//   grid-column: 1/ 5;
//   left: 1.5em;

//   font-size: 0.7em;
//   color: ${(props) => props.theme.LogInForm.toCreateAccountLink};
//   align-self: center;
//   text-decoration: underline;
//   align-self: flex-end;
//   justify-self: flex-start;

//   margin-left: 2em;
//   margin-bottom: 0.3em;
// `;

// /* // ============== S.SocialContactAndCopyRightWrapper ==============  */
// S.SocialContactAndCopyRightWrapper = styled.div`
//   grid-column: 5 / 10;
//   display: flex;
//   align-self: flex-end;
//   justify-self: flex-end;
//   right: 1.5em;

//   margin-bottom: 0.1em;

//   @media only screen and (max-width: 647px) {
//     flex-direction: column;
//   }
// `;
// /* // ============== My Social Media Contact ==============  */
// S.SocialContactWrapper = styled.div`
//   align-self: flex-end;
//   justify-self: flex-end;
//   right: 1.5em;
//   display: flex;

//   margin-bottom: 0.1em;
// `;

// /* // ============== Copy Right Text ==============  */
// S.CopyRightText = styled.span`
//   grid-column: 7;
//   font-size: 0.7em;
//   align-self: flex-end;
//   margin-bottom: 0.3em;
//   margin-right: 2em;
//   color: #f8f8f8;
// `;

export default S;
