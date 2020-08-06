import styled from "styled-components";

const S = {};

// =============== application overview + header ==================

S.ApplicationOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.IconApp = styled.i`
  font-size: clamp(1.4rem, 3.5vw, 2.5rem);
  font-weight: 700;
  margin-left: 0.2em;
`;

// =============== App store content main ==================
S.ShopContentContainer = styled.div`
  width: 100vw;
`;

export default S;
