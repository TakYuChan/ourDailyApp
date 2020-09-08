import React from "react";
import S from "./FormInput.style";
import {ReactComponent as AlertSvg} from "../../../assets/svg/alert.svg";

const FormInput = ({ SvgComponent, placeholder, type, hasForgotPassBtn, handleInputChange, alerts, ...otherProps}) => {



  
  let hasAlerts = false;
  if (alerts && alerts.length > 0 ) {
    hasAlerts = true;
  }

  //@importedBy   LogInForm SignUpForm
  //@styledProps  Size / Position of label
  return (
    <S.FormInputBlock className={`${hasAlerts ? "alert" : ""} hi`}>
      {SvgComponent !== undefined && <SvgComponent className="styled_svg" />}
      <S.InputField
        type={type}
        onChange={handleInputChange}
        className={otherProps.value !== "" && "active"}
        styled_hasSvgComponent={SvgComponent}
        {...otherProps}
        required
      />
      <S.Label className="styled_label" styled_hasSvgComponent={SvgComponent}>
        {placeholder}
      </S.Label>
      {/* =================== Forgot Pass Btn =================== */}
      {hasForgotPassBtn && (
        <S.ForgotPassBtn type="button">Forgot Password?</S.ForgotPassBtn>
      )}
      {/* =================== Alerts =================== */}
      {/* {
        alerts && alerts.map(alert => {
          if(alerts.length !== 0) {
            return <AlertSvg/>
          }
        })
      } */}
    </S.FormInputBlock>
  );
};

export default FormInput;
