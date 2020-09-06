import React from "react";
import S from "./SignUpContainer.style";

import SignUpForm from "../Forms/SignUpForm/SignUpForm.component";
import OauthBtn from "../Buttons/OauthBtn/OauthBtn.component";
import OauthBtn_Rounded from "../Buttons/OauthBtn.Rounded/OauthBtn_Rounded.component";

import { ReactComponent as GoogleSvg } from "../../assets/svg/google.svg";
import { ReactComponent as FacebookSvg } from "../../assets/svg/facebook.svg";
import { ReactComponent as AppleSvg } from "../../assets/svg/apple.svg";

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
          <OauthBtn_Rounded SvgComponent={GoogleSvg} mq_IsTallScreen = {mq_IsTallScreen}>Google</OauthBtn_Rounded>
          <OauthBtn_Rounded SvgComponent={FacebookSvg} mq_IsTallScreen = {mq_IsTallScreen}>Facebook</OauthBtn_Rounded>
          <OauthBtn_Rounded SvgComponent={AppleSvg} mq_IsTallScreen = {mq_IsTallScreen}>Apple</OauthBtn_Rounded>
        </React.Fragment>}
      </S.OauthBtnsWrapper>
    </React.Fragment>
  );
};

export default SignUpPage;
