import React from "react";
import S from "./sign_up.style";

import { connect } from "react-redux";
import { setRenderForSignIn } from "../../redux/signInUp/signInUp.actions";

import { Modal } from "react-bootstrap";
import SignUpForm from "../signUpForm/signUpForm.component";

const SignUp = ({ renderForSignIn }) => {
  return (
    <div className="sign-up-modal">
      <Modal.Header closeButton>
        <S.ModalTitle className="signUpSignUp-title">Sign Up</S.ModalTitle>
      </Modal.Header>
      <Modal.Body>
        <SignUpForm />
      </Modal.Body>
      <Modal.Footer className="signInModal-footer">
        <S.Button
          variant="secondary"
          className="btn--toSignIn"
          onClick={() => {
            renderForSignIn();
          }}
        >
          I already have an account
        </S.Button>
      </Modal.Footer>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  renderForSignIn: () => dispatch(setRenderForSignIn()),
});

export default connect(null, mapDispatchToProps)(SignUp);
