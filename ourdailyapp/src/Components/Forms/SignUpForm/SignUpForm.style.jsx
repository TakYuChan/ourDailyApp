import styled, { css } from "styled-components";

const S = {};

const labelStyle = css`
  color: ${(props) => props.theme.FormInput.placeHolder};
  opacity: 1;
  font-weight: 300;

  transition: all 150ms linear;

  font-size: 0.6em;
  position: relative;
  cursor: pointer;
`;

const originalRadioBtnStyle = css`
  display: none;

  &:checked + .S_CustomSpan {
    border-color: ${(props) => props.theme.SignUpPage.genderRadiusBtn_hover};
    background: ${(props) => props.theme.SignUpPage.genderRadiusBtn_hover};
  }
`;

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

  display: flex;
  justify-content: space-between;

  transition: opacity 250ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  margin-top: 2em;

  font-weight: 700;

  cursor: pointer;

  & > .S_PixelSpinner {
    margin-left: 0.5em;
  }
`;

// ====================== Gender and Date wrapper =============================
S.GenderAndDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
// ====================== Gender Block =============================

S.GenderBlock = styled.div`
  width: 35%;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

S.GenderLabel = styled.label`
  ${labelStyle}
`;

S.RadioBtnsWrapper = styled.div`
  width: 55%;
  display: flex;

  align-items: center;
  justify-content: flex-end;
`;

S.RadioBtnBlock = styled.label`
  cursor: pointer;
`;

S.OriginalRadioInput = styled.input`
  ${originalRadioBtnStyle}
`;

S.CustomSpan = styled.span`
  font-size: 0.4em;
  padding: 0.3em 1em;
  border: 0.2em solid white;
  display: inline-block;
  color: white;
  text-transform: uppercase;

  margin-bottom: 0.5em;

  --radius: 6px;

  &.S_CustomSpan_female {
    border-right: 0.1em solid white;
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }

  &.S_CustomSpan_male {
    border-left: 0.1em solid white;
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
`;

// ====================== Form Date Picker =============================
S.FormDatePickerBlock = styled.div`
  width: 60%;
  border-bottom: 1px solid white;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  // padding-bottom: 0.4em;
  position: relative;

  transition: all 250ms linear;
`;

S.DatePicker = styled.input`
  align-self: flex-end;

  border: 0;
  background: 0;
  outline: 0;

  font-size: 0.6em;
  color: ${(props) => props.theme.FormInput.text};

  font-weight: 700;
  text-transform: uppercase;
`;
S.PickerLabel = styled.label`
  ${labelStyle}
`;

export default S;
