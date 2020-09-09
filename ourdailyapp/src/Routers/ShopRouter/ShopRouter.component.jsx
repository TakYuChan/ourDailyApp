import React, { useEffect } from "react";

import { Route, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { fetchApplicationsStart } from "../../redux/app/app.actions";

import ApplicationOverview from "../../Pages/ApplicationOverview/ApplicationOverview.component";
import ApplicationDetailTemplateWithPreloader from "../../Pages/Templates/ApplicationDetailTemplate/ApplicationDetailTemplateWithPreloader.component";

import PropTypes from "prop-types";

const ShopRouter = ({ closeShopNav, fetchApplicationsStart }) => {
  useEffect(() => {
    fetchApplicationsStart();
  }, [fetchApplicationsStart]);

  function useRouter() {
    const match = useRouteMatch();

    return React.useMemo(() => {
      return {
        matchPath: match.path,
      };
    }, [match]);
  }

  const router = useRouter();

  return (
    <div className="shop-page" onClick={closeShopNav}>
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
