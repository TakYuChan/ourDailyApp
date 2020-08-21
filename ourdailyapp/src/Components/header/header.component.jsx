import React from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/nav/nav.selectors";
import { toggleNavHidden, closeNav } from "../../redux/nav/nav.actions";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { toggleCartPopUp } from "../../redux/cart/cart.actions";
import { selectCartItemsQuantity } from "../../redux/cart/cart.selectors";
import S from "./header.style";

import SignInAndSignUp from "../../Pages/signInAndSignUp/signInAndSignUp.component";

import { Button } from "react-bootstrap";
import Logo from "../logo/logo.component";

import ProfileDropDownMenu from "../../ComponentsNotReuse/profileDropDownMenu/profileDropDownMenu.component";

import PropTypes from "prop-types";

const Header = ({
  navHidden,
  toggleNav,
  shopNavHiddenTRUE,
  toggleCartPopUp,
  closeNav,
  cartItemsQuantity,
}) => {
  return (
    <S.HeaderContainer className="header">
      <S.HeaderNavContainer>
        {/* ====================== Logo ====================== */}
        <S.LogoWrapper>
          <Logo
            wrapperId="header-logo-wrapper"
            id="header-logo"
            withLink={true}
          />
        </S.LogoWrapper>
        {/* ============================== Nav List ================================= */}

        <S.NavListContainer className="list">
          {/* ====================== Change language Badge ====================== */}
          <div className="btn-lang-wrapper">
            <Button
              variant="primary"
              className="badge badge-primary btn-lang"
              data-tip
              data-for="langTip"
            >
              <span>中文</span>
            </Button>
            <S.LanguageToolTip
              arrowColor="#454e56"
              id="langTip"
              place="bottom"
              effect="solid"
              className="tooltip"
            >
              Language
            </S.LanguageToolTip>
          </div>

          {/* ====================== Cart Icon ====================== */}
          <S.CartIconWrapper
            className="cart-icon-wrapper"
            onClick={() => {
              toggleCartPopUp();
              shopNavHiddenTRUE();
              closeNav();
            }}
          >
            <S.CartIcon className="iconfont icon-cart1"></S.CartIcon>
            {/* ====================== Cart Icon -- > 1 notification ====================== */}
            {cartItemsQuantity !== 0 && (
              <S.CartItemsQuantityContainer className="cartItems-quantity-container">
                <S.CartItemsQuantityText className="cartItems-quantity-text">
                  {cartItemsQuantity}
                </S.CartItemsQuantityText>
              </S.CartItemsQuantityContainer>
            )}
          </S.CartIconWrapper>

          {/* ====================== SVG btn -> Float Nav ====================== */}

          <S.NavIconContainer
            className={`${navHidden ? "" : "active"} svg-wrapper Component`}
            onClick={() => {
              toggleNav();
            }}
            dataFor="navTip"
            withToolTip={true}
            toolTipId="navTip"
            toolTipPlace="bottom"
            toolTipEffect="solid"
            toolTipClass="tooltip"
            toolTipText="Navigation Menu"
          >
            <S.NavIcon className="svg" />
          </S.NavIconContainer>

          {/* ====================== Profile Drop Down ====================== */}

          <ProfileDropDownMenu />

          {/* - Passing the "showSignInSignUpModal" to Open / Close Modal */}
          <SignInAndSignUp />
        </S.NavListContainer>
      </S.HeaderNavContainer>
    </S.HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  navHidden: selectHidden,
  cartItemsQuantity: selectCartItemsQuantity,
});

const mapDispatchToProps = (dispatch) => ({
  toggleNav: () => dispatch(toggleNavHidden()),
  shopNavHiddenTRUE: () => dispatch(closeShopNav()),
  toggleCartPopUp: () => dispatch(toggleCartPopUp()),
  closeNav: () => dispatch(closeNav()),
});

Header.propTypes = {
  navHidden: PropTypes.bool.isRequired,
  cartItemsQuantity: PropTypes.number.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
