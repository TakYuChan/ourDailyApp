import React from "react";
import S from "./applicationItem.style";

import { Link } from "react-router-dom";

const ApplicationItem = ({ app }) => {
  const { name, route, image } = app;

  return (
    <Link to={`/${route}`} className={`link`}>
      <S.ApplicationItemContainer className="application-item">
        {image}
        <S.AppLinkText className="link-text">{name}</S.AppLinkText>
      </S.ApplicationItemContainer>
    </Link>
  );
};

export default ApplicationItem;
