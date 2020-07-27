import React from "react";
import "./shopPage.style.scss";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { fetchApplicationsStartAsync } from "../../redux/app/app.actions";

import SectionHeader from "../../Components/sectionHeader/sectionHeader.component";
import ApplicationOverview from "../../ComponentsNotReuse/applicationOverview/applicationOverview.component";
import ApplicationDetailWithPreloader from "../ApplicationDetailPage/applicationDetailWithPreloader.component";

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
        <Route exact path={`${match.path}`} component={ApplicationOverview} />
        <Route
          exact
          path={`${match.path}/:applicationId`}
          component={ApplicationDetailWithPreloader}
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
