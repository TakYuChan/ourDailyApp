import React from "react";
import "./applicationOverview.style.scss";

import ShopContentMain from "../../ComponentsNotReuse/shop-content-main/shop-content-main.component";

const ApplicationOverview = () => (
  <div className="application-overview">
    <div className="heading">
      <h1 className="title">Applications</h1>
    </div>

    <ShopContentMain />
  </div>
);

export default ApplicationOverview;
