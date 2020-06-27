import React from "react";
import "./mainPage.style.scss";

import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { connect } from "react-redux";

import ApplicationWrapper from "../../Components/applicationWrapper/applicationWrapper.component";
import Logo from "../../Components/logo/logo.component";

const MainPage = ({ closeShopNav }) => {
  return (
    <div className="MainPage" onClick={closeShopNav}>
      <div className="logo-style-box">
        <Logo id="mainPage-logo" wrapperId="mainPage-logo-wrapper" />
      </div>
      <ApplicationWrapper />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeShopNav: () => dispatch(closeShopNav()),
});

export default connect(null, mapDispatchToProps)(MainPage);
