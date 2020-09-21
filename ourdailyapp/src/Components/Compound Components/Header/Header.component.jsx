import React from "react";
import S from "./styles/Header.styles";

export default function Header({ children, ...restProps }) {
  return <S.Background {...restProps}>{children}</S.Background>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <S.Frame {...restProps}>{children}</S.Frame>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <S.Group {...restProps}>{children}</S.Group>;
};

Header.HeroGroup = function HeaderHeroGroup({ children, ...restProps }) {
  return <S.HeroGroup {...restProps}>{children}</S.HeroGroup>;
};

Header.HeroTextWrapper = function HeaderHeroTextWrapper({
  children,
  ...restProps
}) {
  return <S.HeroTextWrapper {...restProps}>{children}</S.HeroTextWrapper>;
};

Header.Logo = function HeaderFrame({ ...restProps }) {
  return <S.Logo {...restProps} />;
};

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <S.Link {...restProps}>{children}</S.Link>;
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <S.Button {...restProps}>{children}</S.Button>;
};

Header.HeroButton = function HeaderHeroButton({ children, ...restProps }) {
  return <S.HeroButton {...restProps}>{children}</S.HeroButton>;
};

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <S.Title {...restProps}>{children}</S.Title>;
};

Header.Subtitle = function HeaderSubtitle({ children, ...restProps }) {
  return <S.Subtitle {...restProps}>{children}</S.Subtitle>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <S.Text {...restProps}>{children}</S.Text>;
};

Header.HeroImage = function HeaderImage({ children, ...restProps }) {
  return <S.HeroImage {...restProps}>{children}</S.HeroImage>;
};

Header.DropDownTogglerWrapper = function HeaderDropDownTogglerWrapper({
  children,
  ...restProps
}) {
  return (
    <S.DropDownTogglerWrapper {...restProps}>
      {children}
    </S.DropDownTogglerWrapper>
  );
};

Header.DropDownToggler = function HeaderDropDownToggler({ ...restProps }) {
  return <S.DropDownToggler {...restProps} />;
};

Header.DropDownMenu = function HeaderDropDownMenu({ children, ...restProps }) {
  return (
    <S.DropDownMenu {...restProps}>
      <S.ul>{children}</S.ul>
    </S.DropDownMenu>
  );
};

Header.DropDownItem = function HeaderDropDownItem({ children, ...restProps }) {
  return <S.DropDownItem {...restProps}>{children}</S.DropDownItem>;
};
