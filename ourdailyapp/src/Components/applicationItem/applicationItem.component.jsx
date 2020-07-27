import React from "react";
import S from "./applicationItem.style";

import { Link } from "react-router-dom";

const ApplicationItem = ({ app, index }) => {
  const { name, route, imageUrl, border } = app;

  return (
    <Link to={`/${route}`} className={`link`}>
      <S.ApplicationItemContainer
        className="application-item"
        stagger={(index + 1) * 0.1}
      >
        <S.Image src={imageUrl} className={`${border && "border"}`} />
        <S.AppLinkText className="link-text">{name}</S.AppLinkText>
      </S.ApplicationItemContainer>
    </Link>
  );
};

export default ApplicationItem;
