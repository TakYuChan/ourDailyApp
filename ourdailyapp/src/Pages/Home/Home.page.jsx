import React from "react";
import "./Home.style.scss";

import HomeHeaderContainer from "../../Containers/HomeHeader.container";
import JumbotronContainer from "../../Containers/Jumbotron.container";

export default function HomePage() {
  return (
    <>
      <HomeHeaderContainer />
      <section className="demo-section">
        {/* <h1 className="section-title">More Projects.</h1> */}
        <JumbotronContainer />
        <div className="float-circle-small"></div>
        <div className="float-circle-small"></div>
        <div className="float-circle-small"></div>
        <div className="float-circle-small"></div>
        <div className="float-circle-big float-circle-big--1"></div>
        <div className="float-circle-big float-circle-big--2"></div>
      </section>
    </>
  );
}
