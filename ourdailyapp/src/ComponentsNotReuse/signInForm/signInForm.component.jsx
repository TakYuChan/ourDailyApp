import React from "react";
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

class SignInForm extends React.Component {
  state = {
    email: "",
    password: "",
  };

  //  ================================= Custom Methods =================================

  handleInputChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  //   ================================= Life Cycle Hooks =================================
  render() {
    const { email, password } = this.state;
    const {
      isProcessingSignIn,
      signInFormError,
      emailSignInStart,
    } = this.props;

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
            emailSignInStart({ email, password });
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
  emailSignInStart: ({ email, password }) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
