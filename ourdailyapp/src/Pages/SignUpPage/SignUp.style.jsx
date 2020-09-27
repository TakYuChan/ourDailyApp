import styled from "styled-components";

const S = {};

S.SignUpPageContainer = styled.div`

  width 90%;
  height: 250px;
  max-width: 500px;
  

`;

S.SignUpWrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-area: signUpPage;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 700px) {
    flex-direction: row;
  }
`;

export default S;
