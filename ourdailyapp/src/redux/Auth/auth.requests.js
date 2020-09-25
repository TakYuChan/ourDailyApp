import axios from "axios";

export const signUpUser = async (signUpDetails) => {
  await axios.post(`${process.env.REACT_APP_URL}/users/signup`, {
    ...signUpDetails,
  });
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
