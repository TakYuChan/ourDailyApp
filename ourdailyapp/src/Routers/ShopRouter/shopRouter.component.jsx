import React, { useEffect } from "react";
import "./shopRouter.style.scss";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { fetchApplicationsStart } from "../../redux/app/app.actions";

import SectionHeader from "../../Components/sectionHeader/sectionHeader.component";
import ApplicationOverview from "../../Pages/applicationOverview/applicationOverview.component";
import ApplicationDetailWithPreloader from "../../Pages/ApplicationDetailPage/ApplicationDetailPageWithPreloader.component";

import PropTypes from "prop-types";

const ShopRouter = ({ match, closeShopNav, fetchApplicationsStart }) => {
  useEffect(() => {
    fetchApplicationsStart();
  }, [fetchApplicationsStart]);

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
};

const mapDispatchToProps = (dispatch) => ({
  closeShopNav: () => dispatch(closeShopNav()),
  fetchApplicationsStart: () => dispatch(fetchApplicationsStart()),
});

ShopRouter.propTypes = {
  closeShopNav: PropTypes.func.isRequired,
  fetchApplicationsStart: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ShopRouter);