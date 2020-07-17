// ================== Form Input Inspection ====================

export function signUpFormErrorCheck(
  displayName,
  email,
  password,
  confirmPassword
) {
  let errorObj = {};

  // 1. Check if inputs are invalid
  //-- displayName --
  if (displayName.length < 1) {
    errorObj["displayNameError"] = {
      ...errorObj["displayNameError"],
      shortDisplayName: true,
    };
  }

  if (displayName.length > 30) {
    errorObj["displayNameError"] = {
      ...errorObj["displayNameError"],
      longDisplayName: true,
    };
  }

  if (RegExp("\\s\\s+").test(displayName)) {
    errorObj["displayNameError"] = {
      ...errorObj["displayNameError"],
      consistentBlankSpace: true,
    };
  }

  if (RegExp("(^\\s|\\s$)").test(displayName)) {
    errorObj["displayNameError"] = {
      ...errorObj["displayNameError"],
      blankSpaceAtFrontEnd: true,
    };
  }
  if (password !== confirmPassword) {
    //-- password --
    errorObj["passwordError"] = {
      ...errorObj["passwordError"],
      passwordNotMatch: true,
    };
  }

  if (!RegExp("[A-Z]").test(password)) {
    errorObj["passwordError"] = {
      ...errorObj["passwordError"],
      passwordCapitalLetter: true,
    };
  }

  if (!RegExp("\\W").test(password)) {
    errorObj["passwordError"] = {
      ...errorObj["passwordError"],
      passwordSpecialCharacter: true,
    };
  }
  if (password.length < 8) {
    errorObj["passwordError"] = {
      ...errorObj["passwordError"],
      shortPassword: true,
    };
  }

  return errorObj;
}
