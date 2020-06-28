import React from "react";
import "./cartPage.style.scss";

const CartPage = () => (
  <div className="Cart-Page">
    {/* ============= heading ============= */}
    <div className="heading">
      <h1 className="title">Shopping Cart</h1>
    </div>

    {/* ============= content main ============= */}
    <div className="cart-content-main">
      {/* ============= Left Side ============= */}
      <div className="left-side">
        <div className="cartItems-wrapper">
          <span>2 Applications in Cart</span>
        </div>
        <div className="wishlist-wrapper">
          <span>Recently wishlisted</span>
        </div>
      </div>
      {/* ============= Right Side ============= */}
      <div className="right-side">
        <div className="payment-info">
          <span className="total-price-text">
            Total: <span className="price-text">$5</span>
          </span>
          <button className="btn--checkout">Checkout</button>
        </div>
        <hr />
      </div>
    </div>
  </div>
);
export default CartPage;
