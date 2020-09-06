import React from "react";
import S from "./OauthBtn.style";

const OauthBtn = ({ SvgComponent, children }) => {
  //@importedBy LogInContainer SignUpContainer

  return (
    <S.OauthBtn styled_provider={children}>
      <SvgComponent className="styled-svg"/>
      Continue with {children}
    </S.OauthBtn>
  );
};

export default OauthBtn;
