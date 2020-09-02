import React from "react";
import S from "./AuthRouter.style";
import "./transitionGroup.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAuthPage } from "../../redux/AuthRouter/AuthRouter.selectors";
import { changePage } from "../../redux/AuthRouter/AuthRouter.actions";

import LogInPage from "../../Pages/LogInPage/LogInPage.component";
import SignUpPage from "../../Pages/SignUpPage/SignUpPage.component";
import SocialContactPair from "../../Components/SocialContact/SocialContactPair.component";

import logo from "../../assets/logo_new.png";
import { ReactComponent as LinkedInSvg } from "../../assets/svg/LinkedIn2.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/GitHub2.svg";

const AuthRouter = ({ authPage, changeAuthPage }) => {
  return (
    <React.Fragment>
      <S.LogInPageHazyBg></S.LogInPageHazyBg>
      <S.LogInPageContent>
        <S.LogoWrapper
          className={authPage === "signup" && "styled_smallerLogo"}
        >
          <img className="logo" src={logo} alt="" role="presentation" />
        </S.LogoWrapper>

        {authPage === "login" && <LogInPage />}
        {authPage === "signup" && <SignUpPage />}
        {/* ============== Switch Auth Page Btn ============== */}
        {authPage === "login" && (
          <S.ToSignUpBtn
            onClick={() => {
              changeAuthPage("signup");
            }}
          >
            Create Account
          </S.ToSignUpBtn>
        )}
        {authPage === "signup" && (
          <S.ToLogInBtn
            onClick={() => {
              changeAuthPage("login");
            }}
          >
            Log In Now
          </S.ToLogInBtn>
        )}
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

const mapStateToProps = createStructuredSelector({
  authPage: selectAuthPage,
});

const mapDispatchToProps = (dispatch) => ({
  changeAuthPage: (pageName) => dispatch(changePage(pageName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthRouter);
