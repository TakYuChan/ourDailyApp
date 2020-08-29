import React, { useEffect } from "react";
import S from "./wishlistPage.style";

import { updateSectionHeader } from "../../redux/sectionHeader/sectionHeader.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectWishListItems } from "../../redux/cart/cart.selectors";
import {
  toggleWishListItem,
  moveToCartList,
} from "../../redux/cart/cart.actions";
import { withRouter } from "react-router-dom";

import DetailedItemBlock from "../../Components/DetailedItemBlock/DetailedItemBlockcomponent";
import WishListCard from "../../Components/Cards/WishListCard/WishListCard.component";

const WishlistPage = ({ wishlist, updateSectionHeader }) => {
  useEffect(() => {
    updateSectionHeader({
      page: "wishlist",
      details: {},
    });

    return () => {
      updateSectionHeader({
        page: "",
        details: {},
      });
    };
  }, [updateSectionHeader]);

  return (
    <S.PageContainer className="Wishlist-page pages">
      {/* ========================== heading ========================== */}
      {/* <div className="heading">
      <h1 className="route-container">Wishlist</h1>
    </div> */}

      {/* ========================== content main ========================== */}
      <S.ContentContainer className="wishlist-content-main">
        {/* ========================== Render 1: {wishlist.length > 0 && } min-width 850px ========================== */}
        <S.WishlistMIN850>
          {wishlist !== null &&
            wishlist.length > 0 &&
            wishlist.map((wishlistItem) => (
              <WishListCard wishlistItem={wishlistItem} />
            ))}
        </S.WishlistMIN850>
        {/* /* ========================== Render 2: {wishlist.length > 0 && } max-width 849px
      ========================== */}
        <S.WishlistMAX849 className="wishlist-max849">
          {wishlist !== null &&
            wishlist.map((wishlistItem) => (
              <DetailedItemBlock
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
};

const mapStateToProps = createStructuredSelector({
  wishlist: selectWishListItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleWishListItem: (item) => dispatch(toggleWishListItem(item)),
  moveItemToCartList: (item) => dispatch(moveToCartList(item)),
  updateSectionHeader: (sectionHeaderDetails) =>
    dispatch(updateSectionHeader(sectionHeaderDetails)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(WishlistPage)
);
