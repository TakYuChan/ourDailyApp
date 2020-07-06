import React from "react";
import S from "./applicationDetailPage.style";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectApp } from "../../redux/shop/shop.selector";
import {
  selectWishListItemExist,
  selectCartItemExist,
} from "../../redux/cart/cart.selectors";
import { addItem, toggleWishListItem } from "../../redux/cart/cart.actions";
import { addCartAnimation } from "../../utils/animation";

import CustomTag from "../../Components/customTag/customTag.component";

const ApplicationDetailPage = ({
  appData,
  addItem,
  wishListed,
  toggleWishListItem,
  cartItemExist,
  history,
}) => {
  const { videoSrc, tags, intros, features, tagsColor } = appData.appDetails;

  return (
    <S.PageContainer className="application-detail-page pages">
      {/* // =================== Header ====================== */}
      <div className="heading">
        <h1 className="title">
          <S.PrevLink
            className="prev-link"
            onClick={() => history.push("/shop")}
          >
            /shop<S.IconApp className="iconfont icon-shop"></S.IconApp>
          </S.PrevLink>
          /{appData.title}
        </h1>
      </div>

      {/* ===================== Page Content Main ======================== */}
      <S.PageContentContainer className="app-content-main">
        <S.VideoWrapper className="video-wrapper">
          <S.Video
            src={videoSrc}
            title="vimeo video"
            allowFullScreen
            frameBorder="0"
            className="video"
          ></S.Video>
        </S.VideoWrapper>

        <S.Intro className="intro">{intros.map((intro) => intro)}</S.Intro>

        <S.TagsWrapper className="tags">
          {tags !== null &&
            tags.map((tag, index) => (
              <CustomTag key={index} background={tagsColor[index]}>
                {tag}
              </CustomTag>
            ))}
        </S.TagsWrapper>
        {/* ================ Feature Part ================ */}
        <S.SectionTitle className="subtitle">
          <span aria-label="thunder" role="img">
            ⚡
          </span>{" "}
          What are the features?
        </S.SectionTitle>
        <S.FeatureList className="feature-list">
          {features.map((feature) => (
            <li>{feature}</li>
          ))}
        </S.FeatureList>

        {/* ================================ Buttons ================================ */}
        {/* ================ wishlist part ================ */}
        <S.BtnAddToWishlist
          className="btn--addWishList"
          onClick={() => {
            toggleWishListItem({
              id: appData.id,
              title: appData.title,
              creator: appData.creator,
              imageSrc: appData.imageSrc,
              price: appData.price,
              route: appData.route,
            });
          }}
        >
          Wishlist
          <S.IconHeart
            className={`fas fa-heart ${wishListed(appData.id) ? "active" : ""}`}
          ></S.IconHeart>
        </S.BtnAddToWishlist>

        {/* ================ Payment part ================ */}
        <S.BtnAddToCart
          className="btn--addToCart"
          onClick={() => {
            /* ================ animations ================ */
            if (!cartItemExist(appData.id)) {
              addCartAnimation(appData.imageSrc, ".application-detail-page");
            }
            addItem({
              id: appData.id,
              title: appData.title,
              creator: appData.creator,
              imageSrc: appData.imageSrc,
              price: appData.price,
              route: appData.route,
            });
          }}
        >
          Add to cart
        </S.BtnAddToCart>
      </S.PageContentContainer>
    </S.PageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  appData: selectApp(ownProps.match.params.applicationId)(state),
  wishListed: (appId) => selectWishListItemExist(appId)(state),
  cartItemExist: (appId) => selectCartItemExist(appId)(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  toggleWishListItem: (item) => dispatch(toggleWishListItem(item)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ApplicationDetailPage)
);
