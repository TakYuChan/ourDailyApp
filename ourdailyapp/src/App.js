import React from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";

import MainPage from "./Pages/mainPage/mainPage.component";
import NoMatch from "./Pages/NoMatchPage/noMatchPage.component";

import Header from "./Components/header/header.component";
import FloatNav from "./Components/floatNav/floatNav.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavOpened: false,
      engLanguage: true,

      hoverNavItem: null,
    };
  }

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

  //=============== Life Cycle Hooks ===============

  render() {
    const { isNavOpened, hoverNavItem } = this.state;

    return [
      <Header
        handleSvgClick={this.handleSvgClick}
        handleLanguageClick={this.handleLanguageClick}
        isNavOpened={isNavOpened}
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
        <Route component={NoMatch} />
      </Switch>,
    ];
  }
}

export default App;
