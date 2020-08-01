import React from "react";
import S from "./profileDropDownMenu.style";
import "./profileDropDownMenu.style.scss";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { renderProfilePicture } from "../../utils/conditional.js";
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

  // ========================= Life Cycle Hooks =========================

  render() {
    const { currentUser, closeNav, history } = this.props;
    return (
      <Dropdown className="dropDownMenu--profile">
        <S.DropDownToggle
          id="dropdown-basic-button"
          title=""
          imgSrc={() => renderProfilePicture(currentUser)}
        ></S.DropDownToggle>

        <Dropdown.Menu>
          <DropDownHeader currentUser={currentUser} />

          <Dropdown.Divider />

          {/* =========== openSignInModal Btn ============= */}
          <SignInSignOutButton />

          <Dropdown.Item
            className="btn--profile"
            onClick={() => {
              closeNav();
              history.push("/profile");
            }}
          >
            <i className="iconfont icon-profile"></i>Profile
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              closeNav();
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
