import React, { useEffect } from "react";
// import SHOP_DATA from "./redux/shop/shop.data";
// import APPLICATIONS_DATA from "./data/application.data";
import "./App.css";

import { Switch, Route } from "react-router-dom";
// import { addCollectionAndDocuments } from "./firebase/firestore/setData";
import { connect } from "react-redux";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styled/globalStyle";
import { lightTheme, darkTheme } from "./styled/theme";
import { checkAuthSession } from "./redux/user/user.actions";

import MainPage from "./Pages/mainPage/mainPage.component";
import ShopPage from "./Pages/shopPage/shopPage.component";
import ProfilePage from "./Pages/ProfilePage/profilePage.component";
import CommentsConverterPage from "./Pages/CommentsConverterPage/commentsConverterPage.component";
import NoMatch from "./Pages/NoMatchPage/noMatchPage.component";
import CartPage from "./Pages/cartPage/cartPage.component";
import WishlistPage from "./Pages/wishlistPage/wishlistPage.component";
import PigGamePageWithSpinner from "./games/Pig_game/pigGamePageWithSpinner.component";

import Header from "./Components/header/header.component";
import FloatNav from "./Components/floatNav/floatNav.component";
import ShopNav from "./ComponentsNotReuse/shopNav/shopNav.component";
import CartPreview from "./ComponentsNotReuse/cartPreview/cartPreview.component";

import "./App.scss";

const App = ({ checkAuthSession }) => {
  //=============== Life Cycle Hooks ===============
  useEffect(() => {
    checkAuthSession();
  }, [checkAuthSession]);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header />
      <FloatNav />

      <ShopNav />
      <CartPreview />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/wishlist" component={WishlistPage} />
        <Route path="/commentsConverter" component={CommentsConverterPage} />
        <Route path="/pigGame" component={PigGamePageWithSpinner} />
        <Route component={NoMatch} />
      </Switch>
    </ThemeProvider>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkAuthSession: () => dispatch(checkAuthSession()),
});

export default connect(null, mapDispatchToProps)(App);
