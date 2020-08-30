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

  overflow: hidden;

  position: relative;
`;

// ======================= profile Pic and name ===========================
S.picNameWrapper = styled.div`
  position: absolute;
  top: 20%;

  animation: ${appear} 350ms;

  text-align: center;
`;

S.ImgWrapper = styled.div`
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
  position: relative;
  --size: 10em;
  width: var(--size);
  height: var(--size);
  border: 5px solid white;

  border-radius: 100%;
  background-position: center;
  background-size: cover;

  margin-bottom: 3vh;

  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1));
`;

S.Img = styled.img`
  object-fit: cover;
  border-radius: 100%;

  position: absolute;
  top: 0;
  left: 0;

  cursor: pointer;

  transition: filter 250ms ease-in-out;

  &:hover {
    filter: blur(3px) brightness(0.5);
  }
  &:hover + .styled_editProfileSpan {
    opacity: 1;
    transform: translate(-50%, -20%);
  }
`;

S.EditProfileText = styled.span`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 10%);
  font-size: 0.7em;
  font-weight: 300;
  opacity: 0;
  pointer-events: none;

  transition: opacity 250ms ease-in-out, transform 250ms;

  color: ${(props) => props.theme.mainPage.editProfileText};
`;

S.username = styled.h2`
  color: ${(props) => props.theme.mainPage.username};
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
`;

export default S;
