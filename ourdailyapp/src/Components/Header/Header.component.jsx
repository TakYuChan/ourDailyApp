import React from "react";

import useRouter from "../../hooks/useRouter.hooks";
import { useDispatch, useSelector } from "react-redux";

import { toggleNavHidden, closeNav } from "../../redux/nav/nav.actions";
import { toggleCartPopUp, closeCartPopUp } from "../../redux/cart/cart.actions";
import S from "./Header.style";

const Header = () => {
  const navHidden = useSelector((state) => state.nav.hidden);
  const cartItemsQuantity = useSelector((state) => state.cart_P.cartItems)
    .length;
  const dispatch = useDispatch();

  const router = useRouter();

  return (
    <S.HeaderContainer className="header">
      <S.HeaderNavContainer>
        {/* ====================== Logo ====================== */}
        <S.LogoWrapper>
          <img
            className="logo"
            src={"/images/assets/logo_white_small.png"}
            alt=""
            role="presentation"
            onClick={() => {
              dispatch(closeNav());
              router.push("/");
            }}
          />
        </S.LogoWrapper>

        {/* ============================== Nav List ================================= */}

        <S.NavListContainer className="list">
          {/* ====================== Cart Icon ====================== */}
          <S.CartIconWrapper
            className="cart-icon-wrapper"
            onClick={() => {
              dispatch(toggleCartPopUp());
              dispatch(closeNav());
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
              dispatch(closeCartPopUp());
              dispatch(toggleNavHidden());
            }}
          >
            <S.NavIcon className="svg" />
          </S.NavIconContainer>

          {/* ====================== Profile Drop Down ====================== */}
        </S.NavListContainer>
      </S.HeaderNavContainer>
    </S.HeaderContainer>
  );
};

export default Header;
