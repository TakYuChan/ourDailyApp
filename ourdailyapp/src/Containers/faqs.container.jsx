import React from "react";
import { Accordion } from "../Components/Compound Components";
import { Decoration } from "../Components/Compound Components";
import faqsData from "../fixtures/faqs.json";

export default function faqsContainer() {
  return (
    <>
      <Accordion>
        <Accordion.Title>Fequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {faqsData.map((item) => (
            <Accordion.Item key={item.id}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.BodyWrapper>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.BodyWrapper>
            </Accordion.Item>
          ))}
        </Accordion.Frame>

        <img src="/images/assets/accordionImg.png" alt="discussing" />
      </Accordion>
      <Decoration.DividerDivSkew
        direction={"to right bottom"}
        firstColor={"#303030"}
        secodColor={"#5e5e5e"}
      />
    </>
  );
}
