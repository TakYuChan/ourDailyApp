import React, {useState} from "react";
import S from "./SignUpForm.style";

import FormInput from "../../FormElements/FormInput/FormInput.component";

const SignUpForm = () => {
  
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    gender: null,
    birthday: null,
  });

  const {name, email, password, passwordConfirm} = signUpDetails;

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setSignUpDetails({...signUpDetails, [name]: value});
  };

  return (
    <S.SignUpForm>
      <FormInput placeholder="Your name" type="text" name="name" value={name} handleInputChange={handleInputChange} />
      <FormInput placeholder="Your email" type="email" name="email" value={email} handleInputChange={handleInputChange}/>
      <FormInput placeholder="your password" type="password" name="password" value={password} handleInputChange={handleInputChange}/>
      <FormInput placeholder="Confirm password" type="password" name="passwordConfirm" value={passwordConfirm} handleInputChange={handleInputChange}/>
      <S.GenderAndDateWrapper>
        <S.GenderBlock>
          <S.GenderLabel>Gender</S.GenderLabel>
          <S.RadioBtnsWrapper>
            <S.RadioBtnBlock>
              <S.OriginalRadioInput type="radio" value="Female" name="gender" onChange={handleInputChange}/>
              <S.CustomSpan className="S_CustomSpan S_CustomSpan_female">
                F
              </S.CustomSpan>
            </S.RadioBtnBlock>

            <S.RadioBtnBlock>
              <S.OriginalRadioInput type="radio" value="Male" name="gender" onChange={handleInputChange}/>
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
          <S.DatePicker type="date" name="birthday" onChange={handleInputChange} required />
        </S.FormDatePickerBlock>
      </S.GenderAndDateWrapper>
      <S.SignUpButton type="submit" name="birthday">
        SIGN UP
      </S.SignUpButton>
    </S.SignUpForm>
  );
};

export default SignUpForm;
