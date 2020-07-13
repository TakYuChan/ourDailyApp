import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import ApplicationOverview from "./applicationOverview.component";
import WithSpinner from "../../Components/with-spinner/with-spinner.component";
import { selectIsApplicationsLoaded } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsApplicationsLoaded(state),
});

const ApplicationOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ApplicationOverview);

export default ApplicationOverviewContainer;
