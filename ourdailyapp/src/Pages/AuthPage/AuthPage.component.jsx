import React from "react";
import S from "./AuthPage.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useMediaQuery } from 'react-responsive';

import { selectAuthPage } from "../../redux/AuthRouter/AuthRouter.selectors";
import { changePage } from "../../redux/AuthRouter/AuthRouter.actions";

import LogInContainer from "../../Components/LogInContainer/LogInContainer.component";
import SignUpContainer from "../../Components/SignUpContainer/SignUpContainer.component";
import SocialContactPair from "../../Components/SocialContact/SocialContactPair.component";

import logo from "../../assets/logo_new.png";
import { ReactComponent as LinkedInSvg } from "../../assets/svg/LinkedIn2.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/GitHub2.svg";

const AuthRouter = ({ authPage, changeAuthPage }) => {

  const mq_IsTallScreen = useMediaQuery({query: '(min-device-height: 629px'});

  return (
    <React.Fragment>
      <S.LogInPageHazyBg></S.LogInPageHazyBg>
      <S.LogInPageContent styled_authPage={authPage} mq_IsTallScreen={mq_IsTallScreen}>
        <S.LogoWrapper
          className={authPage === "signup" && "styled_smallerLogo"}
        >
          <img className="logo" src={logo} alt="" role="presentation" />
        </S.LogoWrapper>

        <S.LogInWrapper>{authPage === "login" && <LogInContainer />}</S.LogInWrapper>
        <S.SignUpWrapper>{authPage === "signup" && <SignUpContainer mq_IsTallScreen = {mq_IsTallScreen} />}</S.SignUpWrapper>

        <S.FooterWrapper>
          {/* // ============== Create Account Btn ==============  */}
          {authPage === "login" && (
            <S.ToSignUpPage onClick={() => changeAuthPage("signup")}>
              Create Account
            </S.ToSignUpPage>
          )}
          {authPage === "signup" && (
            <S.ToLogInPage onClick={() => changeAuthPage("login")}>
              Log In Now
            </S.ToLogInPage>
          )}
          {/* // ============== My Social Media Contact ==============  */}
          <S.SocialContactAndCopyRightWrapper>
            <S.SocialContactWrapper>
              <SocialContactPair SvgComponent={LinkedInSvg}>
                LinkedIn
              </SocialContactPair>
              <SocialContactPair SvgComponent={GithubSvg} >
                Github
              </SocialContactPair>
            </S.SocialContactWrapper>
            {/* // ============== Copy Right Text ==============  */}
            <S.CopyRightText>© 2020 by Franky Chan</S.CopyRightText>
          </S.SocialContactAndCopyRightWrapper>
        </S.FooterWrapper>
      </S.LogInPageContent>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  authPage: selectAuthPage,
});

const mapDispatchToProps = (dispatch) => ({
  changeAuthPage: (pageName) => dispatch(changePage(pageName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthRouter);
