import React from "react";

import Header from "../Header/Header.component";
import NavigationMenu from "../NavigationMenu/NavigationMenu.component";
import ShopFloatingNav from "../ShopFloatingNav/ShopFloatingNav.component";
import CartPreview from "../cartPreview/cartPreview.component";

const RoutePath = React.lazy(() => import("../RoutePath/RoutePath.component"));

const NavUIComponents = () => {
  return (
    <React.Fragment>
      <Header />
      <NavigationMenu />
      <ShopFloatingNav />
      <CartPreview />
      <React.Suspense fallback={<h1 style={{ display: "none" }} />}>
        <RoutePath />
      </React.Suspense>
    </React.Fragment>
  );
};

export default NavUIComponents;
