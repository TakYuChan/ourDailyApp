import React from "react";
import "./signInForm.style.scss";

import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { userLoggedOn } from "../../redux/user/user.actions";

import { Form, Button } from "react-bootstrap";
import FormInput from "../../Components/formInput/formInput.component";

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
      // 1. sign in
      await auth.signInWithEmailAndPassword(email, password);

      // 2. Clear email and password input after clicking sign in
      this.setState({ email: "", password: "" });

      // 3. Change userLogged State in App.js to true
      this.props.userLoggedOn();
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

const mapDispatchToProps = (dispatch) => ({
  userLoggedOn: () => dispatch(userLoggedOn()),
});

export default connect(null, mapDispatchToProps)(SignInForm);
