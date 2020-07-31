import React from "react";
import "./profileDropDownHeader.style.scss";

import { displayNameLengthFilter } from "../../utils/dataFilter.js";
import {
  localStorageGetItem,
  localStorageIsItemExist,
} from "../../utils/localStorage";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserLogged } from "../../redux/user/user.selectors";

import { Dropdown } from "react-bootstrap";

const DropDownHeader = ({ userLogged, currentUser }) => {
  return localStorageIsItemExist("user") || userLogged ? (
    [
      <Dropdown.Header key="1">Welcome Back!</Dropdown.Header>,
      <Dropdown.Item key="2" disabled className="userName">
        {localStorageIsItemExist("user")
          ? displayNameLengthFilter(localStorageGetItem("user").displayName, 20)
          : null}
      </Dropdown.Item>,
    ]
  ) : (
    <Dropdown.Header>Hi, Good morning</Dropdown.Header>
  );
};

const mapStateToProps = createStructuredSelector({
  userLogged: selectUserLogged,
});

export default connect(mapStateToProps)(DropDownHeader);
