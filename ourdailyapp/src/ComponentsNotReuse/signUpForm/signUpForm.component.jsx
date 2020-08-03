import React from "react";
import S from "./signUpForm.style";

import { Form } from "react-bootstrap";

import FormInput from "../../Components/formInput/formInput.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { userLoggedOn } from "../../redux/user/user.actions";
import {
  setRenderForRegisterSuccess,
  signUpSubmitFlow,
  setEmailAlreadyInUserTRUE,
  setEmailNotRegisteredFALSE,
} from "../../redux/signInUp/signInUp.actions";
import { selectSignUpFormError } from "../../redux/signInUp/signInUp.selector";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  //  ================================= Custom Methods =================================
  handleSubmit = async (event) => {
    const {
      errorCheckAndRedirect,
      setEmailAlreadyInUserTRUE,
      setEmailNotRegisteredFALSE,
    } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    try {
      event.preventDefault();

      // 1. Sign Up and error checking
      // Source: signInUp.reducer.js
      const isSignUpSuccess = await errorCheckAndRedirect({
        displayName,
        email,
        password,
        confirmPassword,
      });

      // 2. Optional ============ If Sign Up Successfully ===============
      if (isSignUpSuccess) {
        // Clear all input in the sign up form
        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      error.code === "auth/email-already-in-use"
        ? setEmailAlreadyInUserTRUE()
        : setEmailNotRegisteredFALSE();

      console.log(`Error creating user with email and password`, error.code);
    }
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  //   ================================= Life Cycle Hooks =================================
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpErrorObj } = this.props;

    return (
      <Form className="signUpForm">
        <FormInput
          id="signUpDisplayName"
          labelText="Display Name"
          type="text"
          name="displayName"
          placeholder="Display Name"
          handleInputChange={this.handleInputChange}
          value={displayName}
          errorObj={signUpErrorObj.displayNameError}
        />

        <FormInput
          id="signUpEmail"
          labelText="Email address"
          type="email"
          name="email"
          placeholder="Enter email"
          handleInputChange={this.handleInputChange}
          value={email}
          formText="We'll never share your email with anyone else."
          errorObj={signUpErrorObj.emailError}
        />

        <FormInput
          id="signUpPassword"
          labelText="Passwords"
          type="password"
          name="password"
          placeholder="Password"
          handleInputChange={this.handleInputChange}
          value={password}
        />

        <FormInput
          id="signUpConfirmPassword"
          labelText="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          handleInputChange={this.handleInputChange}
          value={confirmPassword}
          errorObj={signUpErrorObj.passwordError}
        />

        <S.Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </S.Button>
      </Form>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  signUpErrorObj: selectSignUpFormError,
});

const mapDispatchToProps = (dispatch) => ({
  userLoggedOn: () => dispatch(userLoggedOn()),
  renderForRegisterSuccess: () => dispatch(setRenderForRegisterSuccess()),
  errorCheckAndRedirect: (formInputs) => dispatch(signUpSubmitFlow(formInputs)),
  setEmailAlreadyInUserTRUE: () => dispatch(setEmailAlreadyInUserTRUE()),
  setEmailNotRegisteredFALSE: () => dispatch(setEmailNotRegisteredFALSE()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
