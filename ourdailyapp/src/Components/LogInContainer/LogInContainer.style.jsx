import styled from "styled-components";

const S = {};

S.LogInPage = styled.div`
width: 100%;
height: 100%;

display: flex;
flex-direction: column;
justify-content: space-between;
`;

// ============== Log in form wrapper ================

S.LogInFormWrapper = styled.div`
flex-basis: 45%;
`;
// ============== Oauth wrapper ================
S.OauthBtnsWrapper = styled.div`
flex-basis: 45%;
`;

export default S;
