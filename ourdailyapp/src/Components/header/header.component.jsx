import React from "react";
import "./header.style.scss";
import { ReactComponent as NavIcon } from "../../assets/nav.svg";

import { Button, Dropdown, DropdownButton } from "react-bootstrap";

import ReactToolTip from "react-tooltip";

import Logo from "../logo/logo.component";

import SignInAndSignUp from "../../Pages/signInAndSignUp/signInAndSignUp.component";

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

  // ========================= Life Cycle Hooks =========================
  render() {
    const { showSignInSignUpModal } = this.state;

    return (
      <header className="header">
        <nav>
          {/* ====================== Logo ====================== */}
          <Logo wrapperId="header-logo-wrapper" id="header-logo" />

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

            <button
              className={`${
                this.props.isNavOpened ? "active" : ""
              } svg-wrapper`}
              onClick={() => {
                this.props.handleSvgClick();
              }}
              data-tip
              data-for="navTip"
            >
              <NavIcon />
            </button>
            <ReactToolTip
              arrowColor="#454e56"
              id="navTip"
              placement="bottom"
              effect="solid"
              className="tooltip"
            >
              Navigation Menu
            </ReactToolTip>

            {/* ====================== Profile Drop Down ====================== */}
            <DropdownButton id="dropdown-basic-button" title="">
              <Dropdown.Header>HI Good Morning</Dropdown.Header>
              <Dropdown.Item
                href="#/action-1"
                className="auth-btn"
                onClick={this.handleSignInSignUpShow}
              >
                Sign In
              </Dropdown.Item>

              {/* Clicking the Sign In btn will open the SignInAndSignUp modal */}
              {/* - Passing the "showSignInSignUpModal" to Open / Close Modal */}
              <SignInAndSignUp
                show={showSignInSignUpModal}
                handleClose={this.handleSignInSignUpClose}
              />

              <Dropdown.Divider />

              <Dropdown.Item href="#/action-2">
                <i className="iconfont icon-profile"></i>Profile
              </Dropdown.Item>

              <Dropdown.Item href="#/action-3">
                <i className="iconfont icon-Settingscontroloptions"></i>Setting
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
