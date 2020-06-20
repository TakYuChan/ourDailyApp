import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/nav/nav.selectors";
import { closeNav } from "../../redux/nav/nav.actions";

import "./floatNav.style.scss";

import FloatNavContent from "../../ComponentsNotReuse/floatNavContent/floatNavContent.component";

class FloatNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverNavItem: null,
    };
  }

  handleNavItemHover = (item) => {
    this.setState({ hoverNavItem: item });
  };

  render() {
    const { hoverNavItem } = this.state;

    return (
      <div className={`${!this.props.navHidden ? "active" : ""} float-nav`}>
        <ul className="float-nav-list">
          <Link
            onMouseOver={() => {
              this.handleNavItemHover("todo");
            }}
            onClick={closeNav}
            to="/todolist"
            className="float-nav-item"
          >
            ToDoList
          </Link>
          <Link
            onMouseOver={() => {
              this.handleNavItemHover("games");
            }}
            onClick={closeNav}
            to="/"
            className="float-nav-item"
          >
            Games
          </Link>
          <Link
            onMouseOver={() => {
              this.handleNavItemHover("Github");
            }}
            onClick={this.props.closeNav}
            to="/"
            className="float-nav-item"
          >
            Github
          </Link>
        </ul>

        <FloatNavContent hoverNavItem={hoverNavItem}></FloatNavContent>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  navHidden: selectHidden,
});

const mapDispatchToProps = (dispatch) => ({
  closeNav: () => dispatch(closeNav()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FloatNav);
