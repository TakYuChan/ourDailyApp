import React, { useState } from "react";
import S from "./signUpForm.style";

import { Form } from "react-bootstrap";

import FormInput from "../../Components/formInput/formInput.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectSignUpFormError,
  selectIsProcessingSignUp,
} from "../../redux/signInUp/signInUp.selector";

import PropTypes from "prop-types";

import { signUpStart } from "../../redux/user/user.actions";

const SignUpForm = ({ signUpErrorObj, signUpStart, isProcessingSignUp }) => {
  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //  ================================= Custom Methods =================================

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ [name]: value });
  };

  //   ================================= Life Cycle Hooks =================================
  const { displayName, email, password, confirmPassword } = credentials;

  return (
    <Form className="signUpForm">
      <FormInput
        id="signUpDisplayName"
        labelText="Display Name"
        type="text"
        name="displayName"
        placeholder="Display Name"
        handleInputChange={handleInputChange}
        value={displayName}
        errorObj={signUpErrorObj.displayNameError}
      />

      <FormInput
        id="signUpEmail"
        labelText="Email address"
        type="email"
        name="email"
        placeholder="Enter email"
        handleInputChange={handleInputChange}
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
        handleInputChange={handleInputChange}
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

      <S.Button
        variant="primary"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          signUpStart({ displayName, email, password, confirmPassword });
        }}
      >
        Submit{isProcessingSignUp && <S.Spinner></S.Spinner>}
      </S.Button>
    </Form>
  );
};

const mapStateToProps = createStructuredSelector({
  signUpErrorObj: selectSignUpFormError,
  isProcessingSignUp: selectIsProcessingSignUp,
});

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (registerDetails) => dispatch(signUpStart(registerDetails)),
});

SignUpForm.propTypes = {
  signUpErrorObj: PropTypes.object.isRequired,
  isProcessingSignUp: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
