import React from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";

import MainPage from "./Pages/mainPage/mainPage.component";
import ProfilePage from "./Pages/ProfilePage/profilePage.component";
import NoMatch from "./Pages/NoMatchPage/noMatchPage.component";

import Header from "./Components/header/header.component";
import FloatNav from "./Components/floatNav/floatNav.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavOpened: false,
      engLanguage: true,

      hoverNavItem: null,

      currentUser: null,
      userLogged: false,
    };
  }

  //=============== Custom Variables ===============
  unsubscribeFromAuthState = null;
  unsubscribeFromUserSnapShot = null;

  //=============== Custom method ===============
  handleSvgClick = () => {
    const { isNavOpened } = this.state;

    // If we are opening the float Nav by clicking the svg btn,
    // then refresh the float nav content to "Welcome..."
    !isNavOpened && this.setState({ hoverNavItem: null });

    // Dynamically Changing the Float Nav Content
    isNavOpened
      ? this.setState({ isNavOpened: false })
      : this.setState({ isNavOpened: true });

    return;
  };

  handleLanguageClick = () => {
    const { engLanguage } = this.state;

    engLanguage
      ? this.setState({ engLanguage: false })
      : this.setState({ engLanguage: true });
  };

  handleNavItemHover = (item) => {
    this.setState({ hoverNavItem: item });
  };

  //Closing the Float Nav if we click on the Link inside it
  handleNavLinkClick = () => {
    this.setState({ isNavOpened: false });
  };

  userlogStateChanged = () => {
    this.state.userLogged === true
      ? this.setState({ userLogged: false })
      : this.setState({ userLogged: true });
  };

  //=============== Life Cycle Hooks ===============

  componentDidMount() {
    this.unsubscribeFromAuthState = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Google Auth and basic email password log in have different data input ways.
        const userRef = await createUserProfileDocument(user);
        console.log(user);

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
        this.setState({ currentUser: user });
      }
    });
  }

  componentWillUnmount() {
    // Unsubscribe listeners
    this.unsubscribeFromAuthState();
    this.unsubscribeFromUserSnapShot();
  }

  render() {
    const { isNavOpened, hoverNavItem, currentUser, userLogged } = this.state;

    return [
      <Header
        handleSvgClick={this.handleSvgClick}
        handleLanguageClick={this.handleLanguageClick}
        isNavOpened={isNavOpened}
        triggerClosingNav={this.handleNavLinkClick}
        currentUser={currentUser}
        userlogStateChanged={this.userlogStateChanged}
        userLogged={userLogged}
      />,
      <FloatNav
        isNavOpened={isNavOpened}
        handleNavItemHover={this.handleNavItemHover}
        hoverNavItem={hoverNavItem}
        handleNavLinkClick={this.handleNavLinkClick}
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
