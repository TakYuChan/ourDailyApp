import React from "react";

import "./signInAndSignUp.style.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import {
  selectRenderFor,
  selectShowSignInUpModal,
} from "../../redux/signInUp/signInUp.selector";
import {
  setRenderForSignIn,
  setRenderForSignUp,
  turnSignInUpOFF,
} from "../../redux/signInUp/signInUp.actions";

import { Modal, Button } from "react-bootstrap";
import SignInForm from "../../ComponentsNotReuse/signInForm/signInForm.component";
import SignUpForm from "../../ComponentsNotReuse/signUpForm/signUpForm.component";
import RegisterSuccessScene from "../../ComponentsNotReuse/registerSuccess/registerSuccess.component";

const SignInAndSignUp = ({
  renderFor,
  showSignInUpModal,
  renderForSignUp,
  renderForSignIn,
  turnSignInUpOFF,
}) => {
  //  ================================= Custom Methods =================================

  const renderModalHeader = () => {
    let modalHeader = null;

    switch (renderFor) {
      case "signIn":
        modalHeader = (
          <Modal.Title className="signInSignUp-title">Sign In</Modal.Title>
        );
        break;
      case "signUp":
        modalHeader = (
          <Modal.Title className="signUpSignUp-title">Sign Up</Modal.Title>
        );
        break;
      case "registerSuccess":
        modalHeader = (
          <Modal.Title className="registerSuccess-title">
            Successfully Registered
          </Modal.Title>
        );
        break;
      default: {
        modalHeader = <h1>Modal Header Error</h1>;
      }
    }

    return modalHeader;
  };

  const renderModalBody = () => {
    let modalBody = null;

    switch (renderFor) {
      case "signIn":
        modalBody = <SignInForm />;
        break;
      case "signUp":
        modalBody = <SignUpForm />;
        break;
      case "registerSuccess":
        modalBody = <RegisterSuccessScene />;
        break;
      default: {
        modalBody = <p>Modal body Error</p>;
      }
    }

    return modalBody;
  };

  const renderModalFooter = () => {
    let modalFooter = null;

    switch (renderFor) {
      case "signIn":
        modalFooter = [
          <Button
            key="1"
            variant="secondary"
            className="btn--toSignUp"
            onClick={() => {
              renderForSignUp();
            }}
          >
            Create a new account
          </Button>,
          <Button
            key="2"
            variant="primary"
            className="btn--googleAuth"
            onClick={signInWithGoogle}
          >
            <i className="iconfont icon-google"></i>
            Google Log In
          </Button>,
        ];
        break;
      case "signUp":
        modalFooter = (
          <Button
            variant="secondary"
            className="btn--toSignIn"
            onClick={() => {
              renderForSignIn();
            }}
          >
            I already have an account
          </Button>
        );
        break;
      case "registerSuccess":
        modalFooter = null;
        break;
      default: {
        modalFooter = <p>Modal footer Error</p>;
      }
    }

    return modalFooter;
  };

  //   ================================= Life Cycle Hooks =================================

  return (
    <div className="signInSignUpModal">
      <Modal
        show={showSignInUpModal}
        onHide={() => {
          turnSignInUpOFF();

          setTimeout(() => {
            renderForSignIn();
          }, 600);
        }}
        centered
      >
        {/* =========== Modal Header ============ */}
        <Modal.Header closeButton>{renderModalHeader()}</Modal.Header>

        {/* =========== Modal Body ============ */}
        <Modal.Body>{renderModalBody()}</Modal.Body>

        {/* =========== Modal Footer ============ */}
        <Modal.Footer className="footer">{renderModalFooter()}</Modal.Footer>
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
  renderForSignUp: () => dispatch(setRenderForSignUp()),
  turnSignInUpOFF: () => dispatch(turnSignInUpOFF()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInAndSignUp);
