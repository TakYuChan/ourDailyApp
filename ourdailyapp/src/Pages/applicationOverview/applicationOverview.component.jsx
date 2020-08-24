import React, { useEffect } from "react";
import S from "./ApplicationOverview.style";

import { updateSectionHeader } from "../../redux/sectionHeader/sectionHeader.actions";
import { connect } from "react-redux";

import CustomCardWithPreloader from "../../Components/customCard/customCardWithPreloader.component";

const ApplicationOverview = ({ updateSectionHeader }) => {
  useEffect(() => {
    updateSectionHeader({
      page: "shop",
      details: {},
    });

    return () => {
      updateSectionHeader({
        page: "preloader",
        details: {},
      });
    };
  }, [updateSectionHeader]);

  return (
    <S.ApplicationOverviewContainer className="application-overview pages">
      {/* ============= content main ============= */}
      <S.ShopContentContainer className={`shop-content-main`}>
        <CustomCardWithPreloader />
      </S.ShopContentContainer>
    </S.ApplicationOverviewContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateSectionHeader: (sectionHeaderDetails) =>
    dispatch(updateSectionHeader(sectionHeaderDetails)),
});

export default connect(null, mapDispatchToProps)(ApplicationOverview);
