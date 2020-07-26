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

export default S;
