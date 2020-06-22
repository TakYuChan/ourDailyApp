import React from "react";
import "./customCard.style.scss";

import { withRouter, Link } from "react-router-dom";

import CustomButton from "../../Components/customButton/customButton.component";

const CustomCard = ({ match, app }) => {
  const { title, description, imageSrc } = app;

  return (
    <Link className="link" to={`${match.path}/todolist`}>
      <div className="card-wrapper">
        <div className="card card-app">
          <div className="img-wrapper">
            <img
              src={imageSrc}
              alt="to do list application"
              className="app-img"
            />
          </div>
          <h3 className="app-title">{title}</h3>
          <h5 className="app-description">{description}</h5>
          <CustomButton className="btn--start">Start</CustomButton>
        </div>
      </div>
    </Link>
  );
};

export default withRouter(CustomCard);
