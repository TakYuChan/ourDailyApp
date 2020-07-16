// ================== Form Input Inspection ====================

export function signUpForminputCheck(displayName, displayError) {
  // 2. Check if inputs are invalid
  //-- displayName --
  let error = false;
  if (displayName.length < 1) {
    displayError.shortDisplayName = true;
    error = true;
  } else {
    displayError.shortDisplayName = false;
  }

  if (displayName.length > 30) {
    displayError.longDisplayName = true;
    error = true;
  } else {
    displayError.longDisplayName = false;
  }

  //-- Final Check --
  if (error) {
    console.log("error is true");
    return true;
  } else {
    return false;
  }
}
