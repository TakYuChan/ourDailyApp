import React from "react";
import "./header.style.scss";
import { ReactComponent as NavIcon } from "../../assets/nav.svg";

import { Button, Dropdown } from "react-bootstrap";

import { withRouter } from "react-router-dom";

import ReactToolTip from "react-tooltip";

import Logo from "../logo/logo.component";

import SignInAndSignUp from "../../Pages/signInAndSignUp/signInAndSignUp.component";

import SignInSignOutButton from "../../ComponentsNotReuse/signInSignOutButton/signInSignOutButton.component";

import DropDownHeader from "../../ComponentsNotReuse/profileDropDownHeader/profileDropDownHeader.component";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignInSignUpModal: false,
    };
  }

  // ========================= Custom Variables =========================

  // ========================= Custom Methods =========================
  handleSignInSignUpShow = () => this.setState({ showSignInSignUpModal: true });
  handleSignInSignUpClose = () =>
    this.setState({ showSignInSignUpModal: false });

  profileDropDownStyle() {
    if (this.props.currentUser) {
      return this.props.currentUser.photoURL
        ? {
            backgroundImage: `url(${this.props.currentUser.photoURL})`,
          }
        : {
            background: "white",
          };
    }
  }

  // ========================= Life Cycle Hooks =========================
  render() {
    const { showSignInSignUpModal } = this.state;

    return (
      <header className="header">
        <nav>
          {/* ====================== Logo ====================== */}
          <Logo
            wrapperId="header-logo-wrapper"
            id="header-logo"
            triggerClosingNav={this.props.triggerClosingNav}
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

            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic-button"
                title=""
                style={
                  this.props.currentUser ? this.profileDropDownStyle() : null
                }
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <DropDownHeader currentUser={this.props.currentUser} />

                <Dropdown.Divider />

                {/* =========== openSignInModal Btn ============= */}
                <SignInSignOutButton
                  userlogStateChanged={this.props.userlogStateChanged}
                  handleSignInSignUpShow={this.handleSignInSignUpShow}
                  userLogged={this.props.userLogged}
                />

                <Dropdown.Item
                  className="btn--profile"
                  onClick={() => {
                    this.props.triggerClosingNav();
                    this.props.history.push("/profile");
                  }}
                >
                  <i className="iconfont icon-profile"></i>Profile
                </Dropdown.Item>

                <Dropdown.Item
                  href="#/action-3"
                  onClick={() => {
                    this.props.triggerClosingNav();
                  }}
                >
                  <i className="iconfont icon-Settingscontroloptions"></i>
                  Setting
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Clicking the Sign In btn will open the SignInAndSignUp modal */}
            {/* - Passing the "showSignInSignUpModal" to Open / Close Modal */}
            <SignInAndSignUp
              show={showSignInSignUpModal}
              handleClose={this.handleSignInSignUpClose}
              triggerClosingNav={this.props.triggerClosingNav}
              userlogStateChanged={this.props.userlogStateChanged}
            />
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
