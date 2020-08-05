import React from "react";
import S from "./signInForm.style";

import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { userLoggedOn } from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import {
  setIsProcessingSignInTRUE,
  setIsProcessingSignInFALSE,
  setEmailNotRegisteredTRUE,
  setPasswordIncorrectTRUE,
  resetSignInFormError,
  setPasswordIncorrectFALSE,
  setEmailNotRegisteredFALSE,
  signInUpOnHide,
} from "../../redux/signInUp/signInUp.actions";
import {
  selectIsProcessingSignIn,
  selectSignInFormError,
} from "../../redux/signInUp/signInUp.selector";
import { emailSignIn } from "../../redux/user/user.actions";

import { Form } from "react-bootstrap";
import FormInput from "../../Components/formInput/formInput.component";

class SignInForm extends React.Component {
  state = {
    email: "",
    password: "",
  };

  //  ================================= Custom Methods =================================
  handleEmailSignIn = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const {
      setIsProcessingSignInTRUE,
      setIsProcessingSignInFALSE,
      setEmailNotRegisteredTRUE,
      setPasswordIncorrectTRUE,
      setPasswordIncorrectFALSE,
      setEmailNotRegisteredFALSE,
      signInUpOnHide,
    } = this.props;

    try {
      // * Start spinner
      setIsProcessingSignInTRUE();
      // 1. sign in
      await auth.signInWithEmailAndPassword(email, password);
      // 2. Clear email and password input after clicking sign in
      this.setState({ email: "", password: "" });

      // console.log("good: ", good);

      // 3. Change userLogged State in App.js to true
      this.props.userLoggedOn();

      // 4. Hide Sign In Sign Up Modal
      signInUpOnHide();

      // * Stop spinner
      setIsProcessingSignInFALSE();
    } catch (error) {
      error.code === "auth/user-not-found"
        ? setEmailNotRegisteredTRUE()
        : setEmailNotRegisteredFALSE();
      error.code === "auth/wrong-password"
        ? setPasswordIncorrectTRUE()
        : setPasswordIncorrectFALSE();

      // * Stop spinner
      setIsProcessingSignInFALSE();
    }
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  //   ================================= Life Cycle Hooks =================================
  render() {
    const { email, password } = this.state;
    const { isProcessingSignIn, signInFormError, emailSignIn } = this.props;

    return (
      <Form className="signInForm">
        <FormInput
          id="signInEmail"
          labelText="Email address"
          type="email"
          name="email"
          placeholder="Enter email"
          handleInputChange={this.handleInputChange}
          value={email}
          errorObj={signInFormError.emailError}
        />

        <FormInput
          id="signInPassword"
          labelText="Passwords"
          type="password"
          name="password"
          placeholder="Password"
          handleInputChange={this.handleInputChange}
          value={password}
          errorObj={signInFormError.passwordError}
        />

        <S.Button
          variant="primary"
          type="submit"
          // onClick={this.handleEmailSignIn}
          onClick={(event) => {
            event.preventDefault();
            emailSignIn({ email, password });
          }}
        >
          Log In{isProcessingSignIn && <S.Spinner></S.Spinner>}
        </S.Button>
      </Form>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isProcessingSignIn: selectIsProcessingSignIn,
  signInFormError: selectSignInFormError,
});

const mapDispatchToProps = (dispatch) => ({
  userLoggedOn: () => dispatch(userLoggedOn()),
  setIsProcessingSignInTRUE: () => dispatch(setIsProcessingSignInTRUE()),
  setIsProcessingSignInFALSE: () => dispatch(setIsProcessingSignInFALSE()),
  setEmailNotRegisteredTRUE: () => dispatch(setEmailNotRegisteredTRUE()),
  setPasswordIncorrectTRUE: () => dispatch(setPasswordIncorrectTRUE()),
  resetSignInFormError: () => dispatch(resetSignInFormError()),
  setPasswordIncorrectFALSE: () => dispatch(setPasswordIncorrectFALSE()),
  setEmailNotRegisteredFALSE: () => dispatch(setEmailNotRegisteredFALSE()),
  signInUpOnHide: () => dispatch(signInUpOnHide()),
  emailSignIn: ({ email, password }) =>
    dispatch(emailSignIn({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
