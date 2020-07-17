import styled from "styled-components";

import { Button } from "react-bootstrap";

const S = {};

S.Button = styled(Button)`
  font-size: clamp(0.8rem, 1vw, 1rem);
`;

export default S;
