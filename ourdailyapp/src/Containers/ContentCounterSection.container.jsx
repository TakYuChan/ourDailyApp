import React from "react";
import { ContentCounter } from "../Components/Compound Components";
import { Typography } from "../Components/Compound Components";
import { useMediaQuery } from "react-responsive";
import { useCountUp } from "react-countup";
import useOnScreen from "../hooks/useShowScreen.hooks";

export default function CounterCounterSection() {
  const { countUp } = useCountUp({ end: 10 });

  const [setNode, startAnimate] = useOnScreen({ threshold: 0.5 });

  const width_above_550 = useMediaQuery({ query: "(min-width: 550px" });
  const width_above_1180 = useMediaQuery({ query: "(min-width: 1180px" });
  return (
    <section
      className="gridCenterContent"
      style={{
        padding: "106px 25px 90px",
        overflow: "hidden",
        position: "relative",
      }}
      ref={setNode}
    >
      <ContentCounter
        style={{
          gridColumn: "2",
        }}
      >
        <ContentCounter.CompanyWall
          className={`${startAnimate ? "fadeIn" : ""}`}
          fadeInFrom="X"
          fadeDistance="-20"
          style={{ opacity: "0" }}
        >
          <ContentCounter.WallRowOne>
            <ContentCounter.WallImage src="/images/assets/linkedin.png" />
            <ContentCounter.WallImage src="/images/assets/facebook.png" />
            <ContentCounter.WallImage src="/images/assets/air-nz.png" />
            <ContentCounter.WallImage src="/images/assets/airbnb.png" />
            <ContentCounter.WallImage src="/images/assets/amazon.png" />
          </ContentCounter.WallRowOne>
          <ContentCounter.WallRowTwo>
            <ContentCounter.WallImage src="/images/assets/geo.png" />
            <ContentCounter.WallImage src="/images/assets/github.png" />
            <ContentCounter.WallImage src="/images/assets/jira.png" />
            <ContentCounter.WallImage src="/images/assets/lyft.png" />
          </ContentCounter.WallRowTwo>
          <ContentCounter.WallRowOne>
            <ContentCounter.WallImage src="/images/assets/microsoft.png" />
            <ContentCounter.WallImage src="/images/assets/myob.png" />
            <ContentCounter.WallImage src="/images/assets/redash.png" />
            <ContentCounter.WallImage src="/images/assets/salesforce.png" />
            <ContentCounter.WallImage src="/images/assets/serko.png" />
          </ContentCounter.WallRowOne>
          {width_above_550 && (
            <>
              <ContentCounter.WallRowTwo>
                <ContentCounter.WallImage src="/images/assets/slack.png" />
                <ContentCounter.WallImage src="/images/assets/linkedin.png" />
                <ContentCounter.WallImage src="/images/assets/survey-monkey.png" />
                <ContentCounter.WallImage src="/images/assets/todoist.png" />
              </ContentCounter.WallRowTwo>
              <ContentCounter.WallRowOne>
                <ContentCounter.WallImage src="/images/assets/transcribe-me.png" />
                <ContentCounter.WallImage src="/images/assets/twilio.png" />
                <ContentCounter.WallImage src="/images/assets/vend.png" />
                <ContentCounter.WallImage src="/images/assets/xero.png" />
                <ContentCounter.WallImage src="/images/assets/zendesk.png" />
              </ContentCounter.WallRowOne>
            </>
          )}
        </ContentCounter.CompanyWall>

        {width_above_1180 ? null : <ContentCounter.WallPlaceHolderDiv />}

        <ContentCounter.TextAndCardWrapper>
          <Typography.SectionSubtitle
            className={`${startAnimate ? "fadeIn" : ""}`}
            fadeinfrom="Y"
            fadedistance="-20"
            delay={600}
          >
            Find a Job worldwide without a resume.
          </Typography.SectionSubtitle>
          <Typography.SectionTitle
            className={`${startAnimate ? "fadeIn" : ""}`}
            fadeinfrom="Y"
            fadedistance="-20"
            delay={600}
          >
            Get referred to over {countUp}K companies with your ratings
          </Typography.SectionTitle>
          <Typography.SectionText
            className={`${startAnimate ? "fadeIn" : ""}`}
            fadeinfrom="X"
            fadedistance="20"
            delay={1000}
          >
            With Skillsme, your projects has the potential to reach over 10,000
            companies worldwide that is interested in recruiting tech talents
            like you. Validate your projects with ratings only on Skillsme.
          </Typography.SectionText>
          <ContentCounter.Card
            className={`${startAnimate ? "fadeIn" : ""}`}
            fadeinfrom="X"
            fadedistance="20"
            delay={1000}
          >
            <ContentCounter.CardPane>
              <ContentCounter.CardIcon className="iconfont icon-users" />
              <ContentCounter.CardNumber>2K+</ContentCounter.CardNumber>
              <ContentCounter.CardName>Skillsme Users</ContentCounter.CardName>
            </ContentCounter.CardPane>
            <ContentCounter.CardPane>
              <ContentCounter.CardIcon className="iconfont icon-company" />
              <ContentCounter.CardNumber>10K+</ContentCounter.CardNumber>
              <ContentCounter.CardName>Companies</ContentCounter.CardName>
            </ContentCounter.CardPane>
          </ContentCounter.Card>
        </ContentCounter.TextAndCardWrapper>
      </ContentCounter>
    </section>
  );
}
