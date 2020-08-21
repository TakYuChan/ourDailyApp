import React from "react";
import "./profileDropDownHeader.style.scss";

import { displayNameLengthFilter } from "../../utils/dataFilter.js";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import PropTypes from "prop-types";

import { Dropdown } from "react-bootstrap";

const DropDownHeader = ({ currentUser, isLogged }) => {
  return isLogged ? (
    [
      <Dropdown.Header key="1">Welcome Back!</Dropdown.Header>,
      <Dropdown.Item key="2" disabled className="userName">
        {displayNameLengthFilter(currentUser.displayName, 20)}
      </Dropdown.Item>,
    ]
  ) : (
    <Dropdown.Header>Hi, Good morning</Dropdown.Header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

DropDownHeader.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(DropDownHeader);
