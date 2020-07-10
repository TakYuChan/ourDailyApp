import React from "react";
import "./shopPage.style.scss";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { firestore } from "../../firebase/firebase.utils";
import { convertApplicationsArrayToMap } from "../../firebase/firestore/convertData.js";
import { updateApplications } from "../../redux/shop/shop.actions";

import ApplicationOverview from "../../ComponentsNotReuse/applicationOverview/applicationOverview.component";
import ApplicationDetailPage from "../../Pages/ApplicationDetailPage/applicationDetailPage.component";
import WithSpinner from "../../Components/with-spinner/with-spinner.component";
import SectionHeader from "../../Components/sectionHeader/sectionHeader.component";

// With Spinner
const ApplicationOverviewWithSpinner = WithSpinner(ApplicationOverview);
const ApplicationDetailPageWithSpinner = WithSpinner(ApplicationDetailPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateApplications } = this.props;

    console.log("Mounted Shop Page");

    this.unsubscribeFromSnapshot = firestore
      .collection("applications")
      .onSnapshot((snapshot) => {
        // Get data from firestore and transform it into map
        const applicationsMap = convertApplicationsArrayToMap(snapshot);

        // Set redux state (shop)'s applications
        updateApplications(applicationsMap);

        this.setState({ loading: false });
      });
  }

  componentWillUnmount() {
    console.log("Unmounted Shop Page");

    this.unsubscribeFromSnapshot();
  }

  render() {
    const { loading } = this.state;
    const { match, closeShopNav } = this.props;
    return (
      <div className="shop-page" onClick={closeShopNav}>
        <SectionHeader />
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <ApplicationOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:applicationId`}
          render={(props) => (
            <ApplicationDetailPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  closeShopNav: () => dispatch(closeShopNav()),
  updateApplications: (applicationsMap) =>
    dispatch(updateApplications(applicationsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
