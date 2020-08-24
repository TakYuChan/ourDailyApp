import React from "react";
import S from "./signInAndSignUp.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectRenderFor,
  selectShowSignInUpModal,
} from "../../redux/signInUp/signInUp.selector";
import { signInUpOnHide } from "../../redux/signInUp/signInUp.actions";

// import { Modal } from "react-bootstrap";

import SignIn from "../../Components/sign_in/sign_in.component";
import SignUp from "../../Components/sign_up/sign_up.component";
import RegisterSuccessScene from "../../Components/registerSuccess/registerSuccess.component";

const SignInAndSignUp = ({ renderFor, showSignInUpModal, signInUpOnHide }) => {
  //   ================================= Life Cycle Hooks =================================

  return (
    <div className="signInSignUpModal">
      <S.Modal
        show={showSignInUpModal}
        onHide={() => {
          signInUpOnHide();
        }}
        centered
      >
        {renderFor === "signIn" && <SignIn />}
        {renderFor === "signUp" && <SignUp />}
        {renderFor === "registerSuccess" && <RegisterSuccessScene />}
      </S.Modal>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  renderFor: selectRenderFor,
  showSignInUpModal: selectShowSignInUpModal,
});

const mapDispatchToProps = (dispatch) => ({
  signInUpOnHide: () => dispatch(signInUpOnHide()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInAndSignUp);
