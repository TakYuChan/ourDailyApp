import React, { useEffect } from "react";
import S from "./LogInPage.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAuthPage } from "../../redux/AuthRouter/AuthRouter.selectors";
import { changePage } from "../../redux/AuthRouter/AuthRouter.actions";

import LogInForm from "../../Components/Forms/LogInForm/LogInForm.component";
import OauthBtn from "../../Components/Buttons/OauthBtn.component";

import { ReactComponent as GoogleSvg } from "../../assets/svg/google.svg";
import { ReactComponent as FacebookSvg } from "../../assets/svg/facebook.svg";
import { ReactComponent as AppleSvg } from "../../assets/svg/apple.svg";

const LogInPage = ({ authPage, changeAuthPage }) => {
  useEffect(() => {
    changeAuthPage("login");
  }, [changeAuthPage]);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  authPage: selectAuthPage,
});

const mapDispatchToProps = (dispatch) => ({
  changeAuthPage: (pageName) => dispatch(changePage(pageName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
