import React from "react";
import S from "./player2SignInModal.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectShowSignInModal,
  selectSignInError,
  selectIsProcessingSignIn,
} from "../../../redux/pigGameModals/pigGameModals.selectors";
<<<<<<< HEAD
import { signInFormOnHide } from "../../../redux/pigGameModals/pigGameModals.actions";
import { signInStart } from "../../../redux/pigGame/pigGame.actions";
import { selectPlayer2UserInfo } from "../../../redux/pigGame/pigGame.selectors";
=======
import {
  player2SignInFlow,
  setIsProcessingSignInTRUE,
  setIsProcessingSignInFALSE,
  signInFormOnHide,
  emailSignInStart,
} from "../../../redux/pigGameModals/pigGameModals.actions";

import {
  setPlayer2UserInfo,
  saveReducerStateToFirestore,
  startNewGame,
} from "../../../redux/pigGame/pigGame.actions";
>>>>>>> 53da1c25287e345bd66203e8d428cf24d327f672

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
<<<<<<< HEAD
      signInStart,
      player2UserInfo,
=======
      emailSignInStart,
>>>>>>> 53da1c25287e345bd66203e8d428cf24d327f672
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
<<<<<<< HEAD
                console.log("Ready to signInStart");
                signInStart(email, password);
                player2UserInfo !== null &&
                  this.setState({ email: "", password: "" });
=======
                emailSignInStart({ email, password });
>>>>>>> 53da1c25287e345bd66203e8d428cf24d327f672
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
  player2UserInfo: selectPlayer2UserInfo,
});

const mapDispatchToProps = (dispatch) => ({
  signInStart: (email, password) => dispatch(signInStart(email, password)),
  signInFormOnHide: () => dispatch(signInFormOnHide()),
  emailSignInStart: (emailAndPassword) =>
    dispatch(emailSignInStart(emailAndPassword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player2SignInModal);
