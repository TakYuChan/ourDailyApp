import React, { useEffect } from "react";

import S from "./mainPage.style";

import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { connect } from "react-redux";
import { fetchAccessAppBtnsStart } from "../../redux/app/app.actions";

import MainPageAccessAppWrapperWithSpinner from "../../Components/MainPageAccessAppWrapper/MainPageAccessAppWrapperWithSpinner.component";
import Logo from "../../Components/logo/logo.component";

const MainPage = ({ fetchAccessAppBtnsStart, closeShopNav }) => {
  // ============= Life Cycle Hooks =============

  useEffect(() => {
    fetchAccessAppBtnsStart();
  }, [fetchAccessAppBtnsStart]);

  return (
    <S.MainPageContainer className="MainPage pages" onClick={closeShopNav}>
      <S.LogoWrapper className="logo-wrapper">
        <Logo />
      </S.LogoWrapper>
      <MainPageAccessAppWrapperWithSpinner />
    </S.MainPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeShopNav: () => dispatch(closeShopNav()),
  fetchAccessAppBtnsStart: () => dispatch(fetchAccessAppBtnsStart()),
});

export default connect(null, mapDispatchToProps)(MainPage);
