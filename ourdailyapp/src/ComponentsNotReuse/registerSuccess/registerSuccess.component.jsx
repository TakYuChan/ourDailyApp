import React from "react";
import S from "./registerSuccess.style";

const RegisterSuccessScene = () => {
  return (
    <S.PageContainer className="registerSuccess-body">
      <S.CongraText className="registerSuccess-text">
        Congratulations! You have successfully registered an account.
      </S.CongraText>
    </S.PageContainer>
  );
};

export default RegisterSuccessScene;
