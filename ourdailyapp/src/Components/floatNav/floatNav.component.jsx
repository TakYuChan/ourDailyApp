import React, { useState } from "react";

import S from "./floatNav.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/nav/nav.selectors";
import { closeNav } from "../../redux/nav/nav.actions";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";

import FloatNavContent from "../../ComponentsNotReuse/floatNavContent/floatNavContent.component";

import PropTypes from "prop-types";

const FloatNav = ({ closeNav, navHidden, closeShopNav }) => {
  const [hoverNavItem, setHoverNavItem] = useState(null);

  const onItemClick = () => {
    closeNav();
    closeShopNav();
  };

  return (
    <S.FloatNavContainer className={`${!navHidden ? "active" : ""} float-nav`}>
      <S.FloatNavList className="float-nav-list">
        <S.FloatNavItems
          onMouseOver={() => {
            setHoverNavItem("appstore");
          }}
          onClick={onItemClick}
          to="/shop"
          className="float-nav-item"
        >
          AppStore
        </S.FloatNavItems>
        <S.FloatNavItems
          as="a"
          onMouseOver={() => {
            setHoverNavItem("linkedin");
          }}
          onClick={onItemClick}
          href="https://www.linkedin.com/in/franky-tak-yu-chan-18b51518b/"
          className="float-nav-item"
        >
          LinkedIn
        </S.FloatNavItems>
        <S.FloatNavItems
          as="a"
          onMouseOver={() => {
            setHoverNavItem("github");
          }}
          onClick={onItemClick}
          href="https://github.com/TakYuChan"
          className="float-nav-item"
        >
          Github
        </S.FloatNavItems>
      </S.FloatNavList>

      <FloatNavContent hoverNavItem={hoverNavItem}></FloatNavContent>
    </S.FloatNavContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  navHidden: selectHidden,
});

const mapDispatchToProps = (dispatch) => ({
  closeNav: () => dispatch(closeNav()),
  closeShopNav: () => dispatch(closeShopNav()),
});

FloatNav.propTypes = {
  navHidden: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
  closeShopNav: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FloatNav);
