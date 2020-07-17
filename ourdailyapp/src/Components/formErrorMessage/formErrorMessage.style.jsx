import styled from "styled-components";
import { Form } from "react-bootstrap";

const S = {};

S.FormText = styled(Form.Text)`
  color: red;
  font-size: clamp(0.7rem, 1vw, 1rem);
`;

export default S;
