import React from "react";
import "./cartPreview.style.scss";

import { connect } from "react-redux";
import { removeItem, toggleCartPopUp } from "../../redux/cart/cart.actions";
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
  toggleCartPopUp,
}) => (
  <div className={`${!cartPopUpHidden && "active"} cart-preview`}>
    {itemsQuantity === 0 && [
      //   ======================= cart empty text =======================
      <h2 key="1" className="empty-cart-text">
        Your cart is empty!
      </h2>,
      <button key="2" className="btn--closePreview" onClick={toggleCartPopUp}>
        Close
      </button>,
    ]}
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
      //   ======================= Render 1 - more-items text =======================
      itemsQuantity > 3 && (
        <span key="2" className="more-items">
          And {moreItemText} more items...
        </span>
      ),
      //   ======================= Render 2 - more-items text =======================
      itemsQuantity <= 3 && (
        <span key="2" className="total-items">
          You have {itemsQuantity} {itemsQuantity === 1 ? "item" : "items"} in
          the cart
        </span>
      ),
      //   ======================= btns--wrapper =======================
      <div key="3" className="buttons-wrapper">
        <button className="btn--toCart">Go To Cart</button>
        <button className="btn--closePreview" onClick={toggleCartPopUp}>
          Close
        </button>
      </div>,
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
  toggleCartPopUp: () => dispatch(toggleCartPopUp()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPreview);
