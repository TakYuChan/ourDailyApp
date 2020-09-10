import React from "react";
import S from "./DetailedItemBlock.style";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  removeItem,
  minusItemPriceToTotal,
  removeWishListItem,
  moveToWishList,
  moveToCartList,
} from "../../redux/cart/cart.actions";
import addCartAnimation from "../../utils/animations/addCardAnimation";

const DetailedItemBlock = ({
  cartItem,
  removeItem,
  minusItemPrice,
  itemType,
  animationAppendTo,
  removeWishListItem,
  moveItemToWishList,
  moveItemToCartList,
  history,
}) => (
  <S.CartItemContainer className="cart-item">
    {/* ============= Items - img ============= */}
    <S.ImgWrapper
      className="img-wrapper"
      onClick={() => history.push(`/shop/${cartItem.route}`)}
    >
      <img src={cartItem.imageSrc} alt="cart item" className="img--item" />
    </S.ImgWrapper>
    {/* ============= Items - info ============= */}
    <div className="title-and-creator">
      <S.TitleText
        className="item-title"
        onClick={() => history.push(`/shop/${cartItem.route}`)}
      >
        {cartItem.title}
      </S.TitleText>
      <S.CreatorText
        className="item-creator"
        onClick={() => history.push(`/shop/${cartItem.route}`)}
      >
        By {cartItem.creator}
      </S.CreatorText>
    </div>
    <S.PriceText className="item-price">${cartItem.price}</S.PriceText>
    {/* ============= Items - btns ============= */}
    <S.ButtonsWrapper className="item-buttons-wrapper">
      <S.BtnRemove
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
      </S.BtnRemove>
      {itemType === "cart" ? (
        <S.BtnToWishList
          className="btn--toWishList"
          onClick={() => moveItemToWishList(cartItem)}
        >
          Move to Wishlist
        </S.BtnToWishList>
      ) : (
        <S.BtnToCartList
          className="btn--toCartList"
          onClick={() => {
            moveItemToCartList(cartItem);
            /* ================ animations ================ */
            addCartAnimation(cartItem.imageSrc, animationAppendTo);
          }}
        >
          Add to cart
        </S.BtnToCartList>
      )}
    </S.ButtonsWrapper>
  </S.CartItemContainer>
);

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  minusItemPrice: (price) => dispatch(minusItemPriceToTotal(price)),
  removeWishListItem: (item) => dispatch(removeWishListItem(item)),
  moveItemToWishList: (item) => dispatch(moveToWishList(item)),
  moveItemToCartList: (item) => dispatch(moveToCartList(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(DetailedItemBlock));
