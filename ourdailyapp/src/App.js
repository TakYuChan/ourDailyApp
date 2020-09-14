import React, { useEffect } from "react";

import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./utils/styled/globalStyle";
import { lightTheme, darkTheme } from "./utils/styled/theme";
import { checkAuthSession } from "./redux/Auth/auth.actions";
import { selectIsUserLogged } from "./redux/Auth/auth.selectors";
import componentWithPreload from "./utils/lazyLoading/componentWithPreload";
import PixelSpinner from "./Components/Molecules/Spinners/PixelSpinner/PixelSpinner.component";

import NavUIComponents from "./Components/NavUIComponents/NavUIComponents.component";
import ProfilePage from "./Pages/ProfilePage/ProfilePage.component";
import CommentsConverterPage from "./Pages/CommentsConverterPage/CommentsConverterPage.component";
import NoMatch from "./Pages/NoMatchPage/NoMatchPage.component";

import "./App.scss";

const ShopRouter = componentWithPreload(() =>
  import("./Routers/ShopRouter/ShopRouter.component")
);

const WishListPage = React.lazy(() =>
  import("./Pages/wishlistPage/wishlistPage.component")
);
const CartPage = React.lazy(() =>
  import("./Pages/cartPage/cartPage.component")
);
const MainPage = React.lazy(() =>
  import("./Pages/mainPage/mainPage.component")
);
const AuthPage = React.lazy(() =>
  import("./Pages/AuthPage/AuthPage.component")
);
const PigGamePageWithSpinner = React.lazy(() =>
  import("./games/Pig_game/pigGamePageWithSpinner.component")
);

export const routes = [
  {
    path: "/shop",
    exact: false,
    component: ShopRouter,
  },
];

const App = ({ checkAuthSession, isUserLogged }) => {
  //=============== Life Cycle Hooks ===============
  useEffect(() => {
    checkAuthSession();
  }, [checkAuthSession]);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {isUserLogged && <NavUIComponents />}{" "}
      <React.Suspense
        fallback={
          <PixelSpinner
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            size={2}
            animationDuration={800}
          />
        }
      >
        <Switch>
          <Route
            exact
            path="/auth"
            render={() => (!isUserLogged ? <AuthPage /> : <Redirect to="/" />)}
          />
          <Route
            exact
            path="/"
            render={() =>
              isUserLogged ? <MainPage /> : <Redirect to="/auth" />
            }
          />{" "}
          <Route
            path="/shop"
            render={() =>
              isUserLogged ? <ShopRouter /> : <Redirect to="/auth" />
            }
            // component={ShopRouter}
          />{" "}
          <Route
            path="/commentsConverter"
            render={() =>
              isUserLogged ? <CommentsConverterPage /> : <Redirect to="/auth" />
            }
          />{" "}
          <Route
            path="/pigGame"
            render={() =>
              isUserLogged ? (
                <PigGamePageWithSpinner />
              ) : (
                <Redirect to="/auth" />
              )
            }
          />{" "}
          <Route
            path="/profile"
            render={() =>
              isUserLogged ? <ProfilePage /> : <Redirect to="/auth/login" />
            }
          />{" "}
          <Route
            path="/cart"
            render={() =>
              isUserLogged ? <CartPage /> : <Redirect to="/auth/login" />
            }
          />{" "}
          <Route
            path="/wishlist"
            render={() =>
              isUserLogged ? <WishListPage /> : <Redirect to="/auth/login" />
            }
          />{" "}
          <Route
            // render={() => (isUserLogged ? <NoMatch /> : <Redirect to="/login" />)}
            component={NoMatch}
          />{" "}
        </Switch>
      </React.Suspense>
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
