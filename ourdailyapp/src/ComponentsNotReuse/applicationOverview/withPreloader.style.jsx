import styled, {keyframes} from "styled-components";

const S = {};

const animate = keyframes`
from {transition:none;}
to {background-color:#f6f7f8;
}
`;

S.Container = styled.div`
width: 200px;
height: 50px;
background-color: #CCC;
animation-name: ${animate}; 
animation-duration: 2s; 
animation-iteration-count: infinite;
animation-timing-function: linear;
`


export default S;