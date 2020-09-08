import React from "react";
import S from "./FormInput.style";

import { connect } from "react-redux";
import { setClickedAlertSvg } from "../../../redux/signUpForm/signUpform.actions";

import AlertTooltip from "../../Tooltips/AlertTooltip/AlertTooltip.component";

import { ReactComponent as AlertSvg } from "../../../assets/svg/alert.svg";

const FormInput = ({
  SvgComponent,
  placeholder,
  type,
  hasForgotPassBtn,
  handleInputChange,
  alerts,
  setClickedAlertSvg,
  place,
  hasAlertTooltip,
  ...otherProps
}) => {
  // hasAlerts -> to see if we need show AlertSvg or not
  let hasAlerts = false;
  if (alerts && alerts.length > 0) {
    hasAlerts = true;
  }

  //@importedBy   LogInForm SignUpForm
  //@styledProps  Size / Position of label
  return (
    <S.FormInputBlock className={`${hasAlerts ? "alert" : ""} hi`}>
      {SvgComponent !== undefined && <SvgComponent className="S_svg" />}
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
      {hasAlerts && !hasAlertTooltip && (
        <AlertSvg
          className="S_AlertSvg"
          onClick={() => setClickedAlertSvg(otherProps.name)}
        />
      )}
      {/* =================== Alert Tooltip =================== */}
      {hasAlertTooltip && <AlertTooltip place={place} alerts={alerts} />}
    </S.FormInputBlock>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setClickedAlertSvg: (target) => dispatch(setClickedAlertSvg(target)),
});

export default connect(null, mapDispatchToProps)(FormInput);
