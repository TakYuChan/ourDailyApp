import React from "react";
import S from "./withPreloader.style";

import ApplicationDetailPage from "./applicationDetailPage.component";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const WithPreloader = ({ isLoading, ...otherProps }) => {
  return (
    <S.PageContainer className="application-detail-page pages">
      {isLoading ? (
        <S.PageContentContainerPreloader className="app-content-main">
          <S.VideoWrapperPreloader className="video-wrapper"></S.VideoWrapperPreloader>
          <S.IntroPreloader1 className="intro-preloader"></S.IntroPreloader1>
          <S.IntroPreloader2 className="intro-preloader"></S.IntroPreloader2>
          <S.IntroPreloader3 className="intro-preloader"></S.IntroPreloader3>
          {/* ================ Tags Part ================ */}
          <S.TagsWrapperPreloader className="tags-preloader">
            {[...Array(3)].map((e, index) => (
              <S.TagDivPreloader key={index}></S.TagDivPreloader>
            ))}
          </S.TagsWrapperPreloader>

          {/* ================================ Buttons ================================ */}
          {/* ================ wishlist part ================ */}
          <S.BtnAddToWishlistPreloader className="btn--addWishList-preloader"></S.BtnAddToWishlistPreloader>
          {/* ================ Add to Cart ================ */}
          <S.BtnAddToCartPreloader className="btn--addToCart-preloader"></S.BtnAddToCartPreloader>
        </S.PageContentContainerPreloader>
      ) : (
        <ApplicationDetailPage {...otherProps} />
      )}
    </S.PageContainer>
  );
};

export default WithPreloader;
