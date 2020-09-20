import React, { useRef, useEffect } from "react";

import useDismiss from "../../../hooks/useDismiss.hooks";
import { setClickedAlertSvg_loginForm } from "../../../redux/logInForm/logInForm.actions";

import S from "./styles/Form.style";

export default function Form({ children, ...restProps }) {
  return <S.FormContainer {...restProps}>{children}</S.FormContainer>;
}

Form.Group = function FormGroup({ children, ...restProps }) {
  return <S.FormGroup {...restProps}>{children}</S.FormGroup>;
};

Form.InputSvg = function FormInputSvg({ children, ...restProps }) {
  return <S.InputSvg {...restProps}>{children}</S.InputSvg>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <S.FormInput {...restProps}>{children}</S.FormInput>;
};

Form.Label = function FormLabel({ ...restProps }) {
  return <S.FormLabel {...restProps} />;
};

Form.AlertSvg = function FormAlertSvg({ children, ...restProps }) {
  return <S.AlertSvg {...restProps}>{children}</S.AlertSvg>;
};

Form.LogInBtn = function FormLogInBtn({ children, ...restProps }) {
  return <S.LogInBtn {...restProps}>{children}</S.LogInBtn>;
};

Form.SignUpBtn = function FormSignUpBtn({ children, ...restProps }) {
  return <S.SignUpBtn {...restProps}>{children}</S.SignUpBtn>;
};

Form.AlertTooltip = function FormAlertTooltip({ children, ...restProps }) {
  const node = useRef();

  const dismissAlertTooltip = useDismiss(node, setClickedAlertSvg_loginForm);

  useEffect(() => {
    // add eventListener to document when mounted
    document.addEventListener("mousedown", dismissAlertTooltip);
    // remove eventListener from document when unmounted
    return () => {
      document.removeEventListener("mousedown", dismissAlertTooltip);
    };
  }, [dismissAlertTooltip]);
  return (
    <S.AlertTooltip {...restProps} ref={node}>
      {children}
    </S.AlertTooltip>
  );
};

Form.ForgotPassBtn = function FormForgitPassBtn({ children, ...restProps }) {
  return (
    <S.ForgotPassBtn {...restProps} type="button">
      {children}
    </S.ForgotPassBtn>
  );
};
