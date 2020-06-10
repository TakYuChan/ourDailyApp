import React from "react";
import "./header.style.scss";
import { ReactComponent as NavIcon } from "../../assets/nav.svg";

import { useState, useEffect } from "react";

import { Dropdown, DropdownButton } from "react-bootstrap";

const Header = ({ handleSvgClick }) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();

      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

      let second = today.getSeconds();
      let minute = today.getMinutes();
      let hour = today.getHours();

      if (today.getSeconds() < 10) {
        second = "0" + today.getSeconds().toString();
      }

      if (today.getMinutes() < 10) {
        minute = "0" + today.getMinutes().toString();
      }
      if (today.getHours() < 10) {
        hour = "0" + today.getHours().toString();
      }

      const time = hour + ":" + minute + ":" + second;

      setCurrentTime(() => [date, time]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <nav>
        <div className="logo-wrapper">
          <img
            className="logo"
            src="/images/assets/logo.png"
            alt="FrankyVenus"
          />
        </div>
        <div className="list">
          <li className="time">{currentTime[1]}</li>

          {/* ====================== SVG btn -> Float Nav ====================== */}
          <button className="svg-wrapper" onClick={handleSvgClick}>
            <NavIcon />
          </button>

          <DropdownButton id="dropdown-basic-button" title="">
            <Dropdown.Header>HI Good Morning</Dropdown.Header>
            <Dropdown.Item href="#/action-1" className="auth-btn">
              Sign In
            </Dropdown.Item>
            <Dropdown.Divider />

            <Dropdown.Item href="#/action-2">
              <i className="iconfont icon-profile"></i>Profile
            </Dropdown.Item>

            <Dropdown.Item href="#/action-3">
              <i className="iconfont icon-Settingscontroloptions"></i>Setting
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
