import React from "react";
import S from "./applicationOverview.style";

import { createStructuredSelector } from "reselect";
import { selectApplicationsInArray } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

import CustomCard from "../../Components/customCard/customCard.component";

const ApplicationOverview = ({ applications }) => (
  <S.ApplicationOverviewContainer className="application-overview pages">
    {/* ============= heading ============= */}
    <div className="heading">
      <h1 className="title">
        App Store
        <S.IconApp className="iconfont icon-icon_yingyongguanli"></S.IconApp>
      </h1>
    </div>

    {/* ============= content main ============= */}
    <S.ShopContentContainer className="shop-content-main">
      {applications.map((app) => (
        <CustomCard id={app.id} app={app} />
      ))}
    </S.ShopContentContainer>
  </S.ApplicationOverviewContainer>
);

const mapStatetoProps = createStructuredSelector({
  applications: selectApplicationsInArray,
});

export default connect(mapStatetoProps)(ApplicationOverview);
