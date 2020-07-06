import React from "react";
import S from "./customTag.style";

const CustomTag = ({ children, background }) => (
  <S.CustomTagWrapper className="custom-tag" background={background}>
    {children}
  </S.CustomTagWrapper>
);

export default CustomTag;
