import React from "react";
import bg from "../assets/images/uploadAvatarPage/male.png"
import {Formik, Notification, UploadAvatar} from "../Components/Compound Components";
import {UploadAvatarProvider,} from "../context/uploadAvatar.context";
import {useSelector} from "react-redux";
import {useFormik} from "formik";


const ProfileFormContainer = () => {

    const {name} = useSelector(state => state.auth_P.user);
    const {userAvatar} = useSelector(state => state.auth_P.userAvatar);

    const formik = useFormik({
        initialValues: {
            name: "",
        }
    })

    return <UploadAvatarProvider>
        <Formik className="border-2">
            <Formik.AvatarContainer src={bg}/>
            <Formik.Label htmlFor="name">Name</Formik.Label>
            <Formik.Input type="text" id="name" name="name" {...formik.getFieldProps("name")}></Formik.Input>
            <Formik.SubmitBtn type="submit" variant="contained" color="primary" formDetails={formik.values}>Save</Formik.SubmitBtn>
        </Formik>
        <UploadAvatar.CropImageContainer/>
        {/* {Object.keys(formik.errors).length !== 0 && <Notification>{formik.errors.general || formik.errors.name}</Notification>} */}
        </UploadAvatarProvider>
        
}

export default ProfileFormContainer;