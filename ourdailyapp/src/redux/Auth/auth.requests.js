import axios from "axios";

export const signUpUser = async (signUpDetails) => {
    await axios.post(`${process.env.REACT_APP_URL}/users/signup`, {
    ...signUpDetails
    });
}