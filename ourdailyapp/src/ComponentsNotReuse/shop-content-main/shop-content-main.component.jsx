import React from "react";
import "./shop-content-main.style.scss";

import { createStructuredSelector } from "reselect";
import { selectApplications } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

import CustomCard from "../../Components/customCard/customCard.component";

const ShopContentMain = ({ applications }) => (
  <div className="content-main">
    {applications.map((app) => (
      <CustomCard id={app.id} app={app} />
    ))}
  </div>
);

const mapStatetoProps = createStructuredSelector({
  applications: selectApplications,
});

export default connect(mapStatetoProps)(ShopContentMain);
