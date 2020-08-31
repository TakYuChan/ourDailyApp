import React from "react";
import S from "./FormInput.style";

const FormInput = ({ SvgComponent, placeholder, type, hasForgotPassBtn }) => {
  return (
    <S.FormInputBlock>
      <SvgComponent className="styled-svg" />
      <S.InputField placeholder={placeholder} type={type} />
      {hasForgotPassBtn && (
        <S.ForgotPassBtn type="button">Forgot Password?</S.ForgotPassBtn>
      )}
    </S.FormInputBlock>
  );
};

export default FormInput;
