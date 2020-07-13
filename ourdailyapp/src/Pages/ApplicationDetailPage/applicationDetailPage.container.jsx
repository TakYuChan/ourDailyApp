import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import ApplicationDetailPage from "./applicationDetailPage.component";
import WithSpinner from "../../Components/with-spinner/with-spinner.component";
import { selectIsApplicationsLoaded } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsApplicationsLoaded(state),
});

const ApplicationDetailPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ApplicationDetailPage);

export default ApplicationDetailPageContainer;
