import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/nav/nav.selectors";
import { closeNav } from "../../redux/nav/nav.actions";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";

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
              this.handleNavItemHover("appstore");
            }}
            onClick={() => {
              this.props.closeNav();
              this.props.closeShopNav();
            }}
            to="/shop"
            className="float-nav-item"
          >
            AppStore
          </Link>
          <Link
            onMouseOver={() => {
              this.handleNavItemHover("linkedin");
            }}
            onClick={() => {
              this.props.closeNav();
              this.props.closeShopNav();
            }}
            to="/"
            className="float-nav-item"
          >
            LinkedIn
          </Link>
          <Link
            onMouseOver={() => {
              this.handleNavItemHover("github");
            }}
            onClick={() => {
              this.props.closeNav();
              this.props.closeShopNav();
            }}
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
  closeShopNav: () => dispatch(closeShopNav()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FloatNav);
