import React from "react";
import "./signInSignOutButton.style.scss";

import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { toggleSignInUpModal } from "../../redux/signInUp/signInUp.actions";
import { localStorageClearItem } from "../../utils/localStorage";

import { Dropdown } from "react-bootstrap";

import PropTypes from "prop-types";

const SignInSignOutButton = ({
  toggleSignInUpModal,
  isLogged,
  signOutStart,
}) => {
  return isLogged ? (
    <Dropdown.Item
      className="btn--openSignOutModal"
      onClick={() => {
        signOutStart();
        localStorageClearItem("user");
      }}
    >
      <i className="iconfont icon-signOut"></i>
      Sign Out
    </Dropdown.Item>
  ) : (
    <Dropdown.Item
      className="btn--openSignInModal"
      onClick={() => {
        toggleSignInUpModal();
      }}
    >
      <i className="iconfont icon-signIn"></i>
      Sign In
    </Dropdown.Item>
  );
};

const mapStateToProps = createStructuredSelector({
  userAuth: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSignInUpModal: () => dispatch(toggleSignInUpModal()),
  signOutStart: () => dispatch(signOutStart()),
});

SignInSignOutButton.propTypes = {
  userAuth: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInSignOutButton);
