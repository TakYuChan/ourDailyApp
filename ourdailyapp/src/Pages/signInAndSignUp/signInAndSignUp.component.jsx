import React from "react";
import S from "./signInAndSignUp.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectRenderFor,
  selectShowSignInUpModal,
} from "../../redux/signInUp/signInUp.selector";
import {
  setRenderForSignIn,
  turnSignInUpOFF,
  resetSignUpFormError,
} from "../../redux/signInUp/signInUp.actions";

import { Modal } from "react-bootstrap";

import SignIn from "../../ComponentsNotReuse/sign_in/sign_in.component";
import SignUp from "../../ComponentsNotReuse/sign_up/sign_up.component";
import RegisterSuccessScene from "../../ComponentsNotReuse/registerSuccess/registerSuccess.component";

const SignInAndSignUp = ({
  renderFor,
  showSignInUpModal,
  renderForSignIn,
  turnSignInUpOFF,
  resetSignUpFormError,
}) => {
  //   ================================= Life Cycle Hooks =================================

  return (
    <div className="signInSignUpModal">
      <Modal
        show={showSignInUpModal}
        onHide={() => {
          turnSignInUpOFF();

          setTimeout(() => {
            resetSignUpFormError();
            renderForSignIn();
          }, 600);
        }}
        centered
      >
        {renderFor === "signIn" && <SignIn />}
        {renderFor === "signUp" && <SignUp />}
        {renderFor === "registerSuccess" && <RegisterSuccessScene />}
      </Modal>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  renderFor: selectRenderFor,
  showSignInUpModal: selectShowSignInUpModal,
});

const mapDispatchToProps = (dispatch) => ({
  renderForSignIn: () => dispatch(setRenderForSignIn()),
  turnSignInUpOFF: () => dispatch(turnSignInUpOFF()),
  resetSignUpFormError: () => dispatch(resetSignUpFormError(0)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInAndSignUp);
