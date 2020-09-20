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

Form.Block = function FormBlock({ children, ...restProps }) {
  return <S.Block {...restProps}>{children}</S.Block>;
};

Form.RadioInputGroup = function FormRadipInputGroup({
  children,
  ...restProps
}) {
  return <S.RadioInputGroup {...restProps}>{children}</S.RadioInputGroup>;
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

Form.RadioInput = function FormRadioInput({ ...restProps }) {
  return <S.RadioInput {...restProps} />;
};

Form.RadioLabel = function FormRadioSpan({ children, ...restProps }) {
  return <S.RadioLabel {...restProps}>{children}</S.RadioLabel>;
};

Form.DatePickerInput = function FormDatePickerInput({ ...restProps }) {
  return <S.DatePickerInput {...restProps} />;
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

Form.AlertTooltip = function FormAlertTooltip({
  setClickedAlertSvg,
  children,
  ...restProps
}) {
  const node = useRef();

  const dismissAlertTooltip = useDismiss(node, setClickedAlertSvg);

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
