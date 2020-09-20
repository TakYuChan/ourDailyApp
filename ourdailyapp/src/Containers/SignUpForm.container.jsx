import React from "react";
import { Form } from "../Components/Compound Components";
import PixelSpinner from "../Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";

import useSignUpForm from "../hooks/useSignInForm.hooks";

const SignUpForm = () => {
  const { signUpDetails, handleInputChange } = useSignUpForm();
  const { name, email, password, passwordConfirm } = signUpDetails;

  return (
    <Form>
      <Form.Group>
        <Form.Input
          onChange={handleInputChange}
          type="text"
          value={name}
          name="name"
          className={`${name !== "" && "active"}`}
        />
        <Form.Label className="styled_label">Display Name</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Input
          onChange={handleInputChange}
          type="email"
          value={email}
          name="email"
          className={`${name !== "" && "active"}`}
        />
        <Form.Label className="styled_label">Email</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Input
          onChange={handleInputChange}
          type="password"
          value={password}
          name="password"
          className={`${password !== "" && "active"}`}
        />
        <Form.Label className="styled_label">Password</Form.Label>
      </Form.Group>
      <Form.Group>
        <Form.Input
          onChange={handleInputChange}
          type="password"
          value={passwordConfirm}
          name="passwordConfirm"
        />
        <Form.Label className="styled_label">Confirm password</Form.Label>
      </Form.Group>

      <Form.Group style={{ justifyContent: "space-between" }}>
        <Form.Block style={{ flexBasis: "35%" }}>
          <Form.Label>Gender</Form.Label>

          <Form.RadioInputGroup>
            <Form.RadioInput
              type="radio"
              value="Female"
              name="gender"
              onChange={handleInputChange}
              id="female"
              required
            ></Form.RadioInput>
            <Form.RadioLabel
              for="female"
              className="S_CustomSpan styled_female"
            >
              F
            </Form.RadioLabel>

            <Form.RadioInput
              type="radio"
              value="Male"
              name="gender"
              onChange={handleInputChange}
              id="male"
              required
            ></Form.RadioInput>
            <Form.RadioLabel for="male" className="S_CustomSpan styled_male">
              M
            </Form.RadioLabel>
          </Form.RadioInputGroup>
        </Form.Block>

        <Form.Block style={{ flexBasis: "60%" }}>
          <Form.Label style={{ position: "initial" }}>Birthday</Form.Label>
          <Form.DatePickerInput
            type="date"
            name="birthday"
            onChange={handleInputChange}
            aria-label="birthday"
            required
          />
        </Form.Block>
      </Form.Group>

      <Form.SignUpBtn>
        Sign Up {/* {isSigningUp && ( */}
        <PixelSpinner size={1.2} animationDuration={1500} />
        {/* )} */}
      </Form.SignUpBtn>
    </Form>
  );
};

export default SignUpForm;
