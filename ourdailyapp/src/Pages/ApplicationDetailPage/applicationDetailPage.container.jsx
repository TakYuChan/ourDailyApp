import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

// import WithSpinner from "../../Components/with-spinner/with-spinner.component";
import WithPreloader from "./withPreloader.component";
import { selectIsApplicationsLoaded } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsApplicationsLoaded(state),
});

const ApplicationDetailPageContainer = compose(connect(mapStateToProps))(
  WithPreloader
);

export default ApplicationDetailPageContainer;
