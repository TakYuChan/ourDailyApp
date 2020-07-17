import React from "react";

import S from "./sign_in.style";
import { connect } from "react-redux";
import { setRenderForSignUp } from "../../redux/signInUp/signInUp.actions";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import { Modal } from "react-bootstrap";
import SignInForm from "../../ComponentsNotReuse/signInForm/signInForm.component";

const SignIn = ({ renderForSignUp }) => {
  return (
    <div className="sign-in-modal">
      <Modal.Header closeButton>
        <S.ModalTitle className="signInSignUp-title">Sign In</S.ModalTitle>
      </Modal.Header>
      <Modal.Body>
        <SignInForm />
      </Modal.Body>
      <S.ModalFooter className="signInModal-footer">
        <S.Button
          variant="secondary"
          className="btn--toSignUp"
          onClick={() => {
            renderForSignUp();
          }}
        >
          Create a new account
        </S.Button>
        <S.Button
          variant="primary"
          className="btn--googleAuth"
          onClick={signInWithGoogle}
        >
          <S.IconGoogle className="iconfont icon-google"></S.IconGoogle>
          Google Log In
        </S.Button>
      </S.ModalFooter>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  renderForSignUp: () => dispatch(setRenderForSignUp()),
});

export default connect(null, mapDispatchToProps)(SignIn);
