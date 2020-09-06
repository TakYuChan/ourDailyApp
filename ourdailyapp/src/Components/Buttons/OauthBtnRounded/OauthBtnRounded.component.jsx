import React from "react";
import S from "./OauthBtn_Rounded.style";

const OauthBtn_rounded = ({ SvgComponent, children }) => {
  //@importedBy LogInContainer SignUpContainer

  return (
    <S.OauthBtn_rounded styled_provider={children}>
      <SvgComponent className="styled-svg" />
    </S.OauthBtn_rounded>
  );
};

export default OauthBtn_rounded;
// ${props => !props.mq_IsTallScreen && "padding-left: 1em;"}