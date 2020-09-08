import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsSigningUp } from "../../../redux/signUpForm/signUpForm.selectors";
import WithSpinner from "../../../HOC/withSpinner/withSpinner.component";
