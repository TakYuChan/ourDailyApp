import styled from "styled-components";

import Logo from "../../Components/logo/logo.component";

const S = {};

S.MainPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow: hidden;

  position: relative;
`;

S.Logo = styled(Logo)`
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
  width: 12em;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export default S;
