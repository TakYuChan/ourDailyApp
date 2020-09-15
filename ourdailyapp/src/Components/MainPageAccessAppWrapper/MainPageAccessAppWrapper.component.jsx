import React from "react";
import S from "./MainPageAccessAppWrapper.style";

import MainPageAccessAppBtn from "../MainPageAccessAppBtn/MainPageAccessAppBtn.component";

import PropTypes from "prop-types";
// import APPLICATIONS_DATA from "../../data/application.data.jsx";

const MainPageAccessAppWrapper = ({ accessAppBtns }) => {
  return (
    <S.MainPageAccessAppWrapper className="application-container">
      {accessAppBtns.map((app, index) => (
        <MainPageAccessAppBtn key={index} app={app} index={index} />
      ))}
    </S.MainPageAccessAppWrapper>
  );
};

MainPageAccessAppWrapper.propTypes = {
  accessAppBtns: PropTypes.array.isRequired,
};

export default MainPageAccessAppWrapper;
