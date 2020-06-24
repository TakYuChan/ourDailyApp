import React from "react";
import "./shop-content-main.style.scss";

import { createStructuredSelector } from "reselect";
import { selectApplicationsInArray } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

import CustomCard from "../../Components/customCard/customCard.component";

const ShopContentMain = ({ applications }) => (
  <div className="shop-content-main">
    {applications.map((app) => (
      <CustomCard id={app.id} app={app} />
    ))}
  </div>
);

const mapStatetoProps = createStructuredSelector({
  applications: selectApplicationsInArray,
});

export default connect(mapStatetoProps)(ShopContentMain);
