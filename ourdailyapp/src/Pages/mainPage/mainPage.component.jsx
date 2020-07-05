import React from "react";

import S from "./mainPage.style";

import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { connect } from "react-redux";

import ApplicationWrapper from "../../Components/applicationWrapper/applicationWrapper.component";

const MainPage = ({ closeShopNav }) => {
  return (
    <S.MainPageContainer className="MainPage pages" onClick={closeShopNav}>
      <div className="logo-style-box">
        <S.Logo id="mainPage-logo" wrapperId="mainPage-logo-wrapper" />
      </div>
      <ApplicationWrapper />
    </S.MainPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeShopNav: () => dispatch(closeShopNav()),
});

export default connect(null, mapDispatchToProps)(MainPage);
