import React from "react";
import S from "./sectionHeader.style";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectPage,
  selectDetails,
} from "../../redux/sectionHeader/sectionHeader.selectors";

const SectionHeader = ({ selectPage, selectDetails, history }) => (
  <div className="section-header">
    {selectPage === "shop" && (
      <h1 className="title">
        App Store
        <S.IconApp className="iconfont icon-icon_yingyongguanli"></S.IconApp>
      </h1>
    )}
    {selectPage === "applicationDetails" && (
      <h1 className="title">
        <S.PrevLink className="prev-link" onClick={() => history.push("/shop")}>
          /shop<S.IconShop className="iconfont icon-shop"></S.IconShop>
        </S.PrevLink>
        /{selectDetails.title}
      </h1>
    )}
    {
      selectPage === "preloader" && null
      //   <S.AnimationWrapper className="animation-wrapper">
      //     <S.AnimationDot className="dot1" />
      //     <S.AnimationDot className="dot2" />
      //     <S.AnimationDot className="dot3" />
      //   </S.AnimationWrapper>
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  selectPage,
  selectDetails,
});

export default withRouter(connect(mapStateToProps)(SectionHeader));
