import React from "react";
import S from "./LogInOrganism.style";

import LogInForm from "../Forms/LogInForm/LogInForm.component";
import OauthBtn from "../Molecules/Buttons/OauthBtn/OauthBtn.component";
import OauthBtnWithAuth from "../Molecules/Buttons/OauthBtn/OauthBtn.withAuth";

import { ReactComponent as FacebookSvg } from "../../assets/svg/facebook.svg";
import { ReactComponent as AppleSvg } from "../../assets/svg/apple.svg";

const LogInOrganism = () => {
  return (
    <React.Fragment>
      {/* // ============== Log In Form wrapper==============  */}
      <S.LogInFormWrapper>
        <LogInForm />
      </S.LogInFormWrapper>
      {/* // ============== Oauth Buttons wrapper==============  */}
      <S.OauthBtnsWrapper>
        <OauthBtnWithAuth provider="google" />
        <OauthBtn SvgComponent={FacebookSvg}>Facebook</OauthBtn>
        <OauthBtn SvgComponent={AppleSvg}>Apple</OauthBtn>
      </S.OauthBtnsWrapper>
    </React.Fragment>
  );
};

export default LogInOrganism;
