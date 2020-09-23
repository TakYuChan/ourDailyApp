import styled from "styled-components";
const S = {};

S.Container = styled.div``;

S.DividerDivSkew = styled.div`
  height: 5rem;
  background: ${({ direction, firstColor, secodColor }) =>
    `linear-gradient(${direction}, ${firstColor} 49%, ${secodColor} 50%)`};
`;

export default S;
