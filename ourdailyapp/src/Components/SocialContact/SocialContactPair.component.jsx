import React from "react";
import S from "./SocialContactPair.style";

const SocialContactPair = ({ SvgComponent, children }) => {

  return (
    <S.SocialContactPair >
      <SvgComponent className="styled-svg"/>
      {children}
    </S.SocialContactPair>
  );
};

export default SocialContactPair;
