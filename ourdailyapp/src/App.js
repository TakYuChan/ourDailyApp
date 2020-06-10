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
    };
  }

  //=============== Variables ===============

  //=============== Unsubscriber ===============

  //=============== Custom method ===============
  handleSvgClick = () => {
    const { isNavOpened } = this.state;

    isNavOpened
      ? this.setState({ isNavOpened: false })
      : this.setState({ isNavOpened: true });

    return;
  };

  //=============== Life Cycle Hooks ===============

  render() {
    const { isNavOpened } = this.state;

    return [
      <Header handleSvgClick={this.handleSvgClick} />,
      <FloatNav isNavOpened={isNavOpened} />,
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/todolist" component={MainPage} />
        <Route component={NoMatch} />
      </Switch>,
    ];
  }
}

export default App;
