import React, { useEffect } from "react";
import profilePic from "../../assets/UIFace.png";
import S from "./mainPage.style";

import { useSelector, useDispatch } from "react-redux";
import { fetchAccessAppBtnsStart } from "../../redux/app/app.actions";

import MainPageAccessAppWrapper from "../../Components/MainPageAccessAppWrapper/MainPageAccessAppWrapper.component";
import Loader from "../../Components/Loader/Loader.component";
import RippleSpinner from "../../Components/Molecules/Spinners/RippleSpinner/RippleSpinner.component";

const MainPage = () => {
  const accessAppBtns = useSelector((state) => state.app.accessAppBtns);
  const dispatch = useDispatch();

  // ============= Life Cycle Hooks =============

  useEffect(() => {
    dispatch(fetchAccessAppBtnsStart());
  }, [dispatch]);

  return (
    <S.MainPageContainer className="MainPage gs-page ">
      <S.picNameWrapper>
        <S.ImgWrapper>
          <S.Img src={profilePic} />
          <S.EditProfileText className="styled_editProfileSpan">
            Edit Profile
          </S.EditProfileText>
        </S.ImgWrapper>
        <S.username>name</S.username>
      </S.picNameWrapper>
      <Loader SpinnerComponent={RippleSpinner} isLoading={!!!accessAppBtns}>
        {() => {
          return (
            <MainPageAccessAppWrapper
              accessAppBtns={accessAppBtns ? accessAppBtns : []}
            />
          );
        }}
      </Loader>
    </S.MainPageContainer>
  );
};

export default React.memo(MainPage);
