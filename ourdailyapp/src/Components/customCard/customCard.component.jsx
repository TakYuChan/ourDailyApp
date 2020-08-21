import React from "react";
import S from "./customCard.style";

import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

const CustomCard = ({ match, app }) => {
  const { title, description, imageSrc, route } = app;

  return (
    <S.CustomCardWrapper className="custom-card">
      <Link className="link" to={`${match.path}/${route}`}>
        <S.CardContainer className="card card-app">
          <S.ImgWrapper className="img-wrapper">
            <img src={imageSrc} alt="" className="app-img" />
          </S.ImgWrapper>
          <S.TitleText className="app-title">{title}</S.TitleText>
          <S.DescriptionText className="app-description">
            {description}
          </S.DescriptionText>
          <S.BtnStart className="btn--start">Start</S.BtnStart>
        </S.CardContainer>
      </Link>
    </S.CustomCardWrapper>
  );
};

CustomCard.propTypes = {
  app: PropTypes.object.isRequired,
};

export default withRouter(CustomCard);
