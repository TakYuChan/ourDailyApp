import React from "react";
import "./signInSignOutButton.style.scss";

import { Dropdown } from "react-bootstrap";

import { auth } from "../../firebase/firebase.utils";

const SignInSignOutButton = ({
  handleSignInSignUpShow,
  userlogStateChanged,
  userLogged,
}) => {
  return userLogged === true ? (
    <Dropdown.Item
      className="btn--openSignOutModal"
      onClick={() => {
        auth.signOut();
        userlogStateChanged();
      }}
    >
      <i className="iconfont icon-signOut"></i>
      Sign Out
    </Dropdown.Item>
  ) : (
    <Dropdown.Item
      className="btn--openSignInModal"
      onClick={handleSignInSignUpShow}
    >
      <i className="iconfont icon-signIn"></i>
      Sign In
    </Dropdown.Item>
  );
};

export default SignInSignOutButton;
