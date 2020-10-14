import React from "react";
import S from "./DetailedItemBlock.style";

import { useDispatch } from "react-redux";
import useRouter from "../../hooks/useRouter.hooks";
import {
  removeAppFromCartStart,
  removeWishListItem,
  moveToWishList,
  moveToCartList,
} from "../../redux/cart/cart.actions";
import addCartAnimation from "../../utils/animations/addCardAnimation";

const DetailedItemBlock = ({ cartItem, itemType, animationAppendTo }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <S.CartItemContainer className="cart-item">
      {/* ============= Items - img ============= */}
      <S.ImgWrapper
        className="img-wrapper"
        onClick={() => router.push(`/shop/${cartItem.route}`)}
      >
        <img
          src={`${cartItem.imgSrc}.jpeg`}
          alt="cart item"
          className="img--item"
        />
      </S.ImgWrapper>
      {/* ============= Items - info ============= */}
      <div className="title-and-creator">
        <S.TitleText
          className="item-title"
          onClick={() => router.push(`/shop/${cartItem.route}`)}
        >
          {cartItem.name}
        </S.TitleText>
        <S.CreatorText
          className="item-creator"
          onClick={() => router.push(`/shop/${cartItem.route}`)}
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
              dispatch(removeAppFromCartStart(cartItem._id, cartItem.price));
            } else {
              dispatch(removeWishListItem(cartItem));
            }
          }}
        >
          Remove
        </S.BtnRemove>
        {itemType === "cart" ? (
          <S.BtnToWishList
            className="btn--toWishList"
            onClick={() => dispatch(moveToWishList(cartItem))}
          >
            Move to Wishlist
          </S.BtnToWishList>
        ) : (
          <S.BtnToCartList
            className="btn--toCartList"
            onClick={() => {
              dispatch(moveToCartList(cartItem));
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
};

export default DetailedItemBlock;