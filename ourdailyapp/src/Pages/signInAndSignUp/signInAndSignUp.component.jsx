import React from "react";

import "./signInAndSignUp.style.scss";

import { Modal, Button } from "react-bootstrap";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import SignInForm from "../../ComponentsNotReuse/signInForm/signInForm.component";
import SignUpForm from "../../ComponentsNotReuse/signUpForm/signUpForm.component";
import RegisterSuccessScene from "../../ComponentsNotReuse/registerSuccess/registerSuccess.component";

class SignInAndSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderFor: "signIn",
      toSignIn: true,
    };
  }

  //   ================================= Custom Variables =================================

  //  ================================= Custom Methods =================================
  handleRenderModal = (renderTo) => {
    this.setState({renderFor: renderTo});    
  }

  renderModal = {
    
  }

  renderModalHeader() {
    const { renderFor } = this.state;

    let modalHeader = null;

    switch(renderFor) {
      case "signIn":
        modalHeader = <Modal.Title className="signInSignUp-title">Sign In</Modal.Title>;
        break;
      case "signUp":
        modalHeader = <Modal.Title className="signInSignUp-title">Sign Up</Modal.Title>;
        break;
      case "registerSuccess":
        modalHeader = <Modal.Title className="signInSignUp-title">
                      Successfully Registered
                      </Modal.Title>
        break;
      default: {
        modalHeader = <h1>Modal Header Error</h1>;
      }
    }

    return modalHeader;
  }

  renderModalBody() {
    const { renderFor } = this.state;

    let modalBody = null;

    switch(renderFor) {
      case "signIn":
        modalBody = <SignInForm />;
        break;
      case "signUp":
        modalBody = <SignUpForm
                handleToRegisterSuccess={this.handleRenderModal}
                />;
        break;
      case "registerSuccess":
        modalBody = <RegisterSuccessScene />
        break;
      default: {
        modalBody = <p>Modal body Error</p>;
      }
    }

    return modalBody;
  }

  renderModalFooter() {
        const { renderFor } = this.state;

    let modalFooter = null;

    switch(renderFor) {
      case "signIn":
        modalFooter = [
              <Button
                key="1"
                variant="secondary"
                className="btn--toSignUp"
                onClick={() => {this.handleRenderModal("signUp")}}
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
        modalFooter = <Button
                variant="secondary"
                className="btn--toSignIn"
                onClick={() => {this.handleRenderModal("signIn")}}
              >
                I already have an account
              </Button>;
        break;
      case "registerSuccess":
        modalFooter = <Button
                variant="secondary"
                className="btn--toSignIn"
                onClick={() => {this.handleRenderModal("signIn")}}
              >
                Sign In Now
              </Button>
      break;
      default: {
        modalFooter = <p>Modal footer Error</p>;
      }
    }

    return modalFooter;
  }


  //   ================================= Life Cycle Hooks =================================
  render() {
    return (
      <div className="signInSignUpModal">
        <Modal show={this.props.show} onHide={() => {
          this.props.handleClose();

          setTimeout(() => {
            this.setState({renderFor: "signIn"});
          }, 600);
        }} centered>
          {/* =========== Modal Header ============ */}
          <Modal.Header closeButton>
            {this.renderModalHeader()}
          </Modal.Header>

          {/* =========== Modal Body ============ */}
          <Modal.Body>
            {this.renderModalBody()}
          </Modal.Body>

          {/* =========== Modal Footer ============ */}
          <Modal.Footer className="footer">
            {this.renderModalFooter()}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SignInAndSignUp;
