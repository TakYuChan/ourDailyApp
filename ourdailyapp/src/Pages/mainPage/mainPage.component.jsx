import React from "react";

import S from "./mainPage.style";

import { closeShopNav } from "../../redux/shopNav/shopNav.actions";
import { connect } from "react-redux";
import { fetchAppLogoItemsStart } from "../../redux/app/app.actions";

import ApplicationWrapperWithSpinner from "../../Components/applicationWrapper/applicationWrapperWithSpinner.component";
import Logo from "../../Components/logo/logo.component";

class MainPage extends React.Component {
  // ============= Life Cycle Hooks =============
  componentDidMount() {
    console.log("Main Page Mounted");

    const { fetchAppLogoItemsStart } = this.props;
    fetchAppLogoItemsStart();
  }

  componentWillUnmount() {
    console.log("Main Page unmounted");
  }

  render() {
    const { closeShopNav } = this.props;
    return (
      <S.MainPageContainer className="MainPage pages" onClick={closeShopNav}>
        <S.LogoWrapper className="logo-wrapper">
          <Logo />
        </S.LogoWrapper>
        <ApplicationWrapperWithSpinner />
      </S.MainPageContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  closeShopNav: () => dispatch(closeShopNav()),
  fetchAppLogoItemsStart: () => dispatch(fetchAppLogoItemsStart()),
});

export default connect(null, mapDispatchToProps)(MainPage);
