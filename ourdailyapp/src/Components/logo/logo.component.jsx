import React from "react";
import "./logo.style.scss";

import { Link } from "react-router-dom";

// import LogoImg from "../../../public/images/assets/logo.png";

const Logo = ({ id, wrapperId }) => {
  return (
    <div className="logo-wrapper" id={wrapperId}>
      <Link to="/">
        <img src={"images/assets/logo.png"} id={id} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
