import React from "react";
import "./shopPage.style.scss";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { fetchApplicationsStartAsync } from "../../redux/shop/shop.actions";

import SectionHeader from "../../Components/sectionHeader/sectionHeader.component";
import ApplicationOverviewContainer from "../../ComponentsNotReuse/applicationOverview/applicationOverview.container";
import ApplicationDetailPageContainer from "../ApplicationDetailPage/applicationDetailPage.container";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { fetchApplicationsStartAsync } = this.props;

    console.log("Mounted Shop Page");

    fetchApplicationsStartAsync();
  }

  componentWillUnmount() {
    console.log("Unmounted Shop Page");
  }

  render() {
    const { match, closeShopNav } = this.props;

    return (
      <div className="shop-page" onClick={closeShopNav}>
        <SectionHeader />
        <Route
          exact
          path={`${match.path}`}
          component={ApplicationOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:applicationId`}
          component={ApplicationDetailPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  closeShopNav: () => dispatch(closeShopNav()),
  fetchApplicationsStartAsync: () => dispatch(fetchApplicationsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
