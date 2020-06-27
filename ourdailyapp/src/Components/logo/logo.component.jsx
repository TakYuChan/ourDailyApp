import React from "react";
import "./logo.style.scss";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { closeNav } from "../../redux/nav/nav.actions";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";

// import LogoImg from "../../../public/images/assets/logo.png";

const Logo = ({ id, wrapperId, withLink, history, closeNav, closeShopNav }) => {
  return (
    <div
      className="logo-wrapper"
      id={wrapperId}
      onClick={() => {
        if (withLink) {
          closeNav();
          closeShopNav();
          history.push("/");
        }
      }}
    >
      <img src={"/images/assets/logo.png"} id={id} alt="logo" />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeNav: () => dispatch(closeNav()),
  closeShopNav: () => dispatch(closeShopNav()),
});

export default withRouter(connect(null, mapDispatchToProps)(Logo));
