import React from "react";
import "./shopPage.style.scss";

import ShopContentMain from "../../ComponentsNotReuse/shop-content-main/shop-content-main.component";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <header>
        <h1 id="applications" className="title">
          Applications
        </h1>
      </header>

      <ShopContentMain />
    </div>
  );
};

export default ShopPage;
