import React from "react";
import S from "./withPreloader.style";

const WithPreloader = (WrappedComponent) => ({
  isLoading,
  applications,
  ...otherProps
}) => {
  return isLoading
    ? [...Array(6)].map((e, index) => (
        <S.LoadingCardContainer key={index} className={`card`}>
          <S.LoadingImgWrapper className="img-loader"></S.LoadingImgWrapper>
          <S.LoadingTitleText className="text-loader"></S.LoadingTitleText>
          <S.LoadingDescriptionText className="text-loader"></S.LoadingDescriptionText>
          <S.LoadingBtnStart className="text-loader"></S.LoadingBtnStart>
        </S.LoadingCardContainer>
      ))
    : applications.map((app, index) => (
        <WrappedComponent key={index} {...otherProps} id={app.id} app={app} />
      ));
};

export default WithPreloader;
