import React from "react";
import { AboutMe } from "../Components/Compound Components/";
import { Typography } from "../Components/Compound Components/";
import { Decoration } from "../Components/Compound Components/";

const AboutMeContainer = () => {
  return (
    <div style={{ position: "relative" }}>
      <AboutMe
        className="gridCenterContent"
        style={{ padding: "106px 25px 90px" }}
      >
        <AboutMe.Container style={{ gridColumn: "2", marginTop: "80px" }}>
          <AboutMe.TextWrapper>
            <Typography.SectionSubtitle>
              Find a Job worldwide without a resume.
            </Typography.SectionSubtitle>
            <Typography.SectionTitle>
              Get referred to over 10K
            </Typography.SectionTitle>
            <AboutMe.Text>
              With Skillsme, your projects has the potential to reach over
              10,000 companies worldwide that is interested in recruiting tech
              talents like you. Validate your projects with ratings only on
              Skillsme.
            </AboutMe.Text>
          </AboutMe.TextWrapper>
          <AboutMe.Card>
            <AboutMe.WorkingManImg />
          </AboutMe.Card>
        </AboutMe.Container>
      </AboutMe>
      <Decoration.EditorialDivider bottomWaveColor={"#303030"} />
    </div>
  );
};

export default AboutMeContainer;
