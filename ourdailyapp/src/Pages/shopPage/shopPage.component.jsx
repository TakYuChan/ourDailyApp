import React from "react";
import "./shopPage.style.scss";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { fetchApplicationsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectIsApplicationsLoaded,
  selectIsFetching,
} from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";

import ApplicationOverview from "../../ComponentsNotReuse/applicationOverview/applicationOverview.component";
import ApplicationDetailPage from "../../Pages/ApplicationDetailPage/applicationDetailPage.component";
import WithSpinner from "../../Components/with-spinner/with-spinner.component";
import SectionHeader from "../../Components/sectionHeader/sectionHeader.component";

// With Spinner
const ApplicationOverviewWithSpinner = WithSpinner(ApplicationOverview);
const ApplicationDetailPageWithSpinner = WithSpinner(ApplicationDetailPage);

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
    const { match, closeShopNav, isApplicationsLoaded } = this.props;

    console.log("HI!!", selectIsFetching);

    return (
      <div className="shop-page" onClick={closeShopNav}>
        <SectionHeader />
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <ApplicationOverviewWithSpinner
              isLoading={!isApplicationsLoaded}
              {...props}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/:applicationId`}
          render={(props) => (
            <ApplicationDetailPageWithSpinner
              isLoading={!isApplicationsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isApplicationsLoaded: selectIsApplicationsLoaded,
  isFetching: selectIsFetching,
});

const mapDispatchToProps = (dispatch) => ({
  closeShopNav: () => dispatch(closeShopNav()),
  fetchApplicationsStartAsync: () => dispatch(fetchApplicationsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
