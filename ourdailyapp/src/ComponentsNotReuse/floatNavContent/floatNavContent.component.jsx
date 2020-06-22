import React from "react";

import "./floatNavContent.style.scss";

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
    <div className="float-nav-content">
      <h2 className="nav-content-title">{contentTitle}</h2>
      <h3 className="nav-content-text">{contentText}</h3>
    </div>
  );
};

export default FloatNavContent;
