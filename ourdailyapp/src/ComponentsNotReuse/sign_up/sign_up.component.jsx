import React from "react";

// import S from "./sign_up.style";
import { connect } from "react-redux";
import { setRenderForSignIn } from "../../redux/signInUp/signInUp.actions";

import { Modal, Button } from "react-bootstrap";
import SignUpForm from "../../ComponentsNotReuse/signUpForm/signUpForm.component";

const SignUp = ({ renderForSignIn }) => {
  return (
    <div className="sign-up-modal">
      <Modal.Header closeButton>
        <Modal.Title className="signUpSignUp-title">Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignUpForm />
      </Modal.Body>
      <Modal.Footer className="signInModal-footer">
        <Button
          variant="secondary"
          className="btn--toSignIn"
          onClick={() => {
            renderForSignIn();
          }}
        >
          I already have an account
        </Button>
      </Modal.Footer>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  renderForSignIn: () => dispatch(setRenderForSignIn()),
});

export default connect(null, mapDispatchToProps)(SignUp);
