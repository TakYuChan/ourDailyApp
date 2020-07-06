import styled from "styled-components";

const S = {};

S.LogoWrapper = styled.div`
  width: 3rem;

  &#mainPage-logo-wrapper,
  & #mainPage-logo {
    font-size: clamp(0.8rem, 1.5vw, 1.5rem);
    width: 12em;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

S.LogoImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export default S;
