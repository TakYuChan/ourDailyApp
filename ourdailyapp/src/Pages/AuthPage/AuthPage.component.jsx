import React from "react";
import S from "./AuthPage.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useMediaQuery } from "react-responsive";

import { selectAuthPage } from "../../redux/AuthPage/AuthPage.selectors";
import { changePage } from "../../redux/AuthPage/AuthPage.actions";

import LogInOrganism from "../../Components/LogInOrganism/LogInOrganism.component";
import SignUpOrganism from "../../Components/SignUpOrganism/SignUpOrganism.component";
import SocialContactPair from "../../Components/SocialContact/SocialContactPair.component";

import logo from "../../assets/logo_new.png";
import { ReactComponent as LinkedInSvg } from "../../assets/svg/LinkedIn2.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/GitHub2.svg";

import PropTypes from "prop-types";

const AuthPage = ({ authPage, changeAuthPage }) => {
  const mq_IsTallScreen = useMediaQuery({ query: "(min-device-height: 629px" });

  return (
    <React.Fragment>
      <S.LogInPageHazyBg className="webp"></S.LogInPageHazyBg>
      <S.LogInPageContent
        className={`${authPage} ${
          mq_IsTallScreen ? "mq_IsTallScreen" : ""
        } webp`}
        styled_authPage={authPage}
        mq_IsTallScreen={mq_IsTallScreen}
      >
        <S.LogoWrapper
          className={authPage === "signup" && "styled_smallerLogo"}
        >
          <img className="logo" src={logo} alt="" role="presentation" />
        </S.LogoWrapper>

        <S.LogInWrapper>
          {authPage === "login" && <LogInOrganism />}
        </S.LogInWrapper>
        <S.SignUpWrapper>
          {authPage === "signup" && (
            <SignUpOrganism mq_IsTallScreen={mq_IsTallScreen} />
          )}
        </S.SignUpWrapper>

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
      </S.LogInPageContent>
    </React.Fragment>
  );
};

AuthPage.propTypes = {
  authPage: PropTypes.string.isRequired,
  changeAuthPage: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authPage: selectAuthPage,
});

const mapDispatchToProps = (dispatch) => ({
  changeAuthPage: (pageName) => dispatch(changePage(pageName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
