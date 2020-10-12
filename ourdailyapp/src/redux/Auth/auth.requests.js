import axios from "axios";
// import Cookies from "universal-cookie";

export const signUpUser = async (signUpDetails) => {
  const res = await axios({
    method: "POST",
    url: `${process.env.REACT_APP_URL}/users/signup`,
    data: {
      ...signUpDetails,
    },
    withCredentials: true,
  })
};

export const logInUser = async (logInDetails) => {
  const response = await axios.post(
    `${process.env.REACT_APP_URL}/users/login`,
    {
      ...logInDetails,
    }
  );

  return response;
};

export const checkAuthInfoFromDB = async (authorizeServerRes, url) => {
  const backEndResponse = await axios({
    method: "POST",
    url,
    data: {
      tokenId: authorizeServerRes.tokenId,
    },
  });

  return backEndResponse;
};

//userDetails: avatar: string, name: string, email: string, password: string
export const updateUserInfo = async(formData) => {

  axios
  .patch("http://localhost:5000/api/v1/users/updateMe", formData, {withCredentials: true})
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
}
