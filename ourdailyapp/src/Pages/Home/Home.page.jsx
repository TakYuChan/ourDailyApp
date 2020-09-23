import React from "react";
import "./Home.style.scss";

import HomeHeaderContainer from "../../Containers/HomeHeader.container";
import JumbotronContainer from "../../Containers/Jumbotron.container";
import CounterCounterSection from "../../Containers/ContentCounterSection.container";
import WebSiteIntroVideoContainer from "../../Containers/WebSiteIntroVideo.container";

export default function HomePage() {
  return (
    <>
      <HomeHeaderContainer />
      <CounterCounterSection />
      <WebSiteIntroVideoContainer />
      <section
        className="relative"
        style={{
          background: "#5F5F5F",
          padding: "106px 25px 90px",
        }}
      >
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
