import React from "react";
import S from "./MainPageAccessAppWrapper.style";

import MainPageAccessAppBtn from "../MainPageAccessAppBtn/MainPageAccessAppBtn.component";

// import APPLICATIONS_DATA from "../../data/application.data.jsx";

const MainPageAccessAppWrapper = ({ accessAppBtns }) => {
  return (
    <S.ApplicationsContainer className="application-container">
      {accessAppBtns.map((app, index) => (
        <MainPageAccessAppBtn key={index} app={app} index={index} />
      ))}
    </S.ApplicationsContainer>
  );
};

export default MainPageAccessAppWrapper;
