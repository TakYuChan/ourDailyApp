import axios from "axios";

export const addAppToCartBackEnd = async (appId) => {
    const res = await axios({
        method: "PATCH",
        url: `${process.env.REACT_APP_URL}/applications/${appId}/addToCart`,
        withCredentials: true,
    })
    return res;
}

export const getCartApps = async() => {
    const res = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_URL}/users/getAppInCart`,
        withCredentials: true,
    })
    return res;
}

export const deleteAppFromCart = async(appId) => {
    const res = await axios({
        method: "DELETE",
        url: `${process.env.REACT_APP_URL}/applications/${appId}/deleteFromCart`,
        withCredentials: true,
    })

    console.log(res);
    return res;
}