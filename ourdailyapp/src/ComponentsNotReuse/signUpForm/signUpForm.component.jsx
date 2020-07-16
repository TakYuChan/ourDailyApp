import React from "react";
import "./signUpForm.style.scss";

import { Form, Button } from "react-bootstrap";

import FormInput from "../../Components/formInput/formInput.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { userLoggedOn } from "../../redux/user/user.actions";
import { setRenderForRegisterSuccess } from "../../redux/signInUp/signInUp.actions";

import { signUpForminputCheck } from "../../utils/errorChecking.js";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorDetected: false,
    };
  }

  //  ================================= Custom Variables =================================
  displayError = {
    shortDisplayName: false,
    longDisplayName: false,
  };

  warningShortInput(target, length) {
    return `The ${target} must be longer than ${length} keys.`;
  }

  //  ================================= Custom Methods =================================
  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    // 1. ================== Check Password ==================
    if (password !== confirmPassword) {
      alert(`Password doesn't match the Confirmed password, please try again.`);
      return;
    }

    // 2. ============= Form Input Inspection ==================
    let errorExist = signUpForminputCheck(displayName, this.displayError);

    if (errorExist) {
      this.setState({ errorDetected: true });
      return;
    }

    try {
      // Create user account
      console.log("hello");
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // Save user details to db
      await createUserProfileDocument(user, { displayName });

      // Clear all input in the sign up form
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      //Reset error inspection variables
      this.error = {
        shortDisplayName: false,
        longDisplayName: false,
      };

      // 3. ================== Successfully Signed In ==================

      // Registration Successful will direct users to the "registerSuccessScene"
      this.props.renderForRegisterSuccess();

      // Immediately change the userLogged state in App.js to true;
      this.props.userLoggedOn();
    } catch (error) {
      console.log(`Error creating user with email and password`, error.message);
    }
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  //   ================================= Life Cycle Hooks =================================
  render() {
    const { displayName, email, password, confirmPassword } = this.state;

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
          error={this.displayError}
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
        />

        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLoggedOn: () => dispatch(userLoggedOn()),
  renderForRegisterSuccess: () => dispatch(setRenderForRegisterSuccess()),
});

export default connect(null, mapDispatchToProps)(SignUpForm);
