import React from "react";
import S from "./AuthRouter.style";

import { Route } from "react-router-dom";
import useRouter from "../../hooks/useRouter.hooks";
import { useDispatch, useSelector } from "react-redux";
import { changeAuthPage } from "../../redux/AuthPage/AuthPage.actions";

import LogInPage from "../../Pages/LogInPage/LogIn.page";
import SignUpPage from "../../Pages/SignUpPage/SignUp.page";

import SocialContactPair from "../../Components/SocialContact/SocialContactPair.component";
import { ReactComponent as LinkedInSvg } from "../../assets/svg/LinkedIn2.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/GitHub2.svg";

import logo from "../../assets/logo_new.png";

const AuthRouter = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentAuthPage = useSelector((state) => state.authPage.authPage);

  return (
    <S.AuthPageContainer className="AuthRouter-page">
      <S.LogInPageHazyBg className="S_LogInPageHazyBg"></S.LogInPageHazyBg>
      <S.LogInPageContent>
        <S.LogoWrapper
          className={`${currentAuthPage === "signup" ? "shrink" : ""}`}
        >
          <img className="logo" src={logo} alt="" role="presentation" />
        </S.LogoWrapper>

        <Route exact path={`${router.matchPath}/login`}>
          <LogInPage />
        </Route>
        <Route exact path={`${router.matchPath}/signup`}>
          <SignUpPage />
        </Route>
        <S.FooterWrapper>
          {/* // ============== Create Account Btn ==============  */}
          {currentAuthPage === "signup" && (
            <S.ChangeAuthPageLink
              to="/auth/login"
              onClick={() => dispatch(changeAuthPage("login"))}
            >
              Log In Now
            </S.ChangeAuthPageLink>
          )}
          {currentAuthPage === "login" && (
            <S.ChangeAuthPageLink
              to="/auth/signup"
              onClick={() => dispatch(changeAuthPage("signup"))}
            >
              Create Account
            </S.ChangeAuthPageLink>
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
    </S.AuthPageContainer>
  );
};

export default AuthRouter;
