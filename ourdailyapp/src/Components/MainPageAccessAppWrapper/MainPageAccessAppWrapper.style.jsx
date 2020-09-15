import styled from "styled-components";

const S = {};

// ========== Container =========

S.MainPageAccessAppWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;

  --app-size: 120px;

  justify-content: center;

  grid-template-columns: repeat(auto-fit, var(--app-size));
  grid-auto-rows: var(--app-size);
  row-gap: 1rem;

  @media screen and (max-width: 810px) {
    --app-size: 100px;
  }
`;

export default S;
