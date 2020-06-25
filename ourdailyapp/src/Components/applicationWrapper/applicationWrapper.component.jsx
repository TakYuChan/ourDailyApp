import React from "react";
import "./applicationWrapper.style.scss";

import ApplicationItem from "../../Components/applicationItem/applicationItem.component";

import APPLICATIONS_DATA from "../../data/application.data.jsx";

const ApplicationWrapper = () => {
  return (
    <div className="application-wrapper">
      {APPLICATIONS_DATA.map((app, index) => (
        <ApplicationItem key={index} app={app} />
      ))}
    </div>
  );
};

export default ApplicationWrapper;
