import React from "react";
import S from "./styles/Decoration.style";
import PropTypes from "prop-types";

export default function Decoration({ children, ...otherProps }) {
  return <S.Container {...otherProps}>{children}</S.Container>;
}

Decoration.DividerDivSkew = function DividerDivSkew({ ...otherProps }) {
  return <S.DividerDivSkew {...otherProps} />;
};

Decoration.DividerDivSkew.propTypes = {
  firstColor: PropTypes.string.isRequired,
  secodColor: PropTypes.string.isRequired,
};
