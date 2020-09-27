import React from "react";
import S from "./LogIn.style";

import { useMediaQuery } from "react-responsive";

import LogInOrganism from "../../Components/LogInOrganism/LogInOrganism.component";
import SocialContactPair from "../../Components/SocialContact/SocialContactPair.component";

import logo from "../../assets/logo_new.png";
import { ReactComponent as LinkedInSvg } from "../../assets/svg/LinkedIn2.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/GitHub2.svg";

const LogInPage = () => {
  const mq_IsTallScreen = useMediaQuery({ query: "(min-device-height: 629px" });

  return (
    <S.LogInPageContainer
      className={`login ${
        mq_IsTallScreen ? "mq_IsTallScreen" : ""
      } S_LogInPageContent`}
      styled_authPage="login"
      mq_IsTallScreen={mq_IsTallScreen}
    >
      <S.LogoWrapper>
        <img className="logo" src={logo} alt="" role="presentation" />
      </S.LogoWrapper>
      <S.LogInWrapper>
        <LogInOrganism />
      </S.LogInWrapper>
      <S.FooterWrapper>
        {/* // ============== Create Account Btn ==============  */}

        <S.ToSignUpPage to="/auth/signup">Create Account</S.ToSignUpPage>

        {/* // ============== My Social Media Contact ==============  */}
        <S.SocialContactAndCopyRightWrapper>
          <S.SocialContactWrapper>
            <SocialContactPair
              SvgComponent={LinkedInSvg}
              link="https://www.linkedin.com/in/franky-tak-yu-chan-18b51518b/"
            >
              LinkedIn
            </SocialContactPair>
            <SocialContactPair
              SvgComponent={GithubSvg}
              link="https://github.com/TakYuChan"
            >
              Github
            </SocialContactPair>
          </S.SocialContactWrapper>
          {/* // ============== Copy Right Text ==============  */}
          <S.CopyRightText>© 2020 by Franky Chan</S.CopyRightText>
        </S.SocialContactAndCopyRightWrapper>
      </S.FooterWrapper>
    </S.LogInPageContainer>
  );
};

export default LogInPage;
