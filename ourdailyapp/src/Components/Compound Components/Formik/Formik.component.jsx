import React, { useContext } from "react";
import S from "./styles/Formik.style";
import DatePicker from "react-datepicker";
import {UploadAvatarContext} from "../../../context/uploadAvatar.context";
import {updateUserDetailsStart} from "../../../redux/User/user.actions";
import {useDispatch} from "react-redux";


export default function Formik({children, ...restProps}) {

    
    return <S.FormikForm {...restProps}>{children}</S.FormikForm>
}

Formik.Input = function FormikInput({children, name, ...restProps}) {

    return <S.FormikInput {...restProps}>{children}</S.FormikInput>
}

Formik.Label = function FormikLabel({children, ...restProps}) {
    return <S.FormikLabel {...restProps}>{children}</S.FormikLabel>
}

Formik.SubmitBtn = function FormikSubmitBtn({formDetails, children, ...restProps}) {

    const dispatch = useDispatch();

    const {file} = useContext(UploadAvatarContext);

    const {name} = formDetails;

    const onSubmit = (e) => {
       e.preventDefault();
       const formData = new FormData();

       formData.append('avatar', file);
       formData.append('name', name);
       console.log({name})
        dispatch(updateUserDetailsStart(formData));
    }


    return <S.FormikSubmitBtn {...restProps} onClick={onSubmit}>{children}</S.FormikSubmitBtn>
}

Formik.AvatarContainer = function AvatarContainer({src, ...restProps}) {

    const {getInputProps, cropData} = useContext(UploadAvatarContext);

    return  <S.AvatarContainer {...restProps}>
                <S.Avatar src={cropData || src}/>
                <S.AvatarContainerDeco>
                    <S.UploadIcon className="iconfont icon-upload"/>Upload
                </S.AvatarContainerDeco>
                <S.UploadAvatarLabel htmlFor="avatar"></S.UploadAvatarLabel>
                <S.FormikInput id="avatar" name="avatar" type="file" className="hidden" {...getInputProps()} ></S.FormikInput>
            </S.AvatarContainer>
}