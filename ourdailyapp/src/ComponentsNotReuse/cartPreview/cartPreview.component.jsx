import React from "react";
import "./cartPreview.style.scss";

import { connect } from "react-redux";
import { removeItem } from "../../redux/cart/cart.actions";
import {
  selectCartItemsQuantity,
  selectCartItems,
  selectCartMoreItems,
} from "../../redux/cart/cart.selectors";
import { selectCartPopUpHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartPreview = ({
  itemsQuantity,
  cartItems,
  moreItemText,
  removeItem,
  cartPopUpHidden,
}) => (
  <div className={`${!cartPopUpHidden && "active"} cart-preview`}>
    {itemsQuantity === 0 && (
      //   ======================= cart empty text =======================
      <h2 className="empty-cart-text">Your cart is empty!</h2>
    )}
    {itemsQuantity !== 0 && [
      //   ======================= items wrapper =======================
      <div className="items-wrapper" key="1">
        {cartItems !== null &&
          cartItems
            .filter((cartItem, index) => index < 3)
            .map((cartItem) => {
              return (
                <div className="cart-item" key={cartItem.id}>
                  <div className="left-side">
                    <div className="img-wrapper">
                      <img
                        src={cartItem.imageSrc}
                        alt="cart item"
                        className="item-img"
                      />
                    </div>
                    <span className="item-name">{cartItem.title}</span>
                  </div>
                  <div className="right-side">
                    <span className="item-price">{`$${cartItem.price}`}</span>
                    <i
                      className="iconfont icon-chax"
                      onClick={() => removeItem(cartItem)}
                    ></i>
                  </div>
                </div>
              );
            })}
      </div>,
      //   ======================= more-items text =======================
      itemsQuantity > 3 && (
        <span key="2" className="more-items">
          And {moreItemText} more items...
        </span>
      ),
      //   ======================= btn--toCart =======================
      <button key="3" className="btn--toCart">
        Go To Cart
      </button>,
    ]}
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemsQuantity: selectCartItemsQuantity,
  cartItems: selectCartItems,
  moreItemText: selectCartMoreItems,
  cartPopUpHidden: selectCartPopUpHidden,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPreview);
