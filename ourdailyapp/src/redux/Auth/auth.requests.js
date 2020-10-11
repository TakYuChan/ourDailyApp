import axios from "axios";
// import Cookies from "universal-cookie";

export const signUpUser = async (signUpDetails) => {
  const res = await axios.post(`${process.env.REACT_APP_URL}/users/signup`, {
    ...signUpDetails,
});

// const cookies = new Cookies();
// cookies.set('jwt', res.data.token, { path: '/' });


  console.log({res});
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
export const updateUserInfo = async(userDetails) => {
  const backEndResponse = await axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_URL}/users/updateMe`,
    data: {
      ...userDetails,
    },
  })

  return backEndResponse;
}
