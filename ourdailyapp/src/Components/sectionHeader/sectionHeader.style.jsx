import styled from "styled-components";

const S = {};

// =================== selectPage === "shop" ======================
S.IconApp = styled.i`
  font-size: clamp(1.4rem, 3.5vw, 2.5rem);
  font-weight: 700;
  margin-left: 0.2em;
`;

// =================== selectPage === "applicationDetails" ======================
S.PrevLink = styled.span`
  cursor: pointer;
  font-size: 0.6em;
  padding: 0.2em 0.4em;
  &:hover {
    background: white;
    border-radius: 10px;
  }
`;

S.IconShop = styled.i`
  font-size: 1rem;
  margin-left: 0.2em;
`;

// =================== selectPage === "preloader" ======================
// S.AnimationWrapper = styled.div`
//   position: absolute;
//   bottom: 10%;
//   left: 8%;
// `;

// const jumpy = keyframes`
//   0% {
//     transform: translateY(0);
//   }

//   100% {
//     transform: translateY(-8px);
//   }
// `;

// S.AnimationDot = styled.span`
//   display: inline-block;
//   font-size: clamp(0.6rem, 1.4vw, 1.2rem);
//   width: 1em;
//   height: 1em;
//   background: var(--gray3);
//   margin-right: 5px;
//   border-radius: 100%;
//   // animation: ${jumpy} 1s infinite alternate;
//   --stagger: 100ms;

//   &.dot1 {
//     animation: ${jumpy} 1s infinite alternate;
//   }
//   &.dot2 {
//     animation: ${jumpy} 1s infinite alternate;
//     animation-delay: calc(1 * var(--stagger));
//   }
//   &.dot3 {
//     animation: ${jumpy} 1s infinite alternate;
//     animation-delay: calc(2 * var(--stagger));
//   }
// `;

export default S;
