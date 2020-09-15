import React, { useEffect } from "react";

import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import RenderRouter from "../../Components/RenderPropsComs/RenderRouter/RenderRouter.renderPropCom";
import { fetchApplicationsStart } from "../../redux/app/app.actions";

import PropTypes from "prop-types";

const ShopRouter = () => {
  const ApplicationOverview = React.lazy(() =>
    import("../../Pages/ApplicationOverview/ApplicationOverview.component")
  );
  const ApplicationDetailTemplateWithPreloader = React.lazy(() =>
    import(
      "../../Pages/Templates/ApplicationDetailTemplate/ApplicationDetailTemplateWithPreloader.component"
    )
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApplicationsStart());
  }, [dispatch]);

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

ShopRouter.propTypes = {
  fetchApplicationsStart: PropTypes.func.isRequired,
};

export default ShopRouter;
