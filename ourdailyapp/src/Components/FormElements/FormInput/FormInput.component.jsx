import React, { useState } from "react";
import S from "./FormInput.style";

const FormInput = ({ SvgComponent, placeholder, type, hasForgotPassBtn }) => {
  const [value, setValue] = useState("");

  //@importedBy   LogInForm SignUpForm
  //@styledProps  Size / Position of label
  return (
    <S.FormInputBlock beforeContent={placeholder}>
      {SvgComponent !== undefined && <SvgComponent className="styled-svg" />}
      <S.InputField
        required
        type={type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={value !== "" && "active"}
        styled_hasSvgComponent={SvgComponent}
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
