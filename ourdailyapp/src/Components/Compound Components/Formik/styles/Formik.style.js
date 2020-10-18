import styled from "styled-components";
import {Button} from "@material-ui/core";

const S = {};

S.FormikForm = styled.form`

`;

S.FormikInput = styled.input``;

S.FormikLabel = styled.label``;

S.FormikSubmitBtn = styled(Button)``;

S.AvatarContainer = styled.div`
    --size: 6rem;
    height: var(--size);
    width: var(--size);
    border-radius: 100%;

    position: relative;
`;

S.AvatarContainerDeco = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background: rgba(0, 0, 0, .3);
border-radius: inherit;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 0.8rem;
color: white;
`;

S.UploadIcon = styled.span`
color: white;
font-size: 1.4rem;
`;

S.Avatar = styled.img`
width: 100%;
object-fit: cover;
border-radius: 100%;
`;

S.UploadAvatarLabel = styled.label`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background: 0;
border-radius: inherit;
cursor: pointer;
display: block;
`;


export default S;