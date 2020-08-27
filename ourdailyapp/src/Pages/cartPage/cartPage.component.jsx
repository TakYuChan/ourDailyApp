import React from "react";
import S from "./cartPage.style";

import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartItemsQuantity,
  selectCartItemsTotalPrice,
  selectWishListItems,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import DetailedItemBlock from "../../Components/DetailedItemBlock/DetailedItemBlockcomponent";
import StripeCheckoutButton from "../../Components/stripe-button/stripe-button.component";

const CartPage = ({
  cartItems,
  cartItemsQuantity,
  totalPrice,
  wishlistItems,
}) => (
  <S.PageContainer className="Cart-Page pages">
    <div className="heading">
      <h1 className="title">Cart</h1>
    </div>
    {/* ========================== content main ========================== */}
    <S.ContentContainer className="cart-content-main">
      {/* ========================== Left Side ========================== */}
      <S.LeftWrapper className="left-side">
        {/* ============= Cart Items ============= */}
        <S.AppInCartText className="app-in-cart">
          {cartItemsQuantity}{" "}
          {cartItemsQuantity === 1 ? "Application" : "Applications"} in Cart
        </S.AppInCartText>

        <S.DetailedItemBlocksWrapper className="DetailedItemBlock-wrapper cartItems-wrapper">
          {/* ============= Render 1: cartItems quantity >= 1 ============= */}
          {cartItemsQuantity !== 0 &&
            cartItems !== null &&
            cartItems.map((cartItem) => (
              <DetailedItemBlock
                id={cartItem.id}
                cartItem={cartItem}
                itemType="cart"
              />
            ))}

          {/* ============= Render 2: empty cartItems ============= */}
          {cartItemsQuantity === 0 && (
            <S.EmptyCartItemsWrapper className="empty-cartItems-wrapper">
              <S.IconCart className="iconfont icon-cart"></S.IconCart>
              <p className="empty-cartItems-text">
                Your cart is empty. Keep shopping to find an application!
              </p>
            </S.EmptyCartItemsWrapper>
          )}
        </S.DetailedItemBlocksWrapper>

        {/* ============= WishList ============= */}
        <S.RecentlyWishlistedText className="recently-wishlisted">
          Recently wishlisted
        </S.RecentlyWishlistedText>
        {/* ============= Render 1: wishlistItems quantity >= 1 ============= */}
        {wishlistItems.length !== 0 && (
          <S.WishlistWrapper className="wishList-wrapper wishlist-wrapper">
            {wishlistItems !== null &&
              wishlistItems.map((wishlistItem) => (
                <DetailedItemBlock
                  id={wishlistItem.id}
                  cartItem={wishlistItem}
                  itemType="wishlist"
                />
              ))}
          </S.WishlistWrapper>
        )}
        {/* ============= Render 2: empty wishlist ============= */}
        {wishlistItems.length === 0 && (
          <S.EmptyWishlistText className="empty-wishlist-text">
            You haven't added any applications to your wishlist.
          </S.EmptyWishlistText>
        )}
      </S.LeftWrapper>
      {/* ========================== Right Side ========================== */}
      <S.RightWrapper className="right-side">
        {/* ============== Payment Block ============== */}
        <S.PaymentContainer className="payment-info">
          <S.TotalPriceText className="total-price-text">
            Total:{" "}
            <S.DollarText className="dollar-price-text">
              $<S.PriceText className="price-text">{totalPrice}</S.PriceText>
            </S.DollarText>
          </S.TotalPriceText>
          {/* ============== Checkout btns with Stripe ============= */}
          <S.BtnCheckout
            className={`btn--checkout`}
            onClick={() => {
              const stripeCheckOutBtn = document.querySelector(
                ".StripeCheckout"
              );
              // Triggering click to the stripe button
              if (stripeCheckOutBtn !== null) {
                stripeCheckOutBtn.click();
              }
            }}
            disabled={cartItemsQuantity === 0}
          >
            Checkout
          </S.BtnCheckout>
          <StripeCheckoutButton price={totalPrice} />
        </S.PaymentContainer>
        <hr />
      </S.RightWrapper>
    </S.ContentContainer>
  </S.PageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsQuantity: selectCartItemsQuantity,
  totalPrice: selectCartItemsTotalPrice,
  wishlistItems: selectWishListItems,
});

export default connect(mapStateToProps)(CartPage);
