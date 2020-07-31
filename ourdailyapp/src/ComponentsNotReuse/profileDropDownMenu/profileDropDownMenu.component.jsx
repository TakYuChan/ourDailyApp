import React from "react";
import "./profileDropDownMenu.style.scss";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  localStorageGetItem,
  localStorageIsItemExist,
} from "../../utils/localStorage";
import { closeNav } from "../../redux/nav/nav.actions";
import {
  selectCurrentUser,
  selectUserLogged,
} from "../../redux/user/user.selectors";

import SignInSignOutButton from "../../ComponentsNotReuse/signInSignOutButton/signInSignOutButton.component";
import DropDownHeader from "../../ComponentsNotReuse/profileDropDownHeader/profileDropDownHeader.component";
import { Dropdown } from "react-bootstrap";

class ProfileDropDownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  profileDropDownStyle() {
    if (localStorageIsItemExist("user")) {
      return localStorageGetItem("user").photoURL
        ? {
            backgroundImage: `url(${localStorageGetItem("user").photoURL})`,
          }
        : {
            background: "white",
          };
    }
  }

  // ========================= Life Cycle Hooks =========================

  render() {
    return (
      <Dropdown className="dropDownMenu--profile">
        <Dropdown.Toggle
          id="dropdown-basic-button"
          title=""
          style={
            localStorageIsItemExist("user") ? this.profileDropDownStyle() : null
          }
        ></Dropdown.Toggle>

        <Dropdown.Menu>
          <DropDownHeader currentUser={this.props.currentUser} />

          <Dropdown.Divider />

          {/* =========== openSignInModal Btn ============= */}
          <SignInSignOutButton />

          <Dropdown.Item
            className="btn--profile"
            onClick={() => {
              this.props.closeNav();
              this.props.history.push("/profile");
            }}
          >
            <i className="iconfont icon-profile"></i>Profile
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              this.props.closeNav();
            }}
          >
            <i className="iconfont icon-Settingscontroloptions"></i>
            Setting
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  userLogged: selectUserLogged,
});

const mapDispatchToState = (dispatch) => ({
  closeNav: () => dispatch(closeNav()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToState)(ProfileDropDownMenu)
);
