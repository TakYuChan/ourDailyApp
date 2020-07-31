import React from "react";
import "./signInSignOutButton.style.scss";

import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { selectUserLogged } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { userLoggedOFF } from "../../redux/user/user.actions";
import { toggleSignInUpModal } from "../../redux/signInUp/signInUp.actions";
import { localStorageClearItem } from "../../utils/localStorage";

import { Dropdown } from "react-bootstrap";

const SignInSignOutButton = ({
  userLogged,
  userLoggedOFF,
  toggleSignInUpModal,
}) => {
  return userLogged ? (
    <Dropdown.Item
      className="btn--openSignOutModal"
      onClick={() => {
        auth.signOut();
        localStorageClearItem("user");
        userLoggedOFF();
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
  userLogged: selectUserLogged,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSignInUpModal: () => dispatch(toggleSignInUpModal()),
  userLoggedOFF: () => dispatch(userLoggedOFF()),
  // userLoggedOn: () => dispatch(userLoggedOn()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInSignOutButton);
