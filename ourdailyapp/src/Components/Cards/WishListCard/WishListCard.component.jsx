import React from "react";
import S from "./WishListCard.style.jsx";

import RenderRouter from "../../RenderPropsComs/RenderRouter/RenderRouter.renderPropCom";

import { connect } from "react-redux";

import {
  toggleWishListItem,
  moveToCartList,
} from "../../../redux/cart/cart.actions";

import addCartAnimation from "../../../utils/animations/addCardAnimation";

import PropTypes from "prop-types";

const WishListCard = ({
  wishlistItem,
  toggleWishListItem,
  moveItemToCartList,
}) => {
  return (
    <RenderRouter>
      {(router) => (
        <div className="wishlist-min850">
          <S.CardWrapper
            className="card-wishlistItem-wrapper"
            onClick={() => router.push(`/shop/${wishlistItem.route}`)}
          >
            {/* ========== wishlist item image =========== */}
            <S.ImageWrapper className="img-wrapper">
              <S.Image
                src={`${wishlistItem.imageSrc}.jpeg`}
                alt={`${wishlistItem.title}`}
                className="img-app"
              />
            </S.ImageWrapper>
            {/* ====================== card-bottom-part ====================== */}
            <S.CardBottomWrapper className="card-bottom-part">
              {/* ========== wishlist item info text =========== */}
              <S.ItemTitleText className="wishlistItem-title">
                {wishlistItem.title}
              </S.ItemTitleText>
              <S.ItemCreatorText className="wishlistItem-creator">
                {wishlistItem.creator}
              </S.ItemCreatorText>

              <S.BtnAndPriceContainer className="btn-and-price">
                {/* ========== btn - to cart =========== */}
                <S.BtnAddToCart
                  className="btn-addToCart"
                  onClick={(event) => {
                    event.stopPropagation();
                    moveItemToCartList(wishlistItem);

                    console.log({ src: wishlistItem.imageSrc });

                    /* ================ animations ================ */
                    addCartAnimation(
                      wishlistItem.imageSrc,
                      ".js_PageContainer"
                    );
                  }}
                >
                  Add to cart
                </S.BtnAddToCart>
                {/* ========== price text =========== */}
                <S.TotalPriceText className="total-price-text">
                  <span className="dollar-price-text">
                    $
                    <S.PriceText className="price-text">
                      {wishlistItem.price}
                    </S.PriceText>
                  </span>
                </S.TotalPriceText>
              </S.BtnAndPriceContainer>
            </S.CardBottomWrapper>
            {/* ====================== element - absolute ====================== */}

            <S.IconHeart
              className={`fas fa-heart`}
              onClick={(event) => {
                event.stopPropagation();
                toggleWishListItem({
                  id: wishlistItem.id,
                  title: wishlistItem.title,
                  creator: wishlistItem.creator,
                  imageSrc: wishlistItem.imageSrc,
                  price: wishlistItem.price,
                  route: wishlistItem.route,
                });
              }}
            ></S.IconHeart>
          </S.CardWrapper>
        </div>
      )}
    </RenderRouter>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleWishListItem: (item) => dispatch(toggleWishListItem(item)),
  moveItemToCartList: (item) => dispatch(moveToCartList(item)),
});

React.propTypes = {
  wishListItem: PropTypes.object.isRequired,
  toogleWishListItem: PropTypes.func.isRequired,
  moveItemToCartList: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(WishListCard);
