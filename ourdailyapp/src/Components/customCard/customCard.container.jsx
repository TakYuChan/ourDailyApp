import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

// import CustomCard from "./customCard.component";
import WithPreloader from "./withPreloader.component";
import {
  selectIsApplicationsLoaded,
  selectApplicationsInArray,
} from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsApplicationsLoaded(state),
  applications: selectApplicationsInArray,
});

const CustomCardContainer = compose(connect(mapStateToProps))(WithPreloader);

export default CustomCardContainer;
