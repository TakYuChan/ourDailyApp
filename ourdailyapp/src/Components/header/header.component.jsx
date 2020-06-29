import React from "react";
import "./header.style.scss";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/nav/nav.selectors";
import { toggleNavHidden, closeNav } from "../../redux/nav/nav.actions";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { toggleCartPopUp } from "../../redux/cart/cart.actions";
import { selectCartItemsQuantity } from "../../redux/cart/cart.selectors";

import SignInAndSignUp from "../../Pages/signInAndSignUp/signInAndSignUp.component";

import { Button } from "react-bootstrap";
import Logo from "../logo/logo.component";
import ReactToolTip from "react-tooltip";
import { ReactComponent as NavIcon } from "../../assets/nav.svg";

import ProfileDropDownMenu from "../../ComponentsNotReuse/profileDropDownMenu/profileDropDownMenu.component";
import CustomButton from "../customButton/customButton.component";

const Header = ({
  navHidden,
  toggleNav,
  shopNavHiddenTRUE,
  toggleCartPopUp,
  closeNav,
  cartItemsQuantity,
}) => {
  return (
    <header className="header">
      <nav>
        {/* ====================== Logo ====================== */}
        <Logo
          wrapperId="header-logo-wrapper"
          id="header-logo"
          withLink={true}
        />

        {/* ====================== Change language Badge ====================== */}
        <div className="list">
          <div className="btn-lang-wrapper">
            <Button
              variant="primary"
              className="badge badge-primary btn-lang"
              data-tip
              data-for="langTip"
            >
              <span>中文</span>
            </Button>
            <ReactToolTip
              arrowColor="#454e56"
              id="langTip"
              place="bottom"
              effect="solid"
              className="tooltip"
            >
              Language
            </ReactToolTip>
          </div>

          {/* ====================== Cart Icon ====================== */}
          <div
            className="cart-icon-wrapper"
            onClick={() => {
              toggleCartPopUp();
              shopNavHiddenTRUE();
              closeNav();
            }}
          >
            <i className="iconfont icon-cart1"></i>
            {cartItemsQuantity !== 0 && (
              <div className="cartItems-quantity-wrapper">
                <span className="cartItems-quantity">{cartItemsQuantity}</span>
              </div>
            )}
          </div>

          {/* ====================== SVG btn -> Float Nav ====================== */}

          <CustomButton
            className={`${navHidden ? "" : "active"} svg-wrapper`}
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
            <NavIcon />
          </CustomButton>

          {/* ====================== Profile Drop Down ====================== */}

          <ProfileDropDownMenu />

          {/* - Passing the "showSignInSignUpModal" to Open / Close Modal */}
          <SignInAndSignUp />
        </div>
      </nav>
    </header>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
