import React from "react";

import S from "./styles/UploadAvatar.style";

export default function UploadAvatar({ children, ...restProps }) {
  return <S.Container {...restProps}>{children}</S.Container>;
}

UploadAvatar.Frame = function Frame({ children, ...restProps }) {
  return <S.Frame {...restProps}>{children}</S.Frame>;
};

UploadAvatar.Group = function Group({ children, ...restProps }) {
  return <S.Group {...restProps}>{children}</S.Group>;
};

UploadAvatar.TextGroup = function TextGroup({ children, ...restProps }) {
  return <S.TextGroup {...restProps}>{children}</S.TextGroup>;
};

UploadAvatar.PanelContainer = function PanelContainer({
  children,
  ...restProps
}) {
  return <S.PanelContainer {...restProps}>{children}</S.PanelContainer>;
};

UploadAvatar.TabsWrapper = function TabsWrapper({ children, ...restProps }) {
  return <S.TabsWrapper {...restProps}>{children}</S.TabsWrapper>;
};

UploadAvatar.Tab = function Tab({ children, ...restProps }) {
  return <S.Tab {...restProps}>{children}</S.Tab>;
};

UploadAvatar.FileInputLabel = function FileInputLabel({
  children,
  ...restProps
}) {
  return <S.FileInputLabel {...restProps}>{children}</S.FileInputLabel>;
};

UploadAvatar.FileInput = function FileInput({ children, ...restProps }) {
  return (
    <S.FileInput {...restProps} type="file">
      {children}
    </S.FileInput>
  );
};

UploadAvatar.AvatarDisplay = function AvatarDisplay({
  src,
  children,
  ...restProps
}) {
  return <S.AvatarDisplay {...restProps}>{children}</S.AvatarDisplay>;
};

UploadAvatar.Title = function Title({ children, ...restProps }) {
  return <S.Title {...restProps}>{children}</S.Title>;
};

UploadAvatar.Text = function Text({ children, ...restProps }) {
  return <S.Text {...restProps}>{children}</S.Text>;
};
