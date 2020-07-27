import React from "react";
import S from "./applicationWrapper.style";

import ApplicationItem from "../../Components/applicationItem/applicationItem.component";

import APPLICATIONS_DATA from "../../data/application.data.jsx";

const ApplicationWrapper = () => {
  return (
    <S.ApplicationsContainer className="application-container">
      {APPLICATIONS_DATA.map((app, index) => (
        <ApplicationItem key={index} app={app} index={index} />
      ))}
    </S.ApplicationsContainer>
  );
};

export default ApplicationWrapper;
