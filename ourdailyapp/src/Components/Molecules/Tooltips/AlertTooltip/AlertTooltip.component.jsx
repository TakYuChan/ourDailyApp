import React, { useEffect, useRef } from "react";
import S from "./AlertTooltip.style";

import useDismiss from "../../../../hooks/useDismiss.hooks";

import { connect } from "react-redux";
import { setClickedAlertSvg } from "../../../../redux/signUpForm/signUpform.actions";
import { setClickedAlertSvg_loginForm } from "../../../../redux/logInForm/logInForm.actions";

const AlertTooltip = ({
  alerts,
  place,
  setClickedAlertSvg,
  setClickedAlertSvg_loginForm,
  from,
}) => {
  const node = useRef();
  const action =
    from === "logInForm" ? setClickedAlertSvg_loginForm : setClickedAlertSvg;
  const dismissAlertTooltip = useDismiss(node, action);
  useEffect(() => {
    // add eventListener to document when mounted
    document.addEventListener("mousedown", dismissAlertTooltip);
    // remove eventListener from document when unmounted
    return () => {
      document.removeEventListener("mousedown", dismissAlertTooltip);
    };
  }, [dismissAlertTooltip]);

  // place: indicate the direction of the tooltip [top | right]
  return (
    <S.AlertTooltip className={place} ref={node}>
      {alerts.map((alertMsg) => `${alertMsg}${"\n"}`)}
    </S.AlertTooltip>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setClickedAlertSvg: (target) => dispatch(setClickedAlertSvg(target)),
  setClickedAlertSvg_loginForm: (target) =>
    dispatch(setClickedAlertSvg_loginForm(target)),
});

export default connect(null, mapDispatchToProps)(AlertTooltip);
