import React from "react";
import "./applicationOverview.style.scss";

import { createStructuredSelector } from "reselect";
import { selectApplicationsInArray } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

import CustomCard from "../../Components/customCard/customCard.component";

const ApplicationOverview = ({ applications }) => (
  <div className="application-overview">
    {/* ============= heading ============= */}
    <div className="heading">
      <h1 className="title">Applications</h1>
    </div>

    {/* ============= content main ============= */}
    <div className="shop-content-main">
      {applications.map((app) => (
        <CustomCard id={app.id} app={app} />
      ))}
    </div>
  </div>
);

const mapStatetoProps = createStructuredSelector({
  applications: selectApplicationsInArray,
});

export default connect(mapStatetoProps)(ApplicationOverview);
