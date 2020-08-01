import styled from "styled-components";

import { Dropdown } from "react-bootstrap";

const S = {};

//=========== Profile icon -> Drop Down ===========
S.DropDownToggle = styled(Dropdown.Toggle)`
  background: ${(props) => `url(${props.imgSrc})`};
  background-size: cover;
  background-position: center;
`;

export default S;
