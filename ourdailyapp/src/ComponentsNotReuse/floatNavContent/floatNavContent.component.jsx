import React from "react";

import "./floatNavContent.style.scss";

const FloatNavContent = ({ hoverNavItem }) => {
  let contentTitle = null;
  let contentText = null;

  switch (hoverNavItem) {
    case "todo":
      contentTitle = "To do list";
      contentText = "You can note down whatever you think its important here";
      break;
    case "games":
      contentTitle = "Games";
      contentText = "Have some fun with our friends with my games";
      break;

    case "Github":
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
