import React from "react";

import "./signInAndSignUp.style.scss";

import { Modal, Button } from "react-bootstrap";

class SignInAndSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderFor: "signIn",
      //   modalHeader: <Modal.Title>Sign In</Modal.Title>,
      //   modalBody: <p>Sign In Body</p>,
    };
  }
  modalElements = {
    modalHeader: <Modal.Title>Sign In</Modal.Title>,
    modalBody: <p>Sign In Body</p>,
    modalChangeRenderBtn: "Sign Up",
  };

  //   Custom Methods
  handleChangeRenderClick = () => {
    const { renderFor } = this.state;
    renderFor === "signIn"
      ? this.setState({ renderFor: "signUp" })
      : this.setState({ renderFor: "signIn" });
  };

  renderModal = () => {
    try {
      const { renderFor } = this.state;

      if (renderFor === "signIn") {
        this.modalElements.modalHeader = <Modal.Title>Sign Up</Modal.Title>;
        this.modalElements.modalBody = <p>Sign Up Body</p>;
        this.modalElements.modalChangeRenderBtn = "Sign In";
      } else if (renderFor === "signUp") {
        this.modalElements.modalHeader = <Modal.Title>Sign In</Modal.Title>;
        this.modalElements.modalBody = <p>Sign In Body</p>;
        this.modalElements.modalChangeRenderBtn = "Sign Up";
      }
    } catch (error) {
      console.log("Modal rendering Problem!", error);
    }
  };

  render() {
    const { modalHeader, modalBody, modalChangeRenderBtn } = this.modalElements;

    return (
      <div className="signInSignUpModal">
        <Modal show={this.props.show} onHide={this.props.handleClose} centered>
          <Modal.Header closeButton>{modalHeader}</Modal.Header>
          <Modal.Body>{modalBody}</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                this.handleChangeRenderClick();
                //!! SetState (inside above function) will be triggered after all the statement in this scope
                // finish !!
                this.renderModal();
              }}
            >
              {modalChangeRenderBtn}
            </Button>
            <Button variant="primary" onClick={this.props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SignInAndSignUp;
