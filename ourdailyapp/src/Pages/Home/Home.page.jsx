import React from "react";
import "./Home.style.scss";

import HomeHeaderContainer from "../../Containers/HomeHeader.container";
import JumbotronContainer from "../../Containers/Jumbotron.container";
import CounterCounterSection from "../../Containers/ContentCounterSection.container";

export default function HomePage() {
  return (
    <>
      <HomeHeaderContainer />
      <section className="demo-section homepage-section--2">
        <CounterCounterSection />
      </section>
      <section className="demo-section">
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
