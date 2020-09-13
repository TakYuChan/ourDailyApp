import React from "react";
import S from "./LogInOrganism.style";

import LogInForm from "../Forms/LogInForm/LogInForm.component";
import OauthBtn from "../Molecules/Buttons/OauthBtn/OauthBtn.component";
import OauthBtnContainer from "../Molecules/Buttons/OauthBtn/OauthBtn.container";

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
        <OauthBtnContainer provider="google" />
        <OauthBtn SvgComponent={FacebookSvg}>Facebook</OauthBtn>
        <OauthBtn SvgComponent={AppleSvg}>Apple</OauthBtn>
      </S.OauthBtnsWrapper>
    </React.Fragment>
  );
};

export default LogInOrganism;
