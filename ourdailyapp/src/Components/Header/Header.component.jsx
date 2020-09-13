import React from "react";

import { connect } from "react-redux";
import RenderRouter from "../RenderPropsComs/RenderRouter/RenderRouter.renderPropCom";

import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/nav/nav.selectors";
import { toggleNavHidden, closeNav } from "../../redux/nav/nav.actions";
import { toggleCartPopUp } from "../../redux/cart/cart.actions";
import { selectCartItemsQuantity } from "../../redux/cart/cart.selectors";
import S from "./Header.style";

import PropTypes from "prop-types";

const Header = ({
  navHidden,
  toggleNav,
  toggleCartPopUp,
  closeNav,
  cartItemsQuantity,
}) => {
  console.log("Header rendered");

  return (
    <S.HeaderContainer className="header">
      <S.HeaderNavContainer>
        {/* ====================== Logo ====================== */}
        <RenderRouter>
          {(router) => (
            <S.LogoWrapper>
              <img
                className="logo"
                src={"/images/assets/logo_white_small.png"}
                alt=""
                role="presentation"
                onClick={() => {
                  closeNav();
                  router.push("/");
                }}
              />
            </S.LogoWrapper>
          )}
        </RenderRouter>

        {/* ============================== Nav List ================================= */}

        <S.NavListContainer className="list">
          {/* ====================== Cart Icon ====================== */}
          <S.CartIconWrapper
            className="cart-icon-wrapper"
            onClick={() => {
              toggleCartPopUp();
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
            // dataFor="navTip"
            // withToolTip={true}
            // toolTipId="navTip"
            // toolTipPlace="bottom"
            // toolTipEffect="solid"
            // toolTipClass="tooltip"
            // toolTipText="Navigation Menu"
          >
            <S.NavIcon className="svg" />
          </S.NavIconContainer>

          {/* ====================== Profile Drop Down ====================== */}
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
  toggleCartPopUp: () => dispatch(toggleCartPopUp()),
  closeNav: () => dispatch(closeNav()),
});

Header.propTypes = {
  navHidden: PropTypes.bool.isRequired,
  cartItemsQuantity: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
