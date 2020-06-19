import React from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import MainPage from "./Pages/mainPage/mainPage.component";
import ProfilePage from "./Pages/ProfilePage/profilePage.component";
import NoMatch from "./Pages/NoMatchPage/noMatchPage.component";

import Header from "./Components/header/header.component";
import FloatNav from "./Components/floatNav/floatNav.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      engLanguage: true,

      hoverNavItem: null,

      currentUser: null,
      userLogged: false,
    };
  }

  //=============== Custom Variables ===============
  unsubscribeFromAuthState = null;
  unsubscribeFromUserSnapShot = null;

  changeLanguage = () => {
    const { engLanguage } = this.state;

    engLanguage
      ? this.setState({ engLanguage: false })
      : this.setState({ engLanguage: true });
  };

  handleNavItemHover = (item) => {
    this.setState({ hoverNavItem: item });
  };

  userlogStateChanged = () => {
    this.state.userLogged
      ? this.setState({ userLogged: false })
      : this.setState({ userLogged: true });
  };

  // closeSignInSignUpModal = () => {
  //   this.setState({ showSignInSignUpModal: false });
  // };

  //=============== Life Cycle Hooks ===============

  componentDidMount() {
    this.unsubscribeFromAuthState = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Google Auth and basic email password log in have different data input ways.
        const userRef = await createUserProfileDocument(user);
        console.log(user);

        // Userlogged to true
        this.setState({ userLogged: true });

        // Close Floating Nav

        this.unsubscribeFromUserSnapShot = await userRef.onSnapshot(
          (snapShot) => {
            this.setState(
              {
                currentUser: {
                  id: snapShot.id,
                  ...snapShot.data(),
                },
              },
              () => console.log(this.state.currentUser)
            );
          }
        );
      } else {
        // Rendewr with currentUser to null
        // And Userlogged to false
        this.setState({ currentUser: user, userLogged: false });
      }
    });
  }

  componentWillUnmount() {
    // Unsubscribe listeners
    this.unsubscribeFromAuthState();
    this.unsubscribeFromUserSnapShot();
  }

  render() {
    const { hoverNavItem, currentUser, userLogged } = this.state;

    return [
      <Header
        handleLanguageClick={this.changeLanguage}
        currentUser={currentUser}
        userlogStateChanged={this.userlogStateChanged}
        userLogged={userLogged}
      />,
      <FloatNav
        handleNavItemHover={this.handleNavItemHover}
        hoverNavItem={hoverNavItem}
        handleNavLinkClick={this.closeFloatingNav}
      />,
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/todolist" component={MainPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route component={NoMatch} />
      </Switch>,
    ];
  }
}

export default App;
