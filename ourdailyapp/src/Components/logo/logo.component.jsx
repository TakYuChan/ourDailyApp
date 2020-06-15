import React from "react";
import "./logo.style.scss";

import { withRouter } from "react-router-dom";

// import LogoImg from "../../../public/images/assets/logo.png";

const Logo = ({ id, wrapperId, triggerClosingNav, withLink, history }) => {
  return (
    <div className="logo-wrapper" id={wrapperId} onClick={() => {
      if(withLink) {
          triggerClosingNav();
          withLink && history.push('/');
      }
    }}>
        <img src={"images/assets/logo.png"} id={id} alt="logo" />
    </div>
  );
};

export default withRouter(Logo);
