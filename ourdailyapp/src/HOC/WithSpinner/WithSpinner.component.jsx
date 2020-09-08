import React from "react";
import { PixelSpinner } from "react-epic-spinners";

const withSpinner = ({
  WrappedComponent,
  size,
  color,
  animationDuration,
  className,
  style,
}) => ({ isLoading }) => {
  return isLoading ? (
    <PixelSpinner
      size={size}
      color={color}
      animationDuration={animationDuration}
      style={style}
      pixelSize={pixelSize}
    ></PixelSpinner>
  ) : (
    <WrappedComponent />
  );
};

export default withSpinner;
