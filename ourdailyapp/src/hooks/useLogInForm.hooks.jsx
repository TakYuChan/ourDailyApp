// import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function useLogInForm() {
  console.log("useLogInForm called!");

  const logInAlertObj = useSelector((state) => state.auth.logInAlert);
  const clickedAlertSvg = useSelector(
    (state) => state.logInForm.clickedAlertSvg
  );

  return { logInAlertObj, clickedAlertSvg };
}
