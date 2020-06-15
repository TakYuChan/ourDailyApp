import React from "react";
import "./signUpForm.style.scss";

import { Form, Button } from "react-bootstrap";

import FormInput from "../../Components/formInput/formInput.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

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
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    // Check Password
    if (password !== confirmPassword) {
      alert(`Password doesn't match the Confirmed password, please try again.`);
      return;
    }

    try {
      // Create user account
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      console.log("sign up");

      // Save user details to db
      await createUserProfileDocument(user, { displayName });

      // Clear all input in the sign up form
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Registration Successful will direct users to the "registerSuccessScene"
      this.props.handleRenderModal("registerSuccess");
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
          minLength="1"
          maxLength="24"
          value={displayName}
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
          minLength="8"
        />

        <FormInput
          id="signUpConfirmPassword"
          labelText="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          handleInputChange={this.handleInputChange}
          value={confirmPassword}
          minLength="8"
        />

        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default SignUpForm;
