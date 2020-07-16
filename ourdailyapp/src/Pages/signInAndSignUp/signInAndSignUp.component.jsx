import React from "react";
import S from "./signInAndSignUp.style";

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

import SignIn from "../../ComponentsNotReuse/sign_in/sign_in.component";
import SignUp from "../../ComponentsNotReuse/sign_up/sign_up.component";
import RegisterSuccessScene from "../../ComponentsNotReuse/registerSuccess/registerSuccess.component";

const SignInAndSignUp = ({
  renderFor,
  showSignInUpModal,
  renderForSignUp,
  renderForSignIn,
  turnSignInUpOFF,
}) => {
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
  renderForSignUp: () => dispatch(setRenderForSignUp()),
  turnSignInUpOFF: () => dispatch(turnSignInUpOFF()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInAndSignUp);
