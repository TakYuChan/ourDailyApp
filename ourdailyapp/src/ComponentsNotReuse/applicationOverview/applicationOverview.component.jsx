import React from "react";
import S from "./applicationOverview.style";

import { updateSectionHeader } from "../../redux/sectionHeader/sectionHeader.actions";
import { connect } from "react-redux";

import CustomCardWithPreloader from "../../Components/customCard/customCardWithPreloader.component";

class ApplicationOverview extends React.Component {
  componentDidMount() {
    const { updateSectionHeader } = this.props;

    updateSectionHeader({
      page: "shop",
      details: {},
    });
  }

  componentWillUnmount() {
    const { updateSectionHeader } = this.props;
    updateSectionHeader({
      page: "preloader",
      details: {},
    });
  }

  render() {
    return (
      <S.ApplicationOverviewContainer className="application-overview pages">
        {/* ============= content main ============= */}
        <S.ShopContentContainer className={`shop-content-main`}>
          <CustomCardWithPreloader />
        </S.ShopContentContainer>
      </S.ApplicationOverviewContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateSectionHeader: (sectionHeaderDetails) =>
    dispatch(updateSectionHeader(sectionHeaderDetails)),
});

export default connect(null, mapDispatchToProps)(ApplicationOverview);
