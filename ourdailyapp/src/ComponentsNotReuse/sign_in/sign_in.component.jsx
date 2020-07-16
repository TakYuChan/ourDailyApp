import React from "react";

import S from "./sign_in.style";
import { connect } from "react-redux";
import { setRenderForSignUp } from "../../redux/signInUp/signInUp.actions";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import { Modal, Button } from "react-bootstrap";
import SignInForm from "../../ComponentsNotReuse/signInForm/signInForm.component";

const SignIn = ({ renderForSignUp }) => {
  return (
    <div className="sign-in-modal">
      <Modal.Header closeButton>
        <Modal.Title className="signInSignUp-title">Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignInForm />
      </Modal.Body>
      <S.ModalFooter className="signInModal-footer">
        <Button
          variant="secondary"
          className="btn--toSignUp"
          onClick={() => {
            renderForSignUp();
          }}
        >
          Create a new account
        </Button>
        <Button
          variant="primary"
          className="btn--googleAuth"
          onClick={signInWithGoogle}
        >
          <S.IconGoogle className="iconfont icon-google"></S.IconGoogle>
          Google Log In
        </Button>
      </S.ModalFooter>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  renderForSignUp: () => dispatch(setRenderForSignUp()),
});

export default connect(null, mapDispatchToProps)(SignIn);
