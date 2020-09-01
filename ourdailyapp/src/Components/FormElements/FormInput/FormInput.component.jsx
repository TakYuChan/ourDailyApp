import React, { useState } from "react";
import S from "./FormInput.style";

const FormInput = ({ SvgComponent, placeholder, type, hasForgotPassBtn }) => {
  const [value, setValue] = useState("");

  //@importedBy   LogInForm
  return (
    <S.FormInputBlock beforeContent={placeholder}>
      <SvgComponent className="styled-svg" />
      <S.InputField
        required
        type={type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={value !== "" && "active"}
      />
      <S.Label className="styled_label">{placeholder}</S.Label>
      {hasForgotPassBtn && (
        <S.ForgotPassBtn type="button">Forgot Password?</S.ForgotPassBtn>
      )}
    </S.FormInputBlock>
  );
};

export default FormInput;
