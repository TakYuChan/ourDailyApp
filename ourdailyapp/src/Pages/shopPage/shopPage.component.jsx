import React from "react";
import "./shopPage.style.scss";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { fetchApplicationsStart } from "../../redux/app/app.actions";

import SectionHeader from "../../Components/sectionHeader/sectionHeader.component";
import ApplicationOverview from "../../ComponentsNotReuse/applicationOverview/applicationOverview.component";
import ApplicationDetailWithPreloader from "../ApplicationDetailPage/applicationDetailWithPreloader.component";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchApplicationsStart } = this.props;

    fetchApplicationsStart();
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
  fetchApplicationsStart: () => dispatch(fetchApplicationsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
