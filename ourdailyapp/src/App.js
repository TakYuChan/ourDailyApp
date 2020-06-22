import React from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";

import {
  setUser,
  userLoggedOn,
  userLoggedOFF,
} from "./redux/user/user.actions";

import MainPage from "./Pages/mainPage/mainPage.component";
import ShopPage from "./Pages/shopPage/shopPage.component";
import ProfilePage from "./Pages/ProfilePage/profilePage.component";
import NoMatch from "./Pages/NoMatchPage/noMatchPage.component";

import Header from "./Components/header/header.component";
import FloatNav from "./Components/floatNav/floatNav.component";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverNavItem: null,
    };
  }

  //=============== Custom Variables ===============
  unsubscribeFromAuthState = null;
  unsubscribeFromUserSnapShot = null;

  //=============== Life Cycle Hooks ===============

  componentDidMount() {
    this.unsubscribeFromAuthState = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // 1. Google Auth and basic email password log in have different data input ways.
        const userRef = await createUserProfileDocument(user);
        console.log(user);

        // 2. Turn user logged State On
        this.props.userLoggedOn();

        // 3. Keep Listening to user data changes and set user state
        this.unsubscribeFromUserSnapShot = userRef.onSnapshot((snapShot) => {
          this.props.setUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        // Rendewr with currentUser to null
        // And Userlogged to false
        this.props.setUser(user);
        this.props.userLoggedOFF();
      }
    });
  }

  componentWillUnmount() {
    // Unsubscribe listeners
    this.unsubscribeFromAuthState();
    this.unsubscribeFromUserSnapShot();
  }

  render() {
    const { hoverNavItem } = this.state;

    return [
      <Header />,
      <FloatNav
        handleNavItemHover={this.handleNavItemHover}
        hoverNavItem={hoverNavItem}
      />,
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route component={NoMatch} />
      </Switch>,
    ];
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  userLoggedOn: () => dispatch(userLoggedOn()),
  userLoggedOFF: () => dispatch(userLoggedOFF()),
});

export default connect(null, mapDispatchToProps)(App);
