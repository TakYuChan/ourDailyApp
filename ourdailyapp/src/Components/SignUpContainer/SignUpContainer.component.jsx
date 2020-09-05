import React from "react";
import S from "./SignUpContainer.style";

import SignUpForm from "../Forms/SignUpForm/SignUpForm.component";
import OauthBtn from "../Buttons/OauthBtn.component";

import { ReactComponent as GoogleSvg } from "../../assets/svg/google.svg";
import { ReactComponent as FacebookSvg } from "../../assets/svg/facebook.svg";
import { ReactComponent as AppleSvg } from "../../assets/svg/apple.svg";

const SignUpPage = () => {
  return (
    <React.Fragment>
      {/* // ============== Log In Form wrapper==============  */}
      <S.SignUpFormWrapper>
        <SignUpForm />
      </S.SignUpFormWrapper>
      {/* // =================== OR Seperate Line ====================== */}
      <S.Or>OR</S.Or>
      {/* // ============== Oauth Buttons wrapper==============  */}
      <S.OauthBtnsWrapper>
        <OauthBtn SvgComponent={GoogleSvg} className="btn">Google</OauthBtn>
        <OauthBtn SvgComponent={FacebookSvg}>Facebook</OauthBtn>
        <OauthBtn SvgComponent={AppleSvg}>Apple</OauthBtn>
      </S.OauthBtnsWrapper>
    </React.Fragment>
  );
};

export default SignUpPage;
