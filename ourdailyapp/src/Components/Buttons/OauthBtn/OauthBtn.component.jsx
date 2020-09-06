import React from "react";
import S from "./OauthBtn.style";

import PropTypes from "prop-types";

const OauthBtn = ({ SvgComponent, children }) => {
  //@importedBy LogInContainer SignUpContainer

  return (
    <S.OauthBtn styled_provider={children}>
      <SvgComponent className="styled-svg"/>
      Continue with {children}
    </S.OauthBtn>
  );
};

OauthBtn.propTypes = {
  SvgComponent: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
}

export default OauthBtn;
