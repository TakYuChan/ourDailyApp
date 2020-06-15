// ================== Form Input Inspection ====================

export function signUpForminputCheck(displayName, displayError) {
  // 2. Check if inputs are invalid
  //-- displayName --
  let errorQuantity = false;
  if (displayName.length < 1) {
    displayError.shortDisplayName = true;
    errorQuantity = true;
  } else {
    displayError.shortDisplayName = false;
  }

  if (displayName.length > 30) {
    displayError.longDisplayName = true;
    errorQuantity = true;
  } else {
    displayError.longDisplayName = false;
  }

  //-- Final Check --
  if (errorQuantity) {
    console.log("true");
    return true;
  } else {
    return false;
  }
}
