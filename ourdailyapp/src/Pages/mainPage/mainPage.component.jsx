import React from "react";
import "./mainPage.style.scss";

import ApplicationWrapper from "../../Components/applicationWrapper/applicationWrapper.component";

import Logo from "../../Components/logo/logo.component";

const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="logo-style-box">
        <Logo id="mainPage-logo" wrapperId="mainPage-logo-wrapper" />
      </div>
      <ApplicationWrapper />
    </div>
  );
};

export default MainPage;
