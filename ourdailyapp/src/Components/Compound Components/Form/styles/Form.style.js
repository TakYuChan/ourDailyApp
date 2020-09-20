import styled from "styled-components";

const S = {};

S.FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

S.FormGroup = styled.div`
  border-bottom: 1px solid white;

  display: flex;
  align-items: center;
  padding: 0.4em 0.2em;
  position: relative;

  transition: all 250ms linear background 0;

  @media only screen and (min-device-width: 320px) and (max-device-width: 1000px) and (orientation: landscape) {
    margin-bottom: 1.2rem;
  }
`;

S.InputSvg = styled.div`
  & svg {
    --size: 1.2em;
    width: var(--size);
    height: var(--size);
    margin-right: 0.6em;
    fill: ${(props) => props.theme.FormInput.svg};
  }
`;

S.FormInput = styled.input`
  width: 80%;
  align-self: flex-end;
  border: 0;
  background: 0;
  outline: 0;

  position: relative;

  font-size: ${(props) => (props.hasSvgComponent ? "0.9em;" : "0.6em;")};
  color: ${(props) => props.theme.FormInput.text};

  &:focus + .styled_label,
  // &:valid + .styled_label,
  &.active + .styled_label {
    font-size: 0.6em;
    ${(props) => props.hasSvgComponent && "padding: 0.7em 0;"};
    padding-left: 1em;
    transform: translateY(-1.4em);
  }

  &:required {
    box-shadow: none;
  }
`;

S.FormLabel = styled.label`
  position: absolute;
  ${(props) => props.hasSvgComponent && "left: 2.2em"};
  color: ${(props) => props.theme.FormInput.placeHolder};
  opacity: 1;
  font-weight: 300;

  transition: all 150ms linear;

  font-size: ${(props) => (props.hasSvgComponent ? "0.9em;" : "0.6em;")};

  pointer-events: none;
`;

S.AlertSvg = styled.div`
  cursor: pointer;
  @keyframes pops {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  & svg {
    --size: 0.8em;
    width: var(--size);
    height: var(--size);
    animation: pops 300ms linear;
    position: absolute;
    right: 0;
    fill: ${(props) => props.theme.FormInput.alert_bg};
  }
`;

S.LogInBtn = styled.button`
  font-size: 0.6em;
  border: 0;
  padding: 0.5em 2.4em;
  background: ${(props) => props.theme.LogInForm.logInBtn_bg};
  color: ${(props) => props.theme.LogInForm.logInBtn_text};

  align-self: center;

  font-weight: 700;

  cursor: pointer;
`;

S.SignUpBtn = styled.button`
  border: 0;
  padding: 0.5em 2.4em;
  background: ${(props) => props.theme.LogInForm.logInBtn_bg};
  color: ${(props) => props.theme.LogInForm.logInBtn_text};

  font-weight: 700;

  cursor: pointer;
`;

S.AlertTooltip = styled.div`
  background: ${(props) => props.theme.FormInput.alert_bg};
  padding: 0.5em 1em;
  color: white;
  z-index: 2;
  border-radius: 3px;
  font-size: 0.5em;

  box-shadow: 0 0 0 1px rgba(139, 3, 0, 0.75), 0 1px 10px rgba(0, 0, 0, 0.35);

  position: absolute;

  white-space: pre-line;

  pointer-events: none;

  @keyframes pops {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: pops 250ms linear;

  &.top {
    right: 0;
    top: -20%;
  }

  &.right {
    left: 102%;
  }
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
