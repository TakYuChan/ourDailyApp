import React, { useEffect } from "react";
// import SHOP_DATA from "./redux/shop/shop.data";
// import APPLICATIONS_DATA from "./data/application.data";
import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";
// import { addCollectionAndDocuments } from "./firebase/firestore/setData";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styled/globalStyle";
import { lightTheme, darkTheme } from "./styled/theme";
import { checkAuthSession } from "./redux/user/user.actions";
import { selectIsUserLogged } from "./redux/user/user.selectors";

import MainPage from "./Pages/mainPage/mainPage.component";
import ShopRouter from "./Routers/ShopRouter/ShopRouter.component";
import AuthPage from "./Pages/AuthPage/AuthPage.component";
import NavUIComponents from "./Components/NavUIComponents/NavUIComponents.component";
import ProfilePage from "./Pages/ProfilePage/ProfilePage.component";
import CommentsConverterPage from "./Pages/CommentsConverterPage/CommentsConverterPage.component";
import NoMatch from "./Pages/NoMatchPage/NoMatchPage.component";
import CartPage from "./Pages/cartPage/cartPage.component";
import WishlistPage from "./Pages/wishlistPage/wishlistPage.component";
import PigGamePageWithSpinner from "./games/Pig_game/pigGamePageWithSpinner.component";

import "./App.scss";

const App = ({ checkAuthSession, isUserLogged }) => {
  //=============== Life Cycle Hooks ===============
  useEffect(() => {
    checkAuthSession();
  }, [checkAuthSession]);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />

      {isUserLogged && <NavUIComponents />}
      <Switch>
        <Route
          exact
          path="/auth"
          render={() => (!isUserLogged ? <AuthPage /> : <Redirect to="/" />)}
        />

        <Route
          exact
          path="/"
          render={() => (isUserLogged ? <MainPage /> : <Redirect to="/auth" />)}
        />
        <Route
          path="/shop"
          render={() =>
            isUserLogged ? <ShopRouter /> : <Redirect to="/auth" />
          }
          // component={ShopRouter}
        />
        <Route
          path="/commentsConverter"
          render={() =>
            isUserLogged ? <CommentsConverterPage /> : <Redirect to="/auth" />
          }
        />
        <Route
          path="/pigGame"
          render={() =>
            isUserLogged ? <PigGamePageWithSpinner /> : <Redirect to="/auth" />
          }
        />
        <Route
          path="/profile"
          render={() =>
            isUserLogged ? <ProfilePage /> : <Redirect to="/auth/login" />
          }
        />
        <Route
          path="/cart"
          render={() =>
            isUserLogged ? <CartPage /> : <Redirect to="/auth/login" />
          }
        />
        <Route
          path="/wishlist"
          render={() =>
            isUserLogged ? <WishlistPage /> : <Redirect to="/auth/login" />
          }
        />
        <Route
          // render={() => (isUserLogged ? <NoMatch /> : <Redirect to="/login" />)}
          component={NoMatch}
        />
      </Switch>
    </ThemeProvider>
  );
};

const mapStateToProps = createStructuredSelector({
  isUserLogged: selectIsUserLogged,
});

const mapDispatchToProps = (dispatch) => ({
  checkAuthSession: () => dispatch(checkAuthSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
