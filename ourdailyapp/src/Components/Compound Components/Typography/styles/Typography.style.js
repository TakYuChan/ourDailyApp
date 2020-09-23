import styled, { css } from "styled-components";

const fontStyle = css`
  color: white;
`;

const S = {};

S.SectionText = styled.p`
  color: rgba(256, 256, 256, 0.5);
  font-size: 0.9rem;
  line-height: 1.5rem;
`;
S.sectionTitle = styled.h1`
  ${fontStyle}
  font-size: 1.4rem;
  margin-bottom: 0.8rem;

  @media screen and (min-width: 550px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 1180px) {
    font-size: 2.5rem;
  }
`;
S.sectionSubtitle = styled.h2`
  color: #849dc5;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
`;

export default S;
