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
          <S.RadioBtnsBlock>
            <S.Radiolabel for="female">F</S.Radiolabel>
            <S.FemaleRadio id="female" type="radio" value="F" name="gender" />
            <S.Radiolabel for="male">M</S.Radiolabel>
            <S.MaleRadio id="male" type="radio" value="M" name="gender" />
          </S.RadioBtnsBlock>
        </S.GenderBlock>
        <S.FormDatePickerBlock>
          <S.PickerLabel className="styled_pickerLlabel">
            Birthday
          </S.PickerLabel>
          <S.DatePicker type="date" required />
        </S.FormDatePickerBlock>
      </S.GenderAndDateWrapper>
      <S.SignUpButton type="submit">SIGN UP</S.SignUpButton>
    </S.SignUpForm>
  );
};

export default SignUpForm;
