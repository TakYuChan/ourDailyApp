import React from "react";
// import Jumbotron from "../components/Compound Components/Jumbotron/Jumbotron.component";
import { Jumbotron } from "../Components/Compound Components";
import { Typography } from "../Components/Compound Components";
import jumboData from "../fixtures/jumbo.json";

export default function JumbotronContainer() {
  return (
    <>
      <Typography.SectionSubtitle
        style={{
          display: "block",
          textAlign: "center",
          marginBottom: "4rem",
        }}
      >
        View my other projects
      </Typography.SectionSubtitle>
      <Jumbotron.Container className="gridCenterContent homeSectionPadding">
        {jumboData.map((item) => (
          <Jumbotron
            className="Jumbotron"
            key={item.id}
            direction={item.direction}
            style={{
              gridColumn: "2",
              // padding: "15px 25px 15px",
              zIndex: "2",
              position: "relative",
            }}
          >
            <Jumbotron.TextPane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
              <Jumbotron.linkBtn>To Website</Jumbotron.linkBtn>
            </Jumbotron.TextPane>
            <Jumbotron.ImagePane>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.ImagePane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
      <Jumbotron.EndingSpan>And More...</Jumbotron.EndingSpan>
    </>
  );
}
