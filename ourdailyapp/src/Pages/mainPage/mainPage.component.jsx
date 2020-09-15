import React, { useEffect } from "react";
import S from "./mainPage.style";

import { useSelector, useDispatch } from "react-redux";
import { fetchAccessAppBtnsStart } from "../../redux/app/app.actions";

import MainPageAccessAppWrapper from "../../Components/MainPageAccessAppWrapper/MainPageAccessAppWrapper.component";
import Loader from "../../Components/RenderPropsComs/Loader/Loader.renderPropCom";
import RippleSpinner from "../../Components/Molecules/Spinners/RippleSpinner/RippleSpinner.component";
import ImageFrame from "../../Components/ImageFrames/ImageFrame/ImageFrame.component";

import profilePic from "../../assets/UIFace.png";

const MainPage = () => {
  const accessAppBtns = useSelector((state) => state.app.accessAppBtns);
  const dispatch = useDispatch();

  // ============= Life Cycle Hooks =============

  useEffect(() => {
    dispatch(fetchAccessAppBtnsStart());
  }, [dispatch]);

  return (
    <S.MainPageContainer className="MainPage gs-page ">
      <S.ImageFrameWrapper>
        <ImageFrame src={profilePic} halo={true} withExtraText={true} />
      </S.ImageFrameWrapper>
      <S.AccessAppBtnWrapper>
        <Loader SpinnerComponent={RippleSpinner} isLoading={!!!accessAppBtns}>
          {() => {
            return (
              <MainPageAccessAppWrapper
                accessAppBtns={accessAppBtns ? accessAppBtns : []}
              />
            );
          }}
        </Loader>
      </S.AccessAppBtnWrapper>
    </S.MainPageContainer>
  );
};

export default React.memo(MainPage);
