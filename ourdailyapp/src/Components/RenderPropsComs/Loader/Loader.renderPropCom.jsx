import React from "react";
import "./Loader.style.scss";

const Loader = ({ SpinnerComponent, children, isLoading, ...otherProps }) => {
  console.log("Loader rendered");
  return isLoading ? <SpinnerComponent /> : children();
};

export default Loader;
