import React, { useEffect } from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes.helper";

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
import HomePage from "./Pages/Home/Home.page";

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
        {isUserLogged && <NavUIComponents />}
        <Switch>
          <IsUserRedirect
            exact
            path="/"
            isLogged={isUserLogged}
            loggedInPath={"/main"}
          >
            <HomePage />
          </IsUserRedirect>
          <IsUserRedirect
            isLogged={isUserLogged}
            path={"/auth"}
            loggedInPath={"/main"}
          >
            <AuthPage />
          </IsUserRedirect>
          <ProtectedRoute exact isLogged={isUserLogged} path="/main">
            <MainPage />
          </ProtectedRoute>
          <ProtectedRoute isLogged={isUserLogged} path="/shop">
            <ShopRouter />
          </ProtectedRoute>
          <ProtectedRoute
            exact
            isLogged={isUserLogged}
            path="/commentsConverter"
          >
            <CommentsConverterPage />
          </ProtectedRoute>
          <ProtectedRoute exact isLogged={isUserLogged} path="/pigGame">
            <PigGamePageWithSpinner />
          </ProtectedRoute>
          <ProtectedRoute exact isLogged={isUserLogged} path="/profile">
            <ProfilePage />
          </ProtectedRoute>
          <ProtectedRoute exact isLogged={isUserLogged} path="/cart">
            <CartPage />
          </ProtectedRoute>
          <ProtectedRoute exact isLogged={isUserLogged} path="/wishlist">
            <WishListPage />
          </ProtectedRoute>
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
