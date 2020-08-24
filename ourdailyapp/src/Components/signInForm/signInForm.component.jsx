import React, { useState } from "react";
import S from "./signInForm.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectIsProcessingSignIn,
  selectSignInFormError,
} from "../../redux/signInUp/signInUp.selector";
import { emailSignInStart } from "../../redux/user/user.actions";

import { Form } from "react-bootstrap";
import FormInput from "../../Components/formInput/formInput.component";

import PropTypes from "prop-types";

const SignInForm = ({
  isProcessingSignIn,
  signInFormError,
  emailSignInStart,
}) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  //  ================================= Custom Methods =================================

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ [name]: value });
  };

  const { email, password } = credentials;
  return (
    <Form className="signInForm">
      <FormInput
        id="signInEmail"
        labelText="Email address"
        type="email"
        name="email"
        placeholder="Enter email"
        handleInputChange={handleInputChange}
        value={email}
        errorObj={signInFormError.emailError}
      />

      <FormInput
        id="signInPassword"
        labelText="Passwords"
        type="password"
        name="password"
        placeholder="Password"
        handleInputChange={handleInputChange}
        value={password}
        errorObj={signInFormError.passwordError}
      />

      <S.Button
        variant="primary"
        type="submit"
        // onClick={this.handleEmailSignIn}
        onClick={(event) => {
          event.preventDefault();
          emailSignInStart({ email, password });
        }}
      >
        Log In{isProcessingSignIn && <S.Spinner></S.Spinner>}
      </S.Button>
    </Form>
  );
};

const mapStateToProps = createStructuredSelector({
  isProcessingSignIn: selectIsProcessingSignIn,
  signInFormError: selectSignInFormError,
});

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: ({ email, password }) =>
    dispatch(emailSignInStart({ email, password })),
});

SignInForm.propTypes = {
  isProcessingSignIn: PropTypes.bool.isRequired,
  signInFormError: PropTypes.object.isRequired,
  emailSignInStart: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
