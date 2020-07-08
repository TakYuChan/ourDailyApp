import React from "react";
import "./shopPage.style.scss";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import {
  firestore,
  convertApplicationsArrayToMap,
} from "../../firebase/firebase.utils";
import { updateApplications } from "../../redux/shop/shop.actions";

import ApplicationOverview from "../../ComponentsNotReuse/applicationOverview/applicationOverview.component";
import ApplicationDetailPage from "../../Pages/ApplicationDetailPage/applicationDetailPage.component";

class ShopPage extends React.Component {
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
      });
  }

  componentWillUnmount() {
    console.log("Unmounted Shop Page");

    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match, closeShopNav } = this.props;
    return (
      <div className="shop-page" onClick={closeShopNav}>
        <Route exact path={`${match.path}`} component={ApplicationOverview} />
        <Route
          exact
          path={`${match.path}/:applicationId`}
          component={ApplicationDetailPage}
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
