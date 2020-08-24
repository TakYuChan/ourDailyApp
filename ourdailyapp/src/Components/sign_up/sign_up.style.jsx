import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";

const S = {};

S.ModalTitle = styled(Modal.Title)`
  font-size: clamp(1.2rem, 1.4vw, 1.4rem);
`;

S.Button = styled(Button)`
  font-size: clamp(0.8rem, 1vw, 1rem);
`;

export default S;
