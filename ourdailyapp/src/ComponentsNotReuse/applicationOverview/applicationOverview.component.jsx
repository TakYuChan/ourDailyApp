import React from "react";
import S from "./applicationOverview.style";

import { createStructuredSelector } from "reselect";
import { selectApplicationsInArray } from "../../redux/shop/shop.selector";
import { updatePage } from "../../redux/sectionHeader/sectionHeader.actions";
import { connect } from "react-redux";

import CustomCard from "../../Components/customCard/customCard.component";

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
    const { applications } = this.props;
    return (
      <S.ApplicationOverviewContainer className="application-overview pages">
        {/* ============= content main ============= */}
        <S.ShopContentContainer className="shop-content-main">
          {applications.map((app) => (
            <CustomCard id={app.id} app={app} />
          ))}
        </S.ShopContentContainer>
      </S.ApplicationOverviewContainer>
    );
  }
}

const mapStatetoProps = createStructuredSelector({
  applications: selectApplicationsInArray,
});

const mapDispatchToProps = (dispatch) => ({
  updatePage: (pageDetails) => dispatch(updatePage(pageDetails)),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(ApplicationOverview);
