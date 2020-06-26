import React from "react";
import "./shopNav.style.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleShopNavHidden } from "../../redux/shopNav/shopNav.actions";
import { selectHidden } from "../../redux/shopNav/shopNav.selectors";

const ShopNav = ({ hidden, toggleHidden }) => (
  <div className="shopNav">
    <div className="toggle-shopNav" onClick={toggleHidden}>
      <i className="iconfont icon-shop"></i>
    </div>
    <div className="menu-wrapper">
      <div className={`${!hidden && "active"} shopNav-menu`}>
        <div className="option option--cart">
          <i className="iconfont icon-cart"></i>
          <p className="option-text">Cart</p>
        </div>
        <div className="option option--checkout">
          <i className="iconfont icon-paymentmethod"></i>
          <p className="option-text">Checkout</p>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleShopNavHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopNav);
