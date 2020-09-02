import styled from "styled-components";

const S = {};

S.FormInputBlock = styled.div`
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  padding: 0 0.2em;
  padding-bottom: 0.4em;
  position: relative;

  transition: all 250ms linear;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1000px) and (orientation: landscape) {
    margin-bottom: 1.2rem;
  }

  & .styled-svg {
    --size: 1.2em;
    width: var(--size);
    height: var(--size);
    margin-right: 0.6em;
    fill: ${(props) => props.theme.FormInput.svg};
  }
`;

S.InputField = styled.input`
  width: 80%;
  align-self: flex-end;
  font-size: 0.9em;
  border: 0;
  background: 0;
  outline: 0;

  position: relative;

  color: ${(props) => props.theme.FormInput.text};

  &:focus + .styled_label,
  &:valid + .styled_label,
  &.active + .styled_label {
    font-size: 0.6em;
    padding: 0.7em 1.5em;
    transform: translateY(-1.4em);
  }

  &:required {
    box-shadow: none;
  }
`;

S.Label = styled.label`
  position: absolute;
  left: 2em;
  color: ${(props) => props.theme.FormInput.placeHolder};
  opacity: 1;
  font-weight: 300;
  // font-size: 16px;

  transition: all 150ms linear;

  pointer-events: none;
`;

S.ForgotPassBtn = styled.button`
  background: 0;
  border: 0;
  outline: 0;

  font-weight: 500;

  cursor: pointer;

  font-size: 0.7em;
  position: absolute;

  color: ${(props) => props.theme.FormInput.forgotPassBtn_text};
  bottom: -2em;
  right: 0;

  &:hover {
    text-decoration: underline;
  }
`;

export default S;
