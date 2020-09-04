import React from "react";
import S from "./SignUpForm.style";

import FormInput from "../../FormElements/FormInput/FormInput.component";

const SignUpForm = () => {
  return (
    <S.SignUpForm>
      <FormInput placeholder="Your name" type="text" />
      <FormInput placeholder="Your email" type="email" />
      <FormInput placeholder="your password" type="password" />
      <FormInput placeholder="Confirm password" type="password" />
      <S.GenderAndDateWrapper>
        <S.GenderBlock>
          <S.GenderLabel>Gender</S.GenderLabel>
          <S.RadioBtnsWrapper>
            <S.RadioBtnBlock>
              <S.OriginalRadioInput type="radio" value="Female" name="gender" />
              <S.CustomSpan className="S_CustomSpan S_CustomSpan_female">
                F
              </S.CustomSpan>
            </S.RadioBtnBlock>

            <S.RadioBtnBlock>
              <S.OriginalRadioInput type="radio" value="Male" name="gender" />
              <S.CustomSpan className="S_CustomSpan S_CustomSpan_male">
                M
              </S.CustomSpan>
            </S.RadioBtnBlock>
          </S.RadioBtnsWrapper>
        </S.GenderBlock>
        <S.FormDatePickerBlock>
          <S.PickerLabel className="styled_pickerLlabel">
            Birthday
          </S.PickerLabel>
          <S.DatePicker type="date" required />
        </S.FormDatePickerBlock>
      </S.GenderAndDateWrapper>
      <S.SignUpButton type="submit" name="birthday">
        SIGN UP
      </S.SignUpButton>
    </S.SignUpForm>
  );
};

export default SignUpForm;
