import React, { useEffect } from "react";
import S from "./mainPage.style";

import { useDispatch, useSelector } from "react-redux";
import { fetchAccessAppBtnsStart } from "../../redux/app/app.actions";

import MainPageAccessAppWrapper from "../../Components/MainPageAccessAppWrapper/MainPageAccessAppWrapper.component";
import ImageFrame from "../../Components/ImageFrames/ImageFrame/ImageFrame.component";

import profilePic from "../../assets/UIFace.png";

const MainPage = () => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.auth_P.user);

  // ============= Life Cycle Hooks =============

  useEffect(() => {
    dispatch(fetchAccessAppBtnsStart());
  }, [dispatch]);
  return (
    <S.MainPageContainer className="MainPage gs-page">
      <S.ImageFrameWrapper >
        <ImageFrame src={profilePic} halo={true} withExtraText={true}>
          {/* {userDetails.name} */}
        </ImageFrame>
      </S.ImageFrameWrapper>
      <S.AccessAppBtnWrapper>
        <MainPageAccessAppWrapper />
      </S.AccessAppBtnWrapper>
    </S.MainPageContainer>
  );
};

export default React.memo(MainPage);
