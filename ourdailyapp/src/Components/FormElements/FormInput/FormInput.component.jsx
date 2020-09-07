import React from "react";
import S from "./FormInput.style";

const FormInput = ({ SvgComponent, placeholder, type, hasForgotPassBtn, handleInputChange, ...otherProps}) => {

  //@importedBy   LogInForm SignUpForm
  //@styledProps  Size / Position of label
  return (
    <S.FormInputBlock beforeContent={placeholder}>
      {SvgComponent !== undefined && <SvgComponent className="styled-svg" />}
      <S.InputField
        required
        type={type}
        onChange={handleInputChange}
        className={otherProps.value !== "" && "active"}
        styled_hasSvgComponent={SvgComponent}
        {...otherProps}
      />
      <S.Label className="styled_label" styled_hasSvgComponent={SvgComponent}>
        {placeholder}
      </S.Label>
      {hasForgotPassBtn && (
        <S.ForgotPassBtn type="button">Forgot Password?</S.ForgotPassBtn>
      )}
    </S.FormInputBlock>
  );
};

export default FormInput;
