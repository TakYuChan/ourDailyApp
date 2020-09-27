import React from "react";
import S from "./SignUp.style";

import { useMediaQuery } from "react-responsive";

import SignUpOrganism from "../../Components/SignUpOrganism/SignUpOrganism.component";

const SignUpPage = () => {
  const mq_IsTallScreen = useMediaQuery({ query: "(min-device-height: 629px" });

  return (
    <S.SignUpPageContainer
      className={`signup ${
        mq_IsTallScreen ? "mq_IsTallScreen" : ""
      } S_LogInPageContent`}
      styled_authPage={"signup"}
      mq_IsTallScreen={mq_IsTallScreen}
    >
      <S.SignUpWrapper>
        <SignUpOrganism mq_IsTallScreen={mq_IsTallScreen} />
      </S.SignUpWrapper>
    </S.SignUpPageContainer>
  );
};

export default SignUpPage;
