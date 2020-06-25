import React from "react";
import "./customTag.style.scss";

const CustomTag = ({ children, background }) => (
  <span className="custom-tag" style={{ backgroundColor: `${background}` }}>
    {children}
  </span>
);

export default CustomTag;
