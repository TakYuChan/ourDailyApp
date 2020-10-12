import axios from "axios";

//userDetails: avatar: string, name: string, email: string, password: string
export const updateUserInfo = async(formData) => {

    axios
    .patch("http://localhost:5000/api/v1/users/updateMe", formData, {withCredentials: true})
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
}