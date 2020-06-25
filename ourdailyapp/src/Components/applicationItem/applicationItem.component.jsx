import React from "react";

import "./applicationItem.style.scss";

import { Link } from "react-router-dom";

const ApplicationItem = ({ app }) => {
  const { name, route, svg } = app;

  return (
    <Link to={`/${route}`} className={`link`}>
      <div className="application-item">
        {svg}
        <span className="link-text">{name}</span>
      </div>
    </Link>
  );
};

export default ApplicationItem;
