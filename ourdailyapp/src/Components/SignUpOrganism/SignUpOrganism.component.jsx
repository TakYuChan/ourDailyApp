import React from "react";
import S from "./SignUpOrganism.style";

import SignUpForm from "../Forms/SignUpForm/SignUpForm.component";
import OauthBtn from "../Molecules/Buttons/OauthBtn/OauthBtn.component";
import OauthBtnContainer from "../Molecules/Buttons/OauthBtn/OauthBtn.container";

import OauthBtnRounded from "../Molecules/Buttons/OauthBtnRounded/OauthBtnRounded.component";
import OauthBtnRoundedContainer from "../Molecules/Buttons/OauthBtnRounded/OauthBtnRounded.container";

import { ReactComponent as FacebookSvg } from "../../assets/svg/facebook.svg";
import { ReactComponent as AppleSvg } from "../../assets/svg/apple.svg";

import PropTypes from "prop-types";

const SignUpOrganism = ({ mq_IsTallScreen }) => {
  return (
    <React.Fragment>
      {/* // ============== Log In Form wrapper==============  */}
      <S.SignUpFormWrapper mq_IsTallScreen={mq_IsTallScreen}>
        <SignUpForm />
      </S.SignUpFormWrapper>
      {/* // =================== OR Seperate Line ====================== */}
      <S.Or mq_IsTallScreen={mq_IsTallScreen}>OR</S.Or>
      {/* // ============== Oauth Buttons wrapper==============  */}
      <S.OauthBtnsWrapper mq_IsTallScreen={mq_IsTallScreen}>
        {mq_IsTallScreen ? (
          <React.Fragment>
            <OauthBtnContainer provider="google" />
            <OauthBtn
              SvgComponent={FacebookSvg}
              mq_IsTallScreen={mq_IsTallScreen}
            >
              Facebook
            </OauthBtn>
            <OauthBtn SvgComponent={AppleSvg} mq_IsTallScreen={mq_IsTallScreen}>
              Apple
            </OauthBtn>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <OauthBtnRoundedContainer provider="google" />
            <OauthBtnRounded
              SvgComponent={FacebookSvg}
              mq_IsTallScreen={mq_IsTallScreen}
            >
              Facebook
            </OauthBtnRounded>
            <OauthBtnRounded
              SvgComponent={AppleSvg}
              mq_IsTallScreen={mq_IsTallScreen}
            >
              Apple
            </OauthBtnRounded>
          </React.Fragment>
        )}
      </S.OauthBtnsWrapper>
    </React.Fragment>
  );
};

SignUpOrganism.propTypes = {
  mq_IsTallScreen: PropTypes.bool.isRequired,
};

export default SignUpOrganism;
