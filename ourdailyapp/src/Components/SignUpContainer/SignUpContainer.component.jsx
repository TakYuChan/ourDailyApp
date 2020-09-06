import React from "react";
import S from "./SignUpContainer.style";

import SignUpForm from "../Forms/SignUpForm/SignUpForm.component";
import OauthBtn from "../Buttons/OauthBtn/OauthBtn.component";
import OauthBtnRounded from "../Buttons/OauthBtnRounded/OauthBtnRounded.component";

import { ReactComponent as GoogleSvg } from "../../assets/svg/google.svg";
import { ReactComponent as FacebookSvg } from "../../assets/svg/facebook.svg";
import { ReactComponent as AppleSvg } from "../../assets/svg/apple.svg";

import PropTypes from "prop-types";

const SignUpPage = ({mq_IsTallScreen}) => {

  return (
    <React.Fragment>
      {/* // ============== Log In Form wrapper==============  */}
      <S.SignUpFormWrapper mq_IsTallScreen={mq_IsTallScreen}>
        <SignUpForm />
      </S.SignUpFormWrapper>
      {/* // =================== OR Seperate Line ====================== */}
  <S.Or mq_IsTallScreen={mq_IsTallScreen}>OR</S.Or>
      {/* // ============== Oauth Buttons wrapper==============  */}
      <S.OauthBtnsWrapper mq_IsTallScreen = {mq_IsTallScreen}>
        {mq_IsTallScreen ? 
        <React.Fragment>
          <OauthBtn SvgComponent={GoogleSvg} mq_IsTallScreen = {mq_IsTallScreen}>Google</OauthBtn>
          <OauthBtn SvgComponent={FacebookSvg} mq_IsTallScreen = {mq_IsTallScreen}>Facebook</OauthBtn>
          <OauthBtn SvgComponent={AppleSvg} mq_IsTallScreen = {mq_IsTallScreen}>Apple</OauthBtn>
        </React.Fragment> 
        : 
        <React.Fragment>
          <OauthBtnRounded SvgComponent={GoogleSvg} mq_IsTallScreen = {mq_IsTallScreen}>Google</OauthBtnRounded>
          <OauthBtnRounded SvgComponent={FacebookSvg} mq_IsTallScreen = {mq_IsTallScreen}>Facebook</OauthBtnRounded>
          <OauthBtnRounded SvgComponent={AppleSvg} mq_IsTallScreen = {mq_IsTallScreen}>Apple</OauthBtnRounded>
        </React.Fragment>}
      </S.OauthBtnsWrapper>
    </React.Fragment>
  );
};

SignUpPage.propTypes = {
  mq_IsTallScreen: PropTypes.bool.isRequired,
}

export default SignUpPage;
