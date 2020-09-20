import React, { useState, useCallback } from "react";
import S from "./SignUpForm.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { signUpStart } from "../../../redux/Auth/auth.actions";
import { selectSignUpAlerts } from "../../../redux/Auth/auth.selectors";
import { selectClickedAlertSvg } from "../../../redux/signUpForm/signUpForm.selectors";

import { selectIsSigningUp } from "../../../redux/signUpForm/signUpForm.selectors";
import PixelSpinner from "../../Molecules/Spinners/PixelSpinner/PixelSpinner.component";

import FormInput from "../../Molecules/FormElements/FormInput/FormInput.component";

const SignUpForm = ({
  signUpStart,
  signUpAlerts,
  clickedAlertSvg,
  isSigningUp,
}) => {
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    gender: null,
    birthday: null,
  });

  const { name, email, password, passwordConfirm } = signUpDetails;
  const {
    nameAlerts,
    emailAlerts,
    passwordAlerts,
    genderAlerts,
    birthdayAlerts,
  } = signUpAlerts;

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setSignUpDetails((prevSignUpDetails) => ({
      ...prevSignUpDetails,
      [name]: value,
    }));
  }, []);

  return (
    <S.SignUpForm>
      <FormInput
        placeholder="Your name"
        type="text"
        name="name"
        value={name}
        handleInputChange={handleInputChange}
        alerts={nameAlerts}
        hasAlertTooltip={clickedAlertSvg === "name"}
      />
      <FormInput
        placeholder="Your email"
        type="email"
        name="email"
        value={email}
        handleInputChange={handleInputChange}
        alerts={emailAlerts}
        hasAlertTooltip={clickedAlertSvg === "email"}
      />
      <FormInput
        placeholder="your password"
        type="password"
        name="password"
        value={password}
        handleInputChange={handleInputChange}
        alerts={passwordAlerts}
        hasAlertTooltip={clickedAlertSvg === "password"}
      />
      <FormInput
        placeholder="Confirm password"
        type="password"
        name="passwordConfirm"
        value={passwordConfirm}
        handleInputChange={handleInputChange}
      />
      <S.GenderAndDateWrapper>
        <S.GenderBlock>
          <S.GenderLabel>Gender</S.GenderLabel>
          <S.RadioBtnsWrapper>
            <S.RadioBtnBlock>
              <S.OriginalRadioInput
                type="radio"
                value="Female"
                name="gender"
                onChange={handleInputChange}
                required
              />
              <S.CustomSpan className="S_CustomSpan S_CustomSpan_female">
                F
              </S.CustomSpan>
            </S.RadioBtnBlock>

            <S.RadioBtnBlock>
              <S.OriginalRadioInput
                type="radio"
                value="Male"
                name="gender"
                onChange={handleInputChange}
              />
              <S.CustomSpan className="S_CustomSpan S_CustomSpan_male">
                M
              </S.CustomSpan>
            </S.RadioBtnBlock>
          </S.RadioBtnsWrapper>
        </S.GenderBlock>
        <S.FormDatePickerBlock>
          <S.PickerLabel className="styled_pickerLlabel">
            Birthday
          </S.PickerLabel>
          <S.DatePicker
            type="date"
            name="birthday"
            onChange={handleInputChange}
            aria-label="birthday"
            required
          />
        </S.FormDatePickerBlock>
      </S.GenderAndDateWrapper>
      <S.SignUpButton
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          console.log("submit btn clicked!");
          signUpStart(signUpDetails);
        }}
      >
        SIGN UP
        {isSigningUp && (
          <PixelSpinner
            size={1.2}
            animationDuration={1500}
            className="S_PixelSpinner"
          />
        )}
      </S.SignUpButton>
    </S.SignUpForm>
  );
};

const mapStateToProps = createStructuredSelector({
  signUpAlerts: selectSignUpAlerts,
  clickedAlertSvg: selectClickedAlertSvg,
  isSigningUp: selectIsSigningUp,
});

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (signUpDetails) => dispatch(signUpStart(signUpDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
