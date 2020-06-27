import React from "react";
import "./shopPage.style.scss";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";

import ApplicationOverview from "../../ComponentsNotReuse/applicationOverview/applicationOverview.component";
import ApplicationDetailPage from "../../Pages/ApplicationDetailPage/applicationDetailPage.component";

const ShopPage = ({ match, closeShopNav }) => {
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
};

const mapDispatchToProps = (dispatch) => ({
  closeShopNav: () => dispatch(closeShopNav()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
