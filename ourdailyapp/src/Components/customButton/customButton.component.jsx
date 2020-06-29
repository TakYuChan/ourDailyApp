import React from "react";
import "./customButton.style.scss";

import ReactToolTip from "react-tooltip";

const CustomButton = (props) => {
  return (
    <div className="customButton">
      <button
        className={props.className}
        onClick={props.onClick}
        data-tip
        data-for={props.dataFor}
      >
        <span className="button-text">{props.children}</span>
      </button>

      {props.withToolTip && (
        <ReactToolTip
          arrowColor="#454e56"
          id={props.toolTipId}
          place={props.toolTipPlace}
          effect={props.toolTipEffect}
          className={props.toolTipClass}
        >
          {props.toolTipText}
        </ReactToolTip>
      )}
    </div>
  );
};

export default CustomButton;
