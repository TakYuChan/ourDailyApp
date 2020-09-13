import React, { useEffect } from "react";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import RenderRouter from "../../Components/RenderPropsComs/RenderRouter/RenderRouter.renderPropCom";
import { fetchApplicationsStart } from "../../redux/app/app.actions";

// import ApplicationOverview from "../../Pages/ApplicationOverview/ApplicationOverview.component";
// import ApplicationDetailTemplateWithPreloader from "../../Pages/Templates/ApplicationDetailTemplate/ApplicationDetailTemplateWithPreloader.component";

import PropTypes from "prop-types";

const ShopRouter = ({ fetchApplicationsStart }) => {
  const ApplicationOverview = React.lazy(() =>
    import("../../Pages/ApplicationOverview/ApplicationOverview.component")
  );
  const ApplicationDetailTemplateWithPreloader = React.lazy(() =>
    import(
      "../../Pages/Templates/ApplicationDetailTemplate/ApplicationDetailTemplateWithPreloader.component"
    )
  );

  useEffect(() => {
    fetchApplicationsStart();
  }, [fetchApplicationsStart]);

  console.log("Shop Router mounted");

  return (
    <RenderRouter>
      {(router) => (
        <div className="shop-page">
          <Route
            exact
            path={`${router.matchPath}`}
            component={ApplicationOverview}
          />
          <Route
            exact
            path={`${router.matchPath}/:applicationId`}
            component={ApplicationDetailTemplateWithPreloader}
          />
        </div>
      )}
    </RenderRouter>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchApplicationsStart: () => dispatch(fetchApplicationsStart()),
});

ShopRouter.propTypes = {
  fetchApplicationsStart: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ShopRouter);
