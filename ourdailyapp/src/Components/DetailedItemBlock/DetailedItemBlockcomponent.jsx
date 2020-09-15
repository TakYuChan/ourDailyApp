import React from "react";
import S from "./DetailedItemBlock.style";

import RenderRouter from "../RenderPropsComs/RenderRouter/RenderRouter.renderPropCom";
import { useDispatch } from "react-redux";
import {
  removeItem,
  minusItemPriceToTotal,
  removeWishListItem,
  moveToWishList,
  moveToCartList,
} from "../../redux/cart/cart.actions";
import addCartAnimation from "../../utils/animations/addCardAnimation";

const DetailedItemBlock = ({ cartItem, itemType, animationAppendTo }) => {
  const dispatch = useDispatch();
  return (
    <RenderRouter>
      {(router) => (
        <S.CartItemContainer className="cart-item">
          {/* ============= Items - img ============= */}
          <S.ImgWrapper
            className="img-wrapper"
            onClick={() => router.push(`/shop/${cartItem.route}`)}
          >
            <img
              src={`${cartItem.imageSrc}.jpeg`}
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
              {cartItem.title}
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
                  dispatch(removeItem(cartItem));
                  dispatch(minusItemPriceToTotal(cartItem.price));
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
      )}
    </RenderRouter>
  );
};

export default DetailedItemBlock;
