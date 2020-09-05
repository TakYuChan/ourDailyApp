import styled from "styled-components";

const S = {};

// ============== Log in form wrapper ================

S.LogInFormWrapper = styled.div`
flex-basis: 45%;
`;
// ============== Oauth wrapper ================
S.OauthBtnsWrapper = styled.div`
flex-basis: 30%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-self: center;

width: 52%;
min-width: 175px;
`;

export default S;
