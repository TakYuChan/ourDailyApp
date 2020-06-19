import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/nav/nav.selectors";

import "./floatNav.style.scss";

import FloatNavContent from "../../ComponentsNotReuse/floatNavContent/floatNavContent.component";

const FloatNav = (props) => {
  return (
    <div className={`${!props.navHidden ? "active" : ""} float-nav`}>
      <ul className="float-nav-list">
        <Link
          onMouseOver={() => {
            props.handleNavItemHover("todo");
          }}
          onClick={props.handleNavLinkClick}
          to="/todolist"
          className="float-nav-item"
        >
          ToDoList
        </Link>
        <Link
          onMouseOver={() => {
            props.handleNavItemHover("games");
          }}
          onClick={props.handleNavLinkClick}
          to="/"
          className="float-nav-item"
        >
          Games
        </Link>
        <Link
          onMouseOver={() => {
            props.handleNavItemHover("Github");
          }}
          onClick={props.handleNavLinkClick}
          to="/"
          className="float-nav-item"
        >
          Github
        </Link>
      </ul>

      <FloatNavContent hoverNavItem={props.hoverNavItem}></FloatNavContent>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  navHidden: selectHidden,
});

export default connect(mapStateToProps)(FloatNav);
