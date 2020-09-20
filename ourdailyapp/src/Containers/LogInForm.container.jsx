import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Form } from "../Components/Compound Components";

import useLogInForm from "../hooks/useLogInForm.hooks";
import { emailSignInStart } from "../redux/Auth/auth.actions";
import { setClickedAlertSvg_loginForm } from "../redux/logInForm/logInForm.actions";

import { ReactComponent as UserSvg } from "../assets/svg/user.svg";
import { ReactComponent as LockSvg } from "../assets/svg/password.svg";
import { ReactComponent as AlertSvg } from "../assets/svg/alert.svg";

const LogInForm = () => {
  const [logInDetails, setLogInDetails] = useState({ email: "", password: "" });

  const { logInAlertObj, clickedAlertSvg } = useLogInForm();

  const dispatch = useDispatch();

  const { email, password } = logInDetails;

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setLogInDetails((prevLogInDetails) => ({
      ...prevLogInDetails,
      [name]: value,
    }));
  }, []);

  return (
    <Form>
      <Form.Group>
        <Form.InputSvg>
          <UserSvg />
        </Form.InputSvg>

        <Form.Input
          onChange={handleInputChange}
          type="email"
          value={email}
          name="email"
          className={`${email !== "" && "active"}`}
          hasSvgComponent={true}
        />
        <Form.Label hasSvgComponent={true} className="styled_label">
          Email
        </Form.Label>

        {logInAlertObj.emailAlerts.length > 0 &&
          !(clickedAlertSvg === "email") && (
            <Form.AlertSvg
              onClick={() => {
                console.log("clicked alert svg");
                dispatch(setClickedAlertSvg_loginForm("email"));
              }}
            >
              <AlertSvg />
            </Form.AlertSvg>
          )}
        {clickedAlertSvg === "email" && (
          <Form.AlertTooltip className="top">
            {logInAlertObj.emailAlerts.map((alertMsg) => `${alertMsg}${"\n"}`)}
          </Form.AlertTooltip>
        )}
      </Form.Group>

      <Form.Group>
        <Form.InputSvg>
          <LockSvg />
        </Form.InputSvg>

        <Form.Input
          onChange={handleInputChange}
          type="password"
          value={password}
          name="password"
          className={`${password !== "" && "active"}`}
          hasSvgComponent={true}
        />
        <Form.Label hasSvgComponent={true} className="styled_label">
          Password
        </Form.Label>

        {logInAlertObj.formAlerts.length > 0 &&
          !(clickedAlertSvg === "password") && (
            <Form.AlertSvg
              onClick={() => {
                console.log("clicked alert svg");
                dispatch(setClickedAlertSvg_loginForm("password"));
              }}
            >
              <AlertSvg />
            </Form.AlertSvg>
          )}

        <Form.ForgotPassBtn>Forgot Password?</Form.ForgotPassBtn>
        {clickedAlertSvg === "password" && (
          <Form.AlertTooltip className="top">
            {logInAlertObj.formAlerts.map((alertMsg) => `${alertMsg}${"\n"}`)}
          </Form.AlertTooltip>
        )}
      </Form.Group>

      <Form.LogInBtn
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          dispatch(emailSignInStart(logInDetails));
        }}
      >
        Log In
      </Form.LogInBtn>
    </Form>
  );
};

export default LogInForm;
