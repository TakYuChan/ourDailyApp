import React from "react";
import S from "./LogInPage.style";
import logo from "../../assets/logo_new.png";
import LogInForm from "../../Components/Forms/LogInForm/LogInForm.component";
import OauthBtn from "../../Components/Buttons/OauthBtn.component";
import SocialContactPair from "../../Components/SocialContact/SocialContactPair.component";

import { ReactComponent as GoogleSvg } from "../../assets/svg/google.svg";
import { ReactComponent as FacebookSvg } from "../../assets/svg/facebook.svg";
import { ReactComponent as AppleSvg } from "../../assets/svg/apple.svg";
import { ReactComponent as LinkedInSvg } from "../../assets/svg/LinkedIn2.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/GitHub2.svg";

const LogInPage = () => {
  return (
    <React.Fragment>
      <S.LogInPageHazyBg></S.LogInPageHazyBg>
      <S.LogInPageContent>
        {/* // ============== Logo ==============  */}
        <S.LogoWrapper>
          <img className="logo" src={logo} alt="" role="presentation" />
        </S.LogoWrapper>
        {/* // ============== Log In Form wrapper==============  */}
        <S.LogInFormWrapper>
          <LogInForm />
        </S.LogInFormWrapper>
        {/* // ============== Oauth Buttons wrapper==============  */}
        <S.OauthBtnsWrapper>
          <OauthBtn SvgComponent={GoogleSvg}>Google</OauthBtn>
          <OauthBtn SvgComponent={FacebookSvg}>Facebook</OauthBtn>
          <OauthBtn SvgComponent={AppleSvg}>Apple</OauthBtn>
        </S.OauthBtnsWrapper>
        {/* // ============== Create Account Btn ==============  */}
        <S.ToCreateAccount to="/">Create Account</S.ToCreateAccount>
        <S.SocialContactAndCopyRightWrapper>
          {/* // ============== My Social Media Contact ==============  */}
          <S.SocialContactWrapper>
            <SocialContactPair SvgComponent={LinkedInSvg}>
              LinkedIn
            </SocialContactPair>
            <SocialContactPair SvgComponent={GithubSvg}>
              Github
            </SocialContactPair>
          </S.SocialContactWrapper>
          {/* // ============== Copy Right Text ==============  */}
          <S.CopyRightText>© 2020 by Franky Chan</S.CopyRightText>
        </S.SocialContactAndCopyRightWrapper>
      </S.LogInPageContent>
    </React.Fragment>
  );
};

export default LogInPage;
