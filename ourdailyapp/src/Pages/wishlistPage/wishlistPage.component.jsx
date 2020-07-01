import React from "react";
import "./wishlistPage.style.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectWishListItems } from "../../redux/cart/cart.selectors";
import {
  toggleWishListItem,
  moveToCartList,
} from "../../redux/cart/cart.actions";
import { withRouter } from "react-router-dom";

import AppItem from "../../Components/app-item/app-item.component";

const WishlistPage = ({
  wishlist,
  toggleWishListItem,
  moveItemToCartList,
  history,
}) => (
  <div className="Wishlist-page pages">
    {/* ========================== heading ========================== */}
    <div className="heading">
      <h1 className="title">Wishlist</h1>
    </div>

    {/* ========================== content main ========================== */}
    <div className="wishlist-content-main">
      {/* ========================== Render 1: {wishlist.length > 0 && } min-width 850px ========================== */}
      {wishlist !== null &&
        wishlist.length > 0 &&
        wishlist.map((wishlistItem) => (
          <div className="wishlist-min850">
            <div
              className="card-wishlistItem"
              onClick={() => history.push(`/shop/${wishlistItem.route}`)}
            >
              {/* ========== wishlist item image =========== */}
              <div className="img-wrapper">
                <img
                  src={wishlistItem.imageSrc}
                  alt={`${wishlistItem.title}`}
                  className="img-app"
                />
              </div>
              {/* ====================== card-bottom-part ====================== */}
              <div className="card-bottom-part">
                {/* ========== wishlist item info text =========== */}
                <h3 className="wishlistItem-title">{wishlistItem.title}</h3>
                <p className="wishlistItem-creator">{wishlistItem.creator}</p>

                <div className="btn-and-price">
                  {/* ========== btn - to cart =========== */}
                  <button
                    className="btn-addToCart"
                    onClick={(event) => {
                      event.stopPropagation();
                      moveItemToCartList(wishlistItem);

                      /* ================ animations ================ */
                      let addedApp = document.createElement("div");
                      addedApp.classList.add("addedApp");
                      addedApp.style.backgroundImage = `url(${wishlistItem.imageSrc})`;

                      let wrapper = document.createElement("div");
                      wrapper.classList.add("animation-parabola-wrapper");
                      wrapper.append(addedApp);
                      document.querySelector(".Wishlist-page").append(wrapper);

                      setTimeout(() => {
                        wrapper.outerHTML = "";
                      }, 700);
                    }}
                  >
                    Add to cart
                  </button>
                  {/* ========== price text =========== */}
                  <span className="total-price-text">
                    <span className="dollar-price-text">
                      $<span className="price-text">{wishlistItem.price}</span>
                    </span>
                  </span>
                </div>
              </div>
              {/* ====================== element - absolute ====================== */}

              <i
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
              ></i>
            </div>
          </div>
        ))}
      {/* ========================== Render 2: {wishlist.length > 0 && } max-width 849px
      ========================== */}
      <div className="appItem-wrapper appItem-for-wishlistPage wishlist-max849">
        {wishlist !== null &&
          wishlist.map((wishlistItem) => (
            <AppItem
              id={wishlistItem.id}
              cartItem={wishlistItem}
              itemType="wishlist"
            />
          ))}
      </div>
    </div>
    {/* =============== Render 3: EMPTY wishlist ================= */}
    {wishlist.length === 0 && (
      <div className="empty-wishlist-wrapper">
        <h1> You have an empty wishlist</h1>
        <i className="iconfont icon-Empty"></i>
      </div>
    )}
  </div>
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
