import styled from "styled-components";

const S = {};

S.SignUpForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

S.SignUpButton = styled.button`
  font-size: 0.6em;
  border: 2px solid ${(props) => props.theme.SignUpForm.SignUpButton_border};
  padding: 0.5em 2.4em;
  align-self: center;
  background: ${(props) => props.theme.SignUpForm.SignUpButton_bg};
  color: ${(props) => props.theme.SignUpForm.SignUpButton_text};

  transition: opacity 250ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  margin-top: 2em;

  font-weight: 700;

  cursor: pointer;
`;

export default S;
