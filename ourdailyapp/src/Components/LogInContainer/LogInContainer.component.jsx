import React from "react";
import S from "./LogInContainer.style";

import LogInForm from "../Forms/LogInForm/LogInForm.component";
import OauthBtn from "../Buttons/OauthBtn.component";

import { ReactComponent as GoogleSvg } from "../../assets/svg/google.svg";
import { ReactComponent as FacebookSvg } from "../../assets/svg/facebook.svg";
import { ReactComponent as AppleSvg } from "../../assets/svg/apple.svg";

const LogInPage = () => {
  return (
    <S.LogInPage>
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
    </S.LogInPage>
  );
};

export default LogInPage;
