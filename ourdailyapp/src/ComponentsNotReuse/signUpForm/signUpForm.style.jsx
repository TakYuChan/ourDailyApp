import styled from "styled-components";

import { Button } from "react-bootstrap";

const S = {};

S.Button = styled(Button)`
  font-size: clamp(0.8rem, 1vw, 1rem);
`;

S.Spinner = styled.div`
  display: inline-block;
  font-size: clamp(0.8rem, 1vw, 1rem);
  width: 1em;
  height: 1em;
  border: 1px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 0.8s linear infinite;
  margin-left: 0.4em;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export default S;
