export function displayNameLengthFilter(displayName, maxLength) {
  if (displayName !== null) {
    try {
      let userName = null;

      if (displayName) {
        if (displayName.length > maxLength) {
          userName = displayName.substr(0, maxLength);
          userName += "...";
        } else {
          userName = displayName;
        }
        return userName;
      } else {
        console.log("no current user");
        return null;
      }
    } catch (error) {
      console.log("Header Display Name filter Error", error.message);
    }
  }
  return;
}
