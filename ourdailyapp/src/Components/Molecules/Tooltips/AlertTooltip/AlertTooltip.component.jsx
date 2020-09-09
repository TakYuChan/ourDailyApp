import React, { useEffect, useRef, useCallback } from "react";
import S from "./AlertTooltip.style";

import { connect } from "react-redux";
import { setClickedAlertSvg } from "../../../../redux/signUpForm/signUpform.actions";

const AlertTooltip = ({ alerts, place, setClickedAlertSvg }) => {
  const node = useRef();

  const dismissAlertTooltip = useCallback(
    (e) => {
      // If we click inside of our ref, nothing happens
      if (node.current.contains(e.target)) {
        return;
      }
      // Otherwise close the alertTooltip
      setClickedAlertSvg("");
    },
    [setClickedAlertSvg]
  );

  useEffect(() => {
    // add eventListener to document when mounted
    document.addEventListener("mousedown", dismissAlertTooltip);
    // remove eventListener from document when unmounted
    return () => {
      document.removeEventListener("mousedown", dismissAlertTooltip);
    };
  }, [dismissAlertTooltip]);

  useEffect(() => {
    console.log("AlertTooltip rerendered!");
  });

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
