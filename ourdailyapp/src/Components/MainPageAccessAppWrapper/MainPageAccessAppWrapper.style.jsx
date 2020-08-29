import styled from "styled-components";

const S = {};

// Animation
// const appear = keyframes`
//   from {
//     transform: scale(.5);
//   },
//   to {
//     transform: scale(1);
//   }
// `;

// ========== Container =========

S.ApplicationsContainer = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, 0);
  display: grid;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;

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
