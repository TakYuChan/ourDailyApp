import styled from "styled-components";
import { Modal } from "react-bootstrap";

const S = {};

S.IconGoogle = styled.i`
  margin-right: 0.4rem;
`;

S.ModalFooter = styled(Modal.Footer)`
  @media screen and (max-width: 450px) {
    display: flex;
    justify-content: center;
  }
`;

export default S;
