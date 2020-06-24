import React from "react";
import "./shopPage.style.scss";

import { Route } from "react-router-dom";

import ApplicationOverview from "../../ComponentsNotReuse/applicationOverview/applicationOverview.component";
import ApplicationDetailPage from "../../Pages/ApplicationDetailPage/applicationDetailPage.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={ApplicationOverview} />
      <Route
        exact
        path={`${match.path}/:applicationId`}
        component={ApplicationDetailPage}
      />
    </div>
  );
};

export default ShopPage;
