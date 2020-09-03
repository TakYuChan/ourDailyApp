import styled from "styled-components";

const S = {};

S.LogInForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

S.LogInButton = styled.button`
  font-size: 0.6em;
  border: 0;
  padding: 0.5em 2.4em;
  align-self: center;
  background: ${(props) => props.theme.LogInForm.logInBtn_bg};
  color: ${(props) => props.theme.LogInForm.logInBtn_text};

  font-weight: 700;

  cursor: pointer;
`;

export default S;
