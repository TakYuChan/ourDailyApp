import React from "react";
import S from "./player2SignInModal.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectShowSignInModal,
  selectSignInError,
  selectIsProcessingSignIn,
} from "../../../redux/pigGameModals/pigGameModals.selectors";

import { signInStart } from "../../../redux/pigGame/pigGame.actions";

import { Modal, Form } from "react-bootstrap";
import FormInput from "../../../Components/formInput/formInput.component";

class Player2SignInModal extends React.Component {
  state = { email: "", password: "" };

  //  ================================= Custom Methods =================================

  handleInputChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      showSignInModal,
      signInErrorObj,
      IsProcessingSignIn,
      signInFormOnHide,
      signInStart,
    } = this.props;
    const { email, password } = this.state;
    return (
      <S.SignInModal show={showSignInModal} onHide={signInFormOnHide} centered>
        <Modal.Header closeButton>
          <S.ModalTitle>Player 2 Sign In</S.ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <Form className="signInForm">
            <FormInput
              id="pigGameSignInEmail"
              labelText="Email address"
              type="email"
              name="email"
              placeholder="Enter email"
              handleInputChange={this.handleInputChange}
              value={email}
              errorObj={signInErrorObj.emailError}
            />

            <FormInput
              id="pigGameSignInPassword"
              labelText="Passwords"
              type="password"
              name="password"
              placeholder="Password"
              handleInputChange={this.handleInputChange}
              value={password}
              errorObj={signInErrorObj.passwordError}
            />

            <S.Button
              variant="primary"
              onClick={(e) => {
                e.preventDefault();
                console.log("Ready to signInStart");
                signInStart(email, password);
                this.setState({ email: "", password: "" });
              }}
            >
              Player2 Log In
              {IsProcessingSignIn && <S.Spinner></S.Spinner>}
            </S.Button>
          </Form>
        </Modal.Body>
      </S.SignInModal>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  showSignInModal: selectShowSignInModal,
  signInErrorObj: selectSignInError,
  IsProcessingSignIn: selectIsProcessingSignIn,
});

const mapDispatchToProps = (dispatch) => ({
  signInStart: (email, password) => dispatch(signInStart(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player2SignInModal);
