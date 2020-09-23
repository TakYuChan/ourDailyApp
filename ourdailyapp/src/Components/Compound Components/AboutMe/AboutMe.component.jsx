import React from "react";
import S from "./styles/AboutMe.style";

export default function AboutMe({ children, ...restProps }) {
  return <S.Background {...restProps}>{children}</S.Background>;
}

AboutMe.Container = function AboutMeContainer({ children, ...restProps }) {
  return <S.Container {...restProps}>{children}</S.Container>;
};

AboutMe.Card = function AboutMeCard({ children, ...restProps }) {
  return (
    <S.CardContainer {...restProps}>
      <S.TopPart>
        <img src="/images/assets/myImg.png" alt="my img" />
      </S.TopPart>
      <S.BottomPart>
        <S.CardName>Franky Chan</S.CardName>
        <S.CardText>Full Stack Developer</S.CardText>
        <S.SocialMediaWrapper>
          <S.SocialMediaBtn>
            <span
              className="iconfont icon-linkedin"
              style={{ color: "#0E76A8" }}
            ></span>
          </S.SocialMediaBtn>
          <S.SocialMediaBtn>
            <span className="iconfont icon-github"></span>
          </S.SocialMediaBtn>
        </S.SocialMediaWrapper>
      </S.BottomPart>
      {children}
    </S.CardContainer>
  );
};

AboutMe.TextWrapper = function TextWrapper({ children, ...restProps }) {
  return <S.TextWrapper {...restProps}>{children}</S.TextWrapper>;
};

AboutMe.Text = function Text({ children, ...restProps }) {
  return <S.Text {...restProps}>{children}</S.Text>;
};

AboutMe.WorkingManImg = function WorkingManImg({ children, ...restProps }) {
  return (
    <S.WorkingManImg src="/images/assets/man-working.png" {...restProps}>
      {children}
    </S.WorkingManImg>
  );
};
