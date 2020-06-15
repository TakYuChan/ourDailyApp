import React from "react";
import "./signInForm.style.scss";

import { Form, Button } from "react-bootstrap";

import FormInput from "../../Components/formInput/formInput.component";

import { auth } from "../../firebase/firebase.utils";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  //  ================================= Custom Methods =================================
  handleEmailSignIn = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      console.log("hi");
      await auth.signInWithEmailAndPassword(email, password);

      //Clear email and password input after clicking sign in
      this.setState({ email: "", password: "" });

      //Change userLogged State in App.js to true
      this.props.userlogStateChanged();
    } catch (error) {
      console.log("ERROR: Email and Password Sign In", error.message);
    }
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  //   ================================= Life Cycle Hooks =================================
  render() {
    const { email, password } = this.state;

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
        />

        <FormInput
          id="signInPassword"
          labelText="Passwords"
          type="password"
          name="password"
          placeholder="Password"
          handleInputChange={this.handleInputChange}
          value={password}
        />

        <Button
          variant="primary"
          type="submit"
          onClick={this.handleEmailSignIn}
        >
          Log In
        </Button>
      </Form>
    );
  }
}

export default SignInForm;
