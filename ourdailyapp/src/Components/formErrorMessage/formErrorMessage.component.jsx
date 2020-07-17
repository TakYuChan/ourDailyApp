import React from "react";
// import "./formErrorMessage.style.scss";
import S from "./formErrorMessage.style";

const FormErrorMessage = ({ errorObj }) => {
  let errorTextArray = [];

  // ========= Display Name ============
  if (errorObj.shortDisplayName) {
    errorTextArray.push("The length of display name must between 1 to 30");
  }
  if (errorObj.longDisplayName) {
    errorTextArray.push("The length of display name must between 1 to 30");
  }
  if (errorObj.consistentBlankSpace) {
    errorTextArray.push(
      "Consistent blank spaces is not allowed in display name"
    );
  }
  if (errorObj.blankSpaceAtFrontEnd) {
    errorTextArray.push(
      "Blank Space can not be put in the front or in the end of the name"
    );
  }
  // ========= Password ===========
  if (errorObj.passwordNotMatch) {
    errorTextArray.push("Your password doesn't match the confirm password");
  }
  if (errorObj.passwordCapitalLetter) {
    errorTextArray.push(
      "Your password must contain at least one captical letter"
    );
  }
  if (errorObj.passwordSpecialCharacter) {
    errorTextArray.push(
      "Your password must contain at least one special letter Example: &%$#"
    );
  }
  if (errorObj.shortPassword) {
    errorTextArray.push("Your password must have a minimum length of 8");
  }
  console.log("errorTextArray", errorTextArray.length);
  return errorTextArray.map((errorText, index) => {
    return (
      <S.FormText key={index} className="form-error">
        {errorText}
      </S.FormText>
    );
  });
};

export default FormErrorMessage;
