import { useState, useCallback } from "react";

export default function useSignInForm() {
  const [signUpDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    gender: null,
    birthday: null,
  });

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setSignUpDetails((prevSignUpDetails) => ({
      ...prevSignUpDetails,
      [name]: value,
    }));
  }, []);

  return {
    signUpDetails,
    handleInputChange,
  };
}
