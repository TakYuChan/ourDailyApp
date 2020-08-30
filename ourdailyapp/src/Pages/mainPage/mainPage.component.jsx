import React, { useEffect } from "react";
import profilePic from "../../assets/UIFace.png";
import S from "./mainPage.style";

import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { connect } from "react-redux";
import { fetchAccessAppBtnsStart } from "../../redux/app/app.actions";

import MainPageAccessAppWrapperWithSpinner from "../../Components/MainPageAccessAppWrapper/MainPageAccessAppWrapperWithSpinner.component";

const MainPage = ({ fetchAccessAppBtnsStart, closeShopNav, closeNav }) => {
  // ============= Life Cycle Hooks =============

  useEffect(() => {
    fetchAccessAppBtnsStart();
  }, [fetchAccessAppBtnsStart]);

  return (
    <S.MainPageContainer className="MainPage gs-page " onClick={closeShopNav}>
      <S.picNameWrapper>
        <S.ImgWrapper>
          <S.Img src={profilePic} />
          <S.EditProfileText className="styled_editProfileSpan">
            Edit Profile
          </S.EditProfileText>
        </S.ImgWrapper>
        <S.username>name</S.username>
      </S.picNameWrapper>
      <MainPageAccessAppWrapperWithSpinner />
    </S.MainPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeShopNav: () => dispatch(closeShopNav()),
  fetchAccessAppBtnsStart: () => dispatch(fetchAccessAppBtnsStart()),
});

export default connect(null, mapDispatchToProps)(MainPage);
