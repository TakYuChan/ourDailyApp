import React from "react";

const Loader = ({ SpinnerComponent, children, isLoading, ...otherProps }) => {
  console.log("Loader rendered");
  return isLoading ? <SpinnerComponent /> : children();
};

export default Loader;
