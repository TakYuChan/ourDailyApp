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
      <S.SignUpButton type="submit">LOG IN</S.SignUpButton>
    </S.SignUpForm>
  );
};

export default SignUpForm;
