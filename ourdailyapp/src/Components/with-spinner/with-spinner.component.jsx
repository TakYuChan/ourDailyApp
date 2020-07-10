import React from "react";
import S from "./with-spinner.style";

const WithSpinner = (TargetComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <S.SpinnerOverlay>
      <S.SpinnerContainer />
    </S.SpinnerOverlay>
  ) : (
    <TargetComponent {...otherProps} />
  );
};

export default WithSpinner;
