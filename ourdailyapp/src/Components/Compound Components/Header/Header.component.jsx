import React from "react";
import S from "./styles/Header.styles";
import { useMediaQuery } from "react-responsive";

export default function Header({ children, ...restProps }) {
  return <S.Background {...restProps}>{children}</S.Background>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <S.Frame {...restProps}>{children}</S.Frame>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <S.Group {...restProps}>{children}</S.Group>;
};

Header.Hero = function HeaderHero({ children, ...restProps }) {
  const width_under_850 = useMediaQuery({ query: "(max-device-width: 850px" });
  const width_under_650 = useMediaQuery({ query: "(max-device-width: 650px" });
  return (
    <S.Hero
      {...restProps}
      style={{
        gridColumn: "2",
      }}
    >
      <S.HeroTextWrapper>
        <S.Title>Land A Coding Job with Skillsme Rating</S.Title>
        <S.Subtitle>Referral 10K+ Companies</S.Subtitle>
        <S.Text>
          Receive your Skillsme rating by completing real projects and get
          validated by the world's top 5% coders.
        </S.Text>
        <S.HeroButton>Get Started</S.HeroButton>
      </S.HeroTextWrapper>
      {!width_under_650 && (
        <S.Group
          style={{
            flexBasis: "35%",
            position: "relative",
          }}
        >
          <S.HeroImage
            src="/images/assets/hero.png"
            alt="a woman using mobile"
            className={`${width_under_850 ? "translucent" : ""}`}
          />
        </S.Group>
      )}

      {children}
    </S.Hero>
  );
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
