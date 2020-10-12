import React, {useContext} from "react";
import PixelSpinner from "../../Molecules/Spinners/PixelSpinner/PixelSpinner.component";
import {useSelector} from "react-redux";

import {UploadAvatarProvider, UploadAvatarContext} from "../../../context/uploadAvatar.context";
import S from "./styles/UploadAvatar.style";

export default function UploadAvatar({ children, ...restProps }) {
  return <UploadAvatarProvider><S.Container {...restProps}>{children}</S.Container></UploadAvatarProvider>;
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

UploadAvatar.TabsWrapper = function TabsWrapper({ tabBorderOnLeft, children, ...restProps }) {
  return <S.TabsWrapper {...restProps}><S.TabsWrapperBorder className={tabBorderOnLeft ? "left": "right"}/>{children}</S.TabsWrapper>;
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
  const { onUploadImgHandler } = useContext(UploadAvatarContext);

  return (
    <S.FileInput {...restProps} onChange={onUploadImgHandler} name="avatar" type="file">
      {children}
    </S.FileInput>
  );
};

UploadAvatar.AvatarDisplay = function AvatarDisplay({
  children,
  ...restProps
}) {
  const { imgUploaded } = useContext(UploadAvatarContext);
  return <S.AvatarDisplay {...restProps}><S.AvatarImg src={imgUploaded}></S.AvatarImg>{children}</S.AvatarDisplay>;
};


UploadAvatar.Title = function Title({ children, ...restProps }) {
  return <S.Title {...restProps}>{children}</S.Title>;
};

UploadAvatar.Text = function Text({ children, ...restProps }) {
  return <S.Text {...restProps}>{children}</S.Text>;
};

UploadAvatar.UploadBtn = function UploadBtn({children, ...restProps}) {
  const isUploadingAvatar = useSelector((state) => state.user.isUploadingAvatar);
  const { onSubmit } = useContext(UploadAvatarContext);
  // const dispatch = useDispatch();
  return <S.UploadBtn {...restProps} onClick={onSubmit}>{children}{isUploadingAvatar && <PixelSpinner size={1.2} animationDuration={1500}  style={{transform: "translateY(2px)"}}/>}</S.UploadBtn>
}
