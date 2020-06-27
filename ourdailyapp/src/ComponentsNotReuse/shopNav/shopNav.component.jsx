import React from "react";
import "./shopNav.style.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleShopNavHidden } from "../../redux/shopNav/shopNav.actions";
import { toggleCartPopUp } from "../../redux/cart/cart.actions";
import { selectHidden } from "../../redux/shopNav/shopNav.selectors";
import { selectCartItemsQuantity } from "../../redux/cart/cart.selectors";

const ShopNav = ({ hidden, toggleHidden, itemQuantity, toggleCartPopUp }) => (
  <div className="shopNav">
    <div className="toggle-shopNav" onClick={toggleHidden}>
      <i className="iconfont icon-shop"></i>
    </div>
    <div className="menu-wrapper">
      <div className={`${!hidden && "active"} shopNav-menu`}>
        <div
          className="option option--cart"
          onClick={() => {
            toggleCartPopUp();
            toggleHidden();
          }}
        >
          <i className="iconfont icon-cart">
            <span className="cartItems-quantity">{itemQuantity}</span>
          </i>
          <p className="option-text">Cart</p>
        </div>
        <div className="option option--checkout">
          <i className="iconfont icon-wish"></i>
          <p className="option-text">Wishlist</p>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectHidden,
  itemQuantity: selectCartItemsQuantity,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleShopNavHidden()),
  toggleCartPopUp: () => dispatch(toggleCartPopUp()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopNav);
