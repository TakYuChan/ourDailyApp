import React from "react";
import S from "./signUpForm.style";

import { Form } from "react-bootstrap";

import FormInput from "../../Components/formInput/formInput.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectSignUpFormError,
  selectIsProcessingSignUp,
} from "../../redux/signInUp/signInUp.selector";

import { signUpStart } from "../../redux/user/user.actions";

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

  handleInputChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  //   ================================= Life Cycle Hooks =================================
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpErrorObj, signUpStart, isProcessingSignUp } = this.props;

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
  }
}

const mapStateToProps = createStructuredSelector({
  signUpErrorObj: selectSignUpFormError,
  isProcessingSignUp: selectIsProcessingSignUp,
});

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (registerDetails) => dispatch(signUpStart(registerDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
