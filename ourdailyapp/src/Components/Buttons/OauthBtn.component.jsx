import React from "react";
import S from "./OauthBtn.style";

const OauthBtn = ({ SvgComponent, provider, children }) => {
  //@importedBy LogInPage
  return (
    <S.OauthBtn styled_provider={children}>
      <SvgComponent className="styled-svg" />
      {`Continue with ${children}`}
    </S.OauthBtn>
  );
};

export default OauthBtn;
