import React, { useState, useCallback } from "react";
import S from "./LogInForm.style";

import { ReactComponent as UserSvg } from "../../../assets/svg/user.svg";
import { ReactComponent as LockSvg } from "../../../assets/svg/password.svg";

import FormInput from "../../Molecules/FormElements/FormInput/FormInput.component";

// @importedBy  LogInPage
const LogInForm = () => {
  const [logInDetails, setLogInDetails] = useState({ email: "", password: "" });

  const { email, password } = logInDetails;

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setLogInDetails((prevLogInDetails) => ({
      ...prevLogInDetails,
      [name]: value,
    }));
  }, []);

  return (
    <S.LogInForm>
      <FormInput
        SvgComponent={UserSvg}
        placeholder="Email"
        type="email"
        name="email"
        hasForgotPassBtn={false}
        handleInputChange={handleInputChange}
        value={email}
      />
      <FormInput
        SvgComponent={LockSvg}
        placeholder="Password"
        type="password"
        name="password"
        hasForgotPassBtn={true}
        handleInputChange={handleInputChange}
        value={password}
      />
      <S.LogInButton type="submit">LOG IN</S.LogInButton>
    </S.LogInForm>
  );
};

export default LogInForm;
