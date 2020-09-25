import React from "react";
import { AboutMe } from "../Components/Compound Components/";
import { Typography } from "../Components/Compound Components/";
import { Decoration } from "../Components/Compound Components/";

import useOnScreen from "../hooks/useShowScreen.hooks";

const AboutMeContainer = () => {
  const [setNode, startAnimate] = useOnScreen({ threshold: 0.2 });

  return (
    <div style={{ position: "relative" }} ref={setNode}>
      <AboutMe
        className="gridCenterContent"
        style={{ padding: "106px 25px 90px" }}
      >
        <AboutMe.Container style={{ gridColumn: "2", marginTop: "80px" }}>
          <AboutMe.TextWrapper>
            <Typography.SectionSubtitle
              startAnimate={startAnimate}
              fadeinfrom="Y"
              fadedistance="20"
              delay={400}
              style={{ opacity: 0 }}
            >
              Find a Job worldwide without a resume.
            </Typography.SectionSubtitle>
            <Typography.SectionTitle
              startAnimate={startAnimate}
              fadeinfrom="Y"
              fadedistance="20"
              delay={400}
              style={{ opacity: 0 }}
            >
              Get referred to over 10K
            </Typography.SectionTitle>
            <AboutMe.Text
              startAnimate={startAnimate}
              fadeinfrom="Y"
              fadedistance="20"
              delay={400}
              style={{ opacity: 0 }}
            >
              With Skillsme, your projects has the potential to reach over
              10,000 companies worldwide that is interested in recruiting tech
              talents like you. Validate your projects with ratings only on
              Skillsme.
            </AboutMe.Text>
          </AboutMe.TextWrapper>
          <AboutMe.Card
            startAnimate={startAnimate}
            fadeinfrom="Y"
            fadedistance="20"
            style={{ opacity: 0 }}
          >
            <AboutMe.WorkingManImg />
          </AboutMe.Card>
        </AboutMe.Container>
      </AboutMe>
      <Decoration.EditorialDivider bottomWaveColor={"#303030"} />
    </div>
  );
};

export default AboutMeContainer;
