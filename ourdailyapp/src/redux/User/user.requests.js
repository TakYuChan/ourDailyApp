import axios from "axios";

//userDetails: avatar: string, name: string, email: string, password: string
export const updateUserInfo = async(formData) => {

    return axios
    .patch("http://localhost:5000/api/v1/users/updateMe", formData, {withCredentials: true})
    .then(res => res.data.data.user.photo)
    .catch(err => console.error(err));
}