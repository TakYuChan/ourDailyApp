import React from "react";
import "./app-item.style.scss";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  removeItem,
  minusItemPriceToTotal,
  removeWishListItem,
  moveToWishList,
  moveToCartList,
} from "../../redux/cart/cart.actions";
import { addCartAnimation } from "../../utils/animation";

const AppItem = ({
  cartItem,
  removeItem,
  minusItemPrice,
  itemType,
  removeWishListItem,
  moveItemToWishList,
  moveItemToCartList,
  history,
}) => (
  <div className="cart-item">
    {/* ============= Items - img ============= */}
    <div
      className="img-wrapper"
      onClick={() => history.push(`/shop/${cartItem.route}`)}
    >
      <img src={cartItem.imageSrc} alt="cart item" className="img--item" />
    </div>
    {/* ============= Items - info ============= */}
    <div className="title-and-creator">
      <span
        className="item-title"
        onClick={() => history.push(`/shop/${cartItem.route}`)}
      >
        {cartItem.title}
      </span>
      <span
        className="item-creator"
        onClick={() => history.push(`/shop/${cartItem.route}`)}
      >
        By {cartItem.creator}
      </span>
    </div>
    <span className="item-price">${cartItem.price}</span>
    {/* ============= Items - btns ============= */}
    <div className="item-buttons">
      <button
        className="btn--remove"
        onClick={() => {
          if (itemType === "cart") {
            removeItem(cartItem);
            minusItemPrice(cartItem.price);
          } else {
            removeWishListItem(cartItem);
          }
        }}
      >
        Remove
      </button>
      {itemType === "cart" ? (
        <button
          className="btn--toWishList"
          onClick={() => moveItemToWishList(cartItem)}
        >
          Move to Wishlist
        </button>
      ) : (
        <button
          className="btn--toCartList"
          onClick={() => {
            moveItemToCartList(cartItem);
            /* ================ animations ================ */
            addCartAnimation(cartItem.imageSrc, ".Wishlist-page");
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  minusItemPrice: (price) => dispatch(minusItemPriceToTotal(price)),
  removeWishListItem: (item) => dispatch(removeWishListItem(item)),
  moveItemToWishList: (item) => dispatch(moveToWishList(item)),
  moveItemToCartList: (item) => dispatch(moveToCartList(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(AppItem));
