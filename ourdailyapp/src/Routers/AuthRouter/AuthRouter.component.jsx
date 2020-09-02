import React from "react";
import S from "./AuthRouter.style";

import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAuthPage } from "../../redux/AuthRouter/AuthRouter.selectors";

import LogInPage from "../../Pages/LogInPage/LogInPage.component";
import SignUpPage from "../../Pages/SignUpPage/SignUpPage.component";
import SocialContactPair from "../../Components/SocialContact/SocialContactPair.component";

import logo from "../../assets/logo_new.png";
import { ReactComponent as LinkedInSvg } from "../../assets/svg/LinkedIn2.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/GitHub2.svg";

const AuthRouter = ({ authPage }) => {
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
            exact
            path={`${router.matchPath}`}
            render={() => <Redirect to="/auth/login" />}
          />
          <Route
            exact
            path={`${router.matchPath}/login`}
            component={LogInPage}
          />
          <Route
            exact
            path={`${router.matchPath}/signup`}
            component={SignUpPage}
          />
          <Route
            path={`${router.matchPath}/:everyParams`}
            render={() => <Redirect to="/auth/login" />}
          />
        </Switch>
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

const mapStateToProps = createStructuredSelector({
  authPage: selectAuthPage,
});

export default connect(mapStateToProps)(AuthRouter);
