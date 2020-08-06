import React from "react";
import S from "./ApplicationDetailPage.style";

import { connect } from "react-redux";
import { selectApp } from "../../redux/app/app.selector";
import {
  selectWishListItemExist,
  selectCartItemExist,
} from "../../redux/cart/cart.selectors";
import { addItem, toggleWishListItem } from "../../redux/cart/cart.actions";
import { updateSectionHeader } from "../../redux/sectionHeader/sectionHeader.actions";
import { addCartAnimation } from "../../utils/animation";

import CustomTag from "../../Components/customTag/customTag.component";

class ApplicationDetailPage extends React.Component {
  //=========================== Life Cycle Hooks =========================
  componentDidMount() {
    const {
      updateSectionHeader,
      appData: { title },
    } = this.props;
    console.log("Application Detail Page Mounted");

    updateSectionHeader({
      page: "applicationDetails",
      details: {
        title: title,
      },
    });
  }

  componentWillUnmount() {
    const { updateSectionHeader } = this.props;

    updateSectionHeader({
      page: "preloader",
      details: {},
    });

    console.log("Application Detail Page unmounted");
  }

  render() {
    const {
      appData,
      addItem,
      wishListed,
      toggleWishListItem,
      cartItemExist,
    } = this.props;
    const { videoSrc, tags, intros, features, tagsColor } = appData.appDetails;

    return (
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

        <S.Intro
          className="intro"
          dangerouslySetInnerHTML={{ __html: intros }}
        ></S.Intro>

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
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
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

        {/* ================ Add to Cart ================ */}
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
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  appData: selectApp(ownProps.match.params.applicationId)(state),
  wishListed: (appId) => selectWishListItemExist(appId)(state),
  cartItemExist: (appId) => selectCartItemExist(appId)(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  toggleWishListItem: (item) => dispatch(toggleWishListItem(item)),
  updateSectionHeader: (sectionHeaderDetails) =>
    dispatch(updateSectionHeader(sectionHeaderDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationDetailPage);
