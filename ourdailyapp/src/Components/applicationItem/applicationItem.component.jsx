import React from "react";

import "./applicationItem.style.scss";

import { ReactComponent as Todosvg } from "../../assets/todolist.svg";
import { ReactComponent as Coloorsvg } from "../../assets/coloors-svg.svg";

import { Link } from "react-router-dom";

const ApplicationItem = ({ children, iconSource }) => {
  let CustomSvg = null;
  let className = null;

  // ============ Switch -> icon source ==============
  switch (iconSource) {
    case "todo":
      CustomSvg = Todosvg;
      className = "todoLink";
      break;
    case "coloors":
      CustomSvg = Coloorsvg;
      className = "coloorsLink";
      break;
    default:
      CustomSvg = "Error: application item source";
  }

  return (
    <Link to="/todolist" className={`${className} link`}>
      <div className="application-item">
        <CustomSvg />
        <span className="link-text">{children}</span>
      </div>
    </Link>
  );
};

export default ApplicationItem;
