import styled from "styled-components";
import { Modal } from "react-bootstrap";

const S = {};

S.PageContainer = styled.div`
  min-height: 250px;
  display: grid;
  place-items: center;
`;

S.ModalTitle = styled(Modal.Title)`
  font-size: clamp(1.2rem, 1.4vw, 1.4rem);
`;

S.CongraText = styled.span`
  color: steelblue;
  width: 80%;
  font-size: 1.4rem;
`;

export default S;
