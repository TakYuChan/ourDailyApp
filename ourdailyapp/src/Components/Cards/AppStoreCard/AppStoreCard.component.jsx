import React from "react";
import S from "./AppStoreCard.style";

import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

const AppStoreCard = ({ match, app }) => {
  const { title, description, imageSrc, route } = app;

  return (
    <S.AppStoreCardWrapper className="custom-card">
      <Link className="link" to={`${match.path}/${route}`}>
        <S.CardContainer className="card-app">
          <S.ImgWrapper className="img-wrapper">
            <picture>
              <source
                type="image/webp"
                media="(min-width: 1000px)"
                srcSet={`${imageSrc}.webp`}
              />
              <img
                src={`${imageSrc}.jpeg`}
                loading="lazy"
                alt={`${title} img`}
                className="app-img"
              />
            </picture>
          </S.ImgWrapper>
          <S.TitleText className="app-title">{title}</S.TitleText>
          <S.DescriptionText className="app-description">
            {description}
          </S.DescriptionText>
          <S.BtnStart className="btn--start">Start</S.BtnStart>
        </S.CardContainer>
      </Link>
    </S.AppStoreCardWrapper>
  );
};

AppStoreCard.propTypes = {
  app: PropTypes.object.isRequired,
};

export default withRouter(AppStoreCard);
