import React, { useEffect } from "react";
import S from "./mainPage.style";

import { useDispatch } from "react-redux";
import { fetchAccessAppBtnsStart } from "../../redux/app/app.actions";

import MainPageAccessAppWrapper from "../../Components/MainPageAccessAppWrapper/MainPageAccessAppWrapper.component";
import ImageFrame from "../../Components/ImageFrames/ImageFrame/ImageFrame.component";

import profilePic from "../../assets/UIFace.png";

const MainPage = () => {
  const dispatch = useDispatch();

  // ============= Life Cycle Hooks =============

  useEffect(() => {
    dispatch(fetchAccessAppBtnsStart());
  }, [dispatch]);
  return (
    <S.MainPageContainer className="MainPage gs-page">
      <S.ImageFrameWrapper>
        <ImageFrame src={profilePic} halo={true} withExtraText={true} />
      </S.ImageFrameWrapper>
      <S.AccessAppBtnWrapper>
        <MainPageAccessAppWrapper />
      </S.AccessAppBtnWrapper>
    </S.MainPageContainer>
  );
};

export default React.memo(MainPage);
