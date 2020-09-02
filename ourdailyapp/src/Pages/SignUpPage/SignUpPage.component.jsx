import React, { useEffect } from "react";
import S from "./SignUpPage.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAuthPage } from "../../redux/AuthRouter/AuthRouter.selectors";
import { changePage } from "../../redux/AuthRouter/AuthRouter.actions";

const SignUpPage = ({ authPage, changeAuthPage }) => {
  useEffect(() => {
    changeAuthPage("signup");
  }, [changeAuthPage]);

  return <React.Fragment></React.Fragment>;
};

const mapStateToProps = createStructuredSelector({
  authPage: selectAuthPage,
});

const mapDispatchToProps = (dispatch) => ({
  changeAuthPage: (pageName) => dispatch(changePage(pageName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
