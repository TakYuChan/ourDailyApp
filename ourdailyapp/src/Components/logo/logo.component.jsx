import React from "react";
import S from "./logo.style";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { closeNav } from "../../redux/nav/nav.actions";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";

const Logo = ({ withLink, history, closeNav, closeShopNav }) => {
  return (
    <S.LogoImage
      className="logo"
      src={"/images/assets/logo.png"}
      alt="logo"
      onClick={() => {
        if (withLink) {
          closeNav();
          closeShopNav();
          history.push("/");
        }
      }}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeNav: () => dispatch(closeNav()),
  closeShopNav: () => dispatch(closeShopNav()),
});

export default withRouter(connect(null, mapDispatchToProps)(Logo));
