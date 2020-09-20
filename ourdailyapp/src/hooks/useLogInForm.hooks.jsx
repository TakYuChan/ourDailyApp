import { useState } from "react";
import { useSelector } from "react-redux";

export default function useLogInForm() {
  console.log("useLogInForm called!");
  const [logInDetails, setLogInDetails] = useState({ email: "", password: "" });
  const [clickedAlertSvg, setClickedAlertSvg] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("handle");
    setLogInDetails((prevLogInDetails) => ({
      ...prevLogInDetails,
      [name]: value,
    }));
  };
  const logInAlertObj = useSelector((state) => state.auth.logInAlert);
  // const clickedAlertSvg = useSelector(
  //   (state) => state.logInForm.clickedAlertSvg
  // );

  return {
    logInAlertObj,
    clickedAlertSvg,
    setClickedAlertSvg,
    logInDetails,
    handleInputChange,
  };
}
