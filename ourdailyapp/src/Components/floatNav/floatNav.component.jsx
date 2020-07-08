import React from "react";

import S from "./floatNav.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/nav/nav.selectors";
import { closeNav } from "../../redux/nav/nav.actions";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";

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
      <S.FloatNavContainer
        className={`${!this.props.navHidden ? "active" : ""} float-nav`}
      >
        <S.FloatNavList className="float-nav-list">
          <S.FloatNavItems
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
          </S.FloatNavItems>
          <S.FloatNavItems
            as="a"
            onMouseOver={() => {
              this.handleNavItemHover("linkedin");
            }}
            onClick={() => {
              this.props.closeNav();
              this.props.closeShopNav();
            }}
            href="https://www.linkedin.com/in/franky-tak-yu-chan-18b51518b/"
            className="float-nav-item"
          >
            LinkedIn
          </S.FloatNavItems>
          <S.FloatNavItems
            as="a"
            onMouseOver={() => {
              this.handleNavItemHover("github");
            }}
            onClick={() => {
              this.props.closeNav();
              this.props.closeShopNav();
            }}
            href="https://github.com/TakYuChan"
            className="float-nav-item"
          >
            Github
          </S.FloatNavItems>
        </S.FloatNavList>

        <FloatNavContent hoverNavItem={hoverNavItem}></FloatNavContent>
      </S.FloatNavContainer>
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
