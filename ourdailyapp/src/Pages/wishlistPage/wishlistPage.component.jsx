import React from "react";
import S from "./wishlistPage.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectWishListItems } from "../../redux/cart/cart.selectors";
import {
  toggleWishListItem,
  moveToCartList,
} from "../../redux/cart/cart.actions";
import { withRouter } from "react-router-dom";
import { addCartAnimation } from "../../utils/animation";

import AppItem from "../../Components/app-item/app-item.component";

const WishlistPage = ({
  wishlist,
  toggleWishListItem,
  moveItemToCartList,
  history,
}) => (
  <S.PageContainer className="Wishlist-page pages">
    {/* ========================== heading ========================== */}
    <div className="heading">
      <h1 className="title">Wishlist</h1>
    </div>

    {/* ========================== content main ========================== */}
    <S.ContentContainer className="wishlist-content-main">
      {/* ========================== Render 1: {wishlist.length > 0 && } min-width 850px ========================== */}
      {wishlist !== null &&
        wishlist.length > 0 &&
        wishlist.map((wishlistItem) => (
          <S.WishlistMIN850 className="wishlist-min850">
            <S.CardWrapper
              className="card-wishlistItem-wrapper"
              onClick={() => history.push(`/shop/${wishlistItem.route}`)}
            >
              {/* ========== wishlist item image =========== */}
              <S.ImageWrapper className="img-wrapper">
                <S.Image
                  src={wishlistItem.imageSrc}
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

                      /* ================ animations ================ */
                      addCartAnimation(wishlistItem.imageSrc, ".Wishlist-page");
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
          </S.WishlistMIN850>
        ))}
      {/* ========================== Render 2: {wishlist.length > 0 && } max-width 849px
      ========================== */}
      <S.WishlistMAX849 className="wishlist-max849">
        {wishlist !== null &&
          wishlist.map((wishlistItem) => (
            <AppItem
              id={wishlistItem.id}
              cartItem={wishlistItem}
              itemType="wishlist"
              animationAppendTo=".Wishlist-page"
            />
          ))}
      </S.WishlistMAX849>
    </S.ContentContainer>
    {/* =============== Render 3: EMPTY wishlist ================= */}
    {wishlist.length === 0 && (
      <S.EmptyWishlistContainer className="empty-wishlist-wrapper">
        <h1 className="animate-bounce"> You have an empty wishlist</h1>
        <i className="iconfont icon-Empty animate-bounce"></i>
      </S.EmptyWishlistContainer>
    )}
  </S.PageContainer>
);

const mapStateToProps = createStructuredSelector({
  wishlist: selectWishListItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleWishListItem: (item) => dispatch(toggleWishListItem(item)),
  moveItemToCartList: (item) => dispatch(moveToCartList(item)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(WishlistPage)
);
