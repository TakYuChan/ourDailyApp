import React from "react";

import { Link } from "react-router-dom";

import "./floatNav.style.scss";

const FloatNav = ({ isNavOpened }) => {
  return (
    <div className={`${isNavOpened ? "active" : ""} float-nav`}>
      <ul className="nav-list">
        <Link to="/todolist" className="nav-item">
          ToDoList
        </Link>
        <Link to="/" className="nav-item">
          Games
        </Link>
        <Link to="/" className="nav-item">
          Github
        </Link>
      </ul>

      <div className="content">
        <h2>Welcome</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          facere sapiente, debitis voluptate doloremque animi perspiciatis
          excepturi esse magni possimus tenetur veniam, eveniet officia minus
          dolorum consectetur quam laborum totam!
        </h3>
      </div>
    </div>
  );
};

export default FloatNav;
