import React from "react";
import S from "./applicationOverview.style";

import { updatePage } from "../../redux/sectionHeader/sectionHeader.actions";
import { connect } from "react-redux";

import CustomCardContainer from "../../Components/customCard/customCard.container";

class ApplicationOverview extends React.Component {
  componentDidMount() {
    const { updatePage } = this.props;

    updatePage({
      page: "shop",
      details: {},
    });
  }

  componentWillUnmount() {
    const { updatePage } = this.props;
    updatePage({
      page: "preloader",
      details: {},
    });
  }

  render() {
    return (
      <S.ApplicationOverviewContainer className="application-overview pages">
        {/* ============= content main ============= */}
        <S.ShopContentContainer className={`shop-content-main`}>
          <CustomCardContainer />
        </S.ShopContentContainer>
      </S.ApplicationOverviewContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updatePage: (pageDetails) => dispatch(updatePage(pageDetails)),
});

export default connect(null, mapDispatchToProps)(ApplicationOverview);
