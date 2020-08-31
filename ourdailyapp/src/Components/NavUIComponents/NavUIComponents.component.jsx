import React from "react";

import Header from "../header/header.component";
import NavigationMenu from "../NavigationMenu/NavigationMenu.component";
import ShopFloatingNav from "../ShopFloatingNav/ShopFloatingNav.component";
import CartPreview from "../cartPreview/cartPreview.component";
import RoutePath from "../RoutePath/RoutePath.component";

const NavUIComponents = () => {
  return (
    <React.Fragment>
      <Header />
      <NavigationMenu />

      <ShopFloatingNav />
      <CartPreview />
      <RoutePath />
    </React.Fragment>
  );
};

export default NavUIComponents;
