import React from "react";
import S from "./AuthRouter.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import { selectAuthPage } from "../../redux/AuthRouter/AuthRouter.selectors";
import { changePage } from "../../redux/AuthRouter/AuthRouter.actions";

import LogInPage from "../../Pages/LogInPage/LogInPage.component";
import SignUpPage from "../../Pages/SignUpPage/SignUpPage.component";
import SocialContactPair from "../../Components/SocialContact/SocialContactPair.component";

import logo from "../../assets/logo_new.png";
import { ReactComponent as LinkedInSvg } from "../../assets/svg/LinkedIn2.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/GitHub2.svg";

const AuthRouter = ({ authPage, changeAuthPage }) => {
  function useRouter() {
    const match = useRouteMatch();

    return React.useMemo(() => {
      return {
        matchPath: match.path,
      };
    }, [match]);
  }

  const router = useRouter();

  return (
    <React.Fragment>
      <S.LogInPageHazyBg></S.LogInPageHazyBg>
      <S.LogInPageContent>
        <S.LogoWrapper
          className={authPage === "signup" && "styled_smallerLogo"}
        >
          <img className="logo" src={logo} alt="" role="presentation" />
        </S.LogoWrapper>
        <Switch>
          <Route
            path={`${router.matchPath}`}
            render={() => {
              console.log("hello");
            }}
          />
          <Route
            exact
            path={`${router.matchPath}/login`}
            component={<h1>hi</h1>}
          />
        </Switch>

        {/* {authPage === "login" && <LogInPage />}
        {authPage === "signup" && <SignUpPage />} */}
        {/* // ============== Create Account Btn ==============  */}
        {authPage === "login" && (
          <S.ToSignUpPage onClick={() => changeAuthPage("signup")}>
            Create Account
          </S.ToSignUpPage>
        )}
        {authPage === "signup" && (
          <S.ToLogInPage onClick={() => changeAuthPage("login")}>
            {`Log In Now ${router.matchPath}`}
          </S.ToLogInPage>
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
