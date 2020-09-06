import React from "react";
import S from "./OauthBtn.style";

const OauthBtn = ({ SvgComponent, children, mq_IsTallScreen, withAuthText }) => {
  //@importedBy LogInContainer SignUpContainer

  return (
    <S.OauthBtn styled_provider={children} mq_IsTallScreen={mq_IsTallScreen}>
      <SvgComponent className="styled-svg" />
      {(mq_IsTallScreen || withAuthText) && `Continue with ${children}`}
    </S.OauthBtn>
  );
};

export default OauthBtn;
