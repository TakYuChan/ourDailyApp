import styled from "styled-components";

import { Modal, Button } from "react-bootstrap";

const S = {};

S.InfoModal = styled(Modal)``;

S.ModalTitle = styled(Modal.Title)`
  font-size: clamp(1.2rem, 1.4vw, 1.4rem);
`;

S.ModalFooter = styled(Modal.Footer)`
  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: center;
  }
`;

S.Button = styled(Button)`
  font-size: clamp(0.8rem, 1vw, 1rem);
  display: flex;
  align-items: center;
`;

S.IconGoogle = styled.i`
  margin-right: 0.4rem;
  font-size: clamp(0.8rem, 1vw, 1rem);
`;

export default S;
