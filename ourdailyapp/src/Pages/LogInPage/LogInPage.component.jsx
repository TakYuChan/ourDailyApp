import React from "react";
import S from "./LogInPage.style";
import logo from "../../assets/logo_new.png";
import LogInForm from "../../Components/Forms/LogInForm/LogInForm.component";

const LogInPage = () => {
  return (
    <React.Fragment>
      <S.LogInPageHazyBg></S.LogInPageHazyBg>
      <S.LogInPageContent>
        <S.LogoWrapper>
          <img className="logo" src={logo} alt="" role="presentation" />
        </S.LogoWrapper>
        <S.LogInFormWrapper>
          <LogInForm />
        </S.LogInFormWrapper>
      </S.LogInPageContent>
    </React.Fragment>
  );
};

export default LogInPage;
