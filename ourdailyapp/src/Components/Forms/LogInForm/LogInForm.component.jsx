import React from "react";
import S from "./LogInForm.style";

import { ReactComponent as UserSvg } from "../../../assets/svg/user.svg";
import { ReactComponent as LockSvg } from "../../../assets/svg/password.svg";

import FormInput from "../../FormElements/FormInput/FormInput.component";

// @importedBy  LogInPage
const LogInForm = () => {
  return (
    <S.LogInForm>
      <FormInput
        SvgComponent={UserSvg}
        placeholder="Username"
        type="email"
        hasForgotPassBtn={false}
      />
      <FormInput
        SvgComponent={LockSvg}
        placeholder="Password"
        type="password"
        hasForgotPassBtn={true}
      />
    </S.LogInForm>
  );
};

export default LogInForm;
