import React from "react";
import "./logo.style.scss";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { closeNav } from "../../redux/nav/nav.actions";

// import LogoImg from "../../../public/images/assets/logo.png";

const Logo = ({ id, wrapperId, withLink, history, closeNav }) => {
  return (
    <div
      className="logo-wrapper"
      id={wrapperId}
      onClick={() => {
        if (withLink) {
          closeNav();
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
});

export default withRouter(connect(null, mapDispatchToProps)(Logo));
