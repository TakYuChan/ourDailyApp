import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import S from "./LogInForm.style";

import useLogInForm from "../../../hooks/useLogInForm.hooks";

import { emailSignInStart } from "../../../redux/Auth/auth.actions";

import { ReactComponent as UserSvg } from "../../../assets/svg/user.svg";
import { ReactComponent as LockSvg } from "../../../assets/svg/password.svg";

import FormInput from "../../Molecules/FormElements/FormInput/FormInput.component";

// @importedBy  LogInPage
const LogInForm = () => {
  const dispatch = useDispatch();
  const [logInDetails, setLogInDetails] = useState({ email: "", password: "" });
  const { logInAlertObj, clickedAlertSvg } = useLogInForm();

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
        alerts={logInAlertObj.emailAlerts}
        hasAlertTooltip={clickedAlertSvg === "email"}
        from="logInForm"
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
      <S.LogInButton
        type="submit"
        onClick={(event) => {
          event.preventDefault();

          dispatch(emailSignInStart(logInDetails));
        }}
      >
        LOG IN
      </S.LogInButton>
    </S.LogInForm>
  );
};

export default LogInForm;
