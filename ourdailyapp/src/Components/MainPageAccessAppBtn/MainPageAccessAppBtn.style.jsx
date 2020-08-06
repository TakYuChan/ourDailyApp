import styled, { keyframes } from "styled-components";

const S = {};

// Animation
const appear = keyframes`
0% {
  transform: scale(.8);
  opacity: 0;
}
100% {
  transform: scale(1);
  opacity: 1;
}
`;

// ==================== Container ====================

S.ApplicationItemContainer = styled.div`
  cursor: pointer;

  display: grid;
  place-items: center;
  font-family: "Roboto", sans-serif;

  font-size: 0.8rem;
  font-weight: 700;

  height: 100%;
  width: 100%;

  &:hover {
    background: ${(props) => props.theme.mainPage.app_Hover};
    .link-text {
      text-decoration: none;
    }
  }

  animation: 600ms ${appear} backwards ${(props) => props.stagger}s;
`;

S.Image = styled.img`
  --img-size: 50px;
  @media screen and (min-width: 810px) {
    --img-size: 60px;
  }
  width: 100%;
  border-radius: 100%;
  object-fit: cover;
  height: var(--img-size);
  width: var(--img-size);

  .border {
    border: 1px solid var(--blue);
  }
`;

S.AppLinkText = styled.span`
  color: ${(props) => props.theme.mainPage.appLinkText};
  text-decoration: none;
`;

export default S;