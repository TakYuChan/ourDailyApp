import React from "react";
import S from "./player2SignInModal.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectShowSignInModal,
  selectSignInError,
  selectIsProcessingSignIn,
} from "../../../redux/pigGameModals/pigGameModals.selectors";
import {
  turnSignInModalOff,
  resetSignInError,
  player2SignInFlow,
  setIsProcessingSignInTRUE,
  setIsProcessingSignInFALSE,
} from "../../../redux/pigGameModals/pigGameModals.actions";

import {
  setPlayer2UserInfo,
  saveReducerStateToFirestore,
  startNewGame,
} from "../../../redux/pigGame/pigGame.actions";

import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import FormInput from "../../../Components/formInput/formInput.component";

class Player2SignInModal extends React.Component {
  state = { email: "", password: "" };

  //  ================================= Custom Methods =================================
  handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const { email, password } = this.state;
      const {
        player2SignInFlow,
        setPlayer2UserInfo,
        setIsProcessingSignInTRUE,
        setIsProcessingSignInFALSE,
        saveReducerStateToFirestore,
        startNewGame,
      } = this.props;
      // * Start spinner
      setIsProcessingSignInTRUE();
      // 1. Start log in work flow
      const userObj = await player2SignInFlow(email, password);

      if (userObj) {
        // 2. Clear email and password input after clicking sign in
        this.setState({ email: "", password: "" });
        // 3. Clear previous game data
        startNewGame();
        // 4. Save user info to reducer
        setPlayer2UserInfo(userObj);
        // 5. Save user info to firestore
        saveReducerStateToFirestore(userObj);
      }

      // * Stop spinner
      setIsProcessingSignInFALSE();
    } catch (error) {
      console.log("ERROR: Email and Password Sign In", error.message);
    }
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      turnSignInModalOff,
      showSignInModal,
      signInErrorObj,
      resetSignInError,
      IsProcessingSignIn,
    } = this.props;
    const { email, password } = this.state;
    return (
      <S.SignInModal
        show={showSignInModal}
        onHide={() => {
          turnSignInModalOff();
          setTimeout(() => {
            resetSignInError();
          }, 300);
        }}
        centered
      >
        <Modal.Header closeButton>
          <S.ModalTitle>Player 2 Sign In</S.ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <Form className="signInForm">
            <FormInput
              id="signInEmail"
              labelText="Email address"
              type="email"
              name="email"
              placeholder="Enter email"
              handleInputChange={this.handleInputChange}
              value={email}
              errorObj={signInErrorObj.emailError}
            />

            <FormInput
              id="signInPassword"
              labelText="Passwords"
              type="password"
              name="password"
              placeholder="Password"
              handleInputChange={this.handleInputChange}
              value={password}
              errorObj={signInErrorObj.passwordError}
            />

            <S.Button variant="primary" onClick={this.handleSignIn}>
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
  turnSignInModalOff: () => dispatch(turnSignInModalOff()),
  resetSignInError: () => dispatch(resetSignInError()),
  player2SignInFlow: (email, password) =>
    dispatch(player2SignInFlow(email, password)),
  setPlayer2UserInfo: (userObj) => dispatch(setPlayer2UserInfo(userObj)),
  setIsProcessingSignInTRUE: () => dispatch(setIsProcessingSignInTRUE()),
  setIsProcessingSignInFALSE: () => dispatch(setIsProcessingSignInFALSE()),
  saveReducerStateToFirestore: (userObj) =>
    dispatch(saveReducerStateToFirestore(userObj)),
  startNewGame: () => dispatch(startNewGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player2SignInModal);
