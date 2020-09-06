import React from "react";
import S from "./OauthBtnRounded.style";


import PropTypes from "prop-types";

const OauthBtnRounded = ({ SvgComponent, children }) => {
  //@importedBy LogInContainer SignUpContainer

  return (
    <S.OauthBtn_rounded styled_provider={children}>
      <SvgComponent className="styled-svg" />
    </S.OauthBtn_rounded>
  );
};

OauthBtnRounded.propTypes = {
  children: PropTypes.string.isRequired,
  SvgComponent: PropTypes.object.isRequired,
}

export default OauthBtnRounded;