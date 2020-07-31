import React from "react";
import "./profileDropDownHeader.style.scss";

import { displayNameLengthFilter } from "../../utils/dataFilter.js";

import { Dropdown } from "react-bootstrap";

const DropDownHeader = ({ currentUser }) => {
  let userName = null;

  userName = displayNameLengthFilter(currentUser, 24);

  return currentUser ? (
    [
      <Dropdown.Header key="1">
        {JSON.parse(localStorage.getItem("user")).displayName}
      </Dropdown.Header>,
      <Dropdown.Item key="2" disabled className="userName">
        {userName}
      </Dropdown.Item>,
    ]
  ) : (
    <Dropdown.Header>Hi, Good morning</Dropdown.Header>
  );
};

export default DropDownHeader;
