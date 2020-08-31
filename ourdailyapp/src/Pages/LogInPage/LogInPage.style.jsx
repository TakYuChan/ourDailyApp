import styled from "styled-components";
import { rgba } from "polished";

import bg from "../../assets/bg/bgJpg.jpg";

const S = {};

S.LogInPageHazyBg = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bg}) no-repeat center center fixed;
  background-size: cover;
  filter: blur(18px);
  // overflow: hidden;
`;

S.LogInPageContent = styled.div`
  overflow-y: auto;
  width: 85%;
  height: 85%;

  border-radius: 20px;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${bg});
  background-image: ${rgba("#000000", 0.5)};
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  font-size: clamp(0.8rem, 1.8vw, 1.5rem);
  grid-template-columns: 1fr 3em 10em 3em 1fr;
  grid-template-rows: 12em 5em;

  row-gap: 1.7em;
`;

// ============= Logo ==============
S.LogoWrapper = styled.div`
  grid-column: 3;
  align-self: flex-end;

  & img {
    object-fit: contain;
  }
`;

S.LogInFormWrapper = styled.div`
  grid-column: 2 / 5;
  grid-row: 2;
`;

export default S;
