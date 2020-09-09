import React, { useEffect, useRef } from "react";
import S from "./AlertTooltip.style";

import { connect } from "react-redux";
import { setClickedAlertSvg } from "../../../../redux/signUpForm/signUpform.actions";

const AlertTooltip = ({ alerts, place, setClickedAlertSvg }) => {
  const node = useRef();

  const handleClick = (e) => {
    // If we click inside of our ref, nothing happens
    if (node.current.contains(e.target)) {
      return;
    }
    // Otherwise close the alertTooltip
    setClickedAlertSvg("");
  };

  useEffect(() => {
    // add eventListener to document when mounted
    document.addEventListener("mousedown", handleClick);
    // remove eventListener from document when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);

  // place: indicate the direction of the tooltip [top | right]
  return (
    <S.AlertTooltip className={place} ref={node}>
      {alerts.map((alertMsg) => `${alertMsg}${"\n"}`)}
    </S.AlertTooltip>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setClickedAlertSvg: (target) => dispatch(setClickedAlertSvg(target)),
});

export default connect(null, mapDispatchToProps)(AlertTooltip);
