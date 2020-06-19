import React from "react";
import "./header.style.scss";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/nav/nav.selectors";
import { toggleNavHidden } from "../../redux/nav/nav.actions";

import SignInAndSignUp from "../../Pages/signInAndSignUp/signInAndSignUp.component";

import { Button } from "react-bootstrap";
import Logo from "../logo/logo.component";
import ReactToolTip from "react-tooltip";
import { ReactComponent as NavIcon } from "../../assets/nav.svg";

import ProfileDropDownMenu from "../../ComponentsNotReuse/profileDropDownMenu/profileDropDownMenu.component";
import CustomButton from "../customButton/customButton.component";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignInSignUpModal: false,
    };
  }

  // ========================= Custom Methods =========================
  handleSignInSignUpShow = () => this.setState({ showSignInSignUpModal: true });
  handleSignInSignUpClose = () =>
    this.setState({ showSignInSignUpModal: false });

  render() {
    const { showSignInSignUpModal } = this.state;

    return (
      <header className="header">
        <nav>
          {/* ====================== Logo ====================== */}
          <Logo
            wrapperId="header-logo-wrapper"
            id="header-logo"
            withLink={true}
          />

          {/* ====================== Change language Badge ====================== */}
          <div className="list">
            <Button
              variant="primary"
              className="badge badge-primary btn-lang"
              onClick={this.props.handleLanguageClick}
              data-tip
              data-for="langTip"
            >
              <span>中文</span>
            </Button>
            <ReactToolTip
              arrowColor="#454e56"
              id="langTip"
              place="bottom"
              effect="solid"
              className="tooltip"
            >
              Language
            </ReactToolTip>

            {/* ====================== SVG btn -> Float Nav ====================== */}

            <CustomButton
              className={`${this.props.navHidden ? "" : "active"} svg-wrapper`}
              onClick={() => {
                this.props.toggleNav();
              }}
              dataFor="navTip"
              withToolTip={true}
              toolTipId="navTip"
              toolTipPlace="bottom"
              toolTipEffect="solid"
              toolTipClass="tooltip"
              toolTipText="Navigation Menu"
            >
              <NavIcon />
            </CustomButton>

            {/* ====================== Profile Drop Down ====================== */}

            <ProfileDropDownMenu
              handleSignInSignUpShow={this.handleSignInSignUpShow}
              currentUser={this.props.currentUser}
              userLogged={this.props.userLogged}
              userlogStateChanged={this.props.userlogStateChanged}
            />

            {/* - Passing the "showSignInSignUpModal" to Open / Close Modal */}
            <SignInAndSignUp
              show={showSignInSignUpModal}
              handleClose={this.handleSignInSignUpClose}
              userlogStateChanged={this.props.userlogStateChanged}
            />
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  navHidden: selectHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleNav: () => dispatch(toggleNavHidden()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
