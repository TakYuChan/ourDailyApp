import React from "react";

import S from "./mainPage.style";

import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { connect } from "react-redux";

import ApplicationWrapper from "../../Components/applicationWrapper/applicationWrapper.component";
import Logo from "../../Components/logo/logo.component";

const MainPage = ({ closeShopNav }) => {
  return (
    <S.MainPageContainer className="MainPage pages" onClick={closeShopNav}>
      <S.LogoWrapper className="logo-wrapper">
        <Logo />
      </S.LogoWrapper>
      <ApplicationWrapper />
    </S.MainPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeShopNav: () => dispatch(closeShopNav()),
});

export default connect(null, mapDispatchToProps)(MainPage);
