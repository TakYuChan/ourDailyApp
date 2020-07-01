import React from "react";
import "./applicationDetailPage.style.scss";

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
    <div className="application-detail-page pages">
      <div className="heading">
        <h1 className="title">
          <span className="prev-link" onClick={() => history.push("/shop")}>
            /shop<i className="iconfont icon-shop"></i>
          </span>
          /{appData.title}
        </h1>
      </div>

      <section className="app-content-main">
        <div className="video-wrapper">
          <iframe
            src={videoSrc}
            title="vimeo video"
            allowFullScreen
            frameBorder="0"
            className="video"
          ></iframe>
        </div>

        <div className="intro">{intros.map((intro) => intro)}</div>

        <div className="tags">
          {tags !== null &&
            tags.map((tag, index) => (
              <CustomTag key={index} background={tagsColor[index]}>
                {tag}
              </CustomTag>
            ))}
        </div>
        {/* ================ Feature Part ================ */}
        <h2 className="subtitle">
          <span aria-label="thunder" role="img">
            ⚡
          </span>{" "}
          What are the features?
        </h2>
        <ul className="feature-list">
          {features.map((feature) => (
            <li>{feature}</li>
          ))}
        </ul>

        {/* ================================ Buttons ================================ */}
        {/* ================ wishlist part ================ */}
        <button
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
          <i className={`fas fa-heart ${wishListed ? "active" : ""}`}></i>
        </button>

        {/* ================ Payment part ================ */}
        <button
          className="btn--addToCart"
          onClick={() => {
            addItem({
              id: appData.id,
              title: appData.title,
              creator: appData.creator,
              imageSrc: appData.imageSrc,
              price: appData.price,
              route: appData.route,
            });

            /* ================ animations ================ */
            if (!cartItemExist) {
              addCartAnimation(appData.imageSrc, ".application-detail-page");
            }
          }}
        >
          Add to cart
        </button>
      </section>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  appData: selectApp(ownProps.match.params.applicationId)(state),
  wishListed: selectWishListItemExist(
    selectApp(ownProps.match.params.applicationId)(state).id
  )(state),
  cartItemExist: selectCartItemExist(
    selectApp(ownProps.match.params.applicationId)(state).id
  )(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  toggleWishListItem: (item) => dispatch(toggleWishListItem(item)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ApplicationDetailPage)
);
