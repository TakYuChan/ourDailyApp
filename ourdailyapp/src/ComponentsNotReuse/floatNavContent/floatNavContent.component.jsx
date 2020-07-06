import React from "react";
import S from "./floatNavContent.style";

const FloatNavContent = ({ hoverNavItem }) => {
  let contentTitle = null;
  let contentText = null;

  switch (hoverNavItem) {
    case "appstore":
      contentTitle = "App Store";
      contentText =
        "Have a look of my mini-applications and buy whatever your like!";
      break;
    case "linkedin":
      contentTitle = "LinkedIn";
      contentText = "Click to check my professional profile on LinkedIn";
      break;

    case "github":
      contentTitle = "Github";
      contentText = "Have a look at my other projects on Github";
      break;
    default:
      contentTitle = "Welcome";
      contentText = "Welcome to our website";
  }

  return (
    <S.FloatNavContentWrapper className="float-nav-content">
      <S.TitleText className="nav-content-title">{contentTitle}</S.TitleText>
      <S.Text className="nav-content-text">{contentText}</S.Text>
    </S.FloatNavContentWrapper>
  );
};

export default FloatNavContent;
