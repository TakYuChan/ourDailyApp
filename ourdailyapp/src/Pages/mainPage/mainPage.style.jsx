import styled, { keyframes } from "styled-components";

const S = {};

// Animation
const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// ==================== Container ====================

S.MainPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow: hidden;

  position: relative;
`;

// ======================= Logo ===========================
S.LogoWrapper = styled.div`
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
  width: 12em;
  margin-top: 1rem;
  margin-bottom: 1rem;

  animation: ${appear} 250ms ease-in-out;
`;

export default S;
