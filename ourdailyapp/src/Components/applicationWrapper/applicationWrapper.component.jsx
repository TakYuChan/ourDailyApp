import React from "react";
import "./applicationWrapper.style.scss";

import ApplicationItem from "../../Components/applicationItem/applicationItem.component";

import APPLICATIONS_DATA from "../../data/application.data.js";

const ApplicationWrapper = () => {
  const applications = APPLICATIONS_DATA;

  return (
    <div className="application-wrapper">
      {applications.map(({ name, iconSource }, index) => (
        <ApplicationItem key={index} iconSource={iconSource}>
          {name}
        </ApplicationItem>
      ))}
    </div>
  );
};

export default ApplicationWrapper;
