import React from "react";

import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/nav/nav.selectors";
import { toggleNavHidden, closeNav } from "../../redux/nav/nav.actions";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { toggleCartPopUp } from "../../redux/cart/cart.actions";
import { selectCartItemsQuantity } from "../../redux/cart/cart.selectors";
import S from "./Header.style";

// import SignInAndSignUp from "../../Pages/signInAndSignUp/signInAndSignUp.component";

// import ProfileDropDownMenu from "../profileDropDownMenu/profileDropDownMenu.component";

import PropTypes from "prop-types";

const Header = ({
  navHidden,
  toggleNav,
  shopNavHiddenTRUE,
  toggleCartPopUp,
  closeNav,
  cartItemsQuantity,
}) => {
  function useRouter() {
    const history = useHistory();

    return React.useMemo(() => {
      return {
        push: history.push,
        history,
      };
    }, [history]);
  }

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
              closeNav();
              closeShopNav();
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

          {/* <ProfileDropDownMenu /> */}

          {/* - Passing the "showSignInSignUpModal" to Open / Close Modal */}
          {/* <SignInAndSignUp /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
