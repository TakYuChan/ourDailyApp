export function displayNameLengthFilter(currentUser, maxLength) {
  try {
    let userName = null;

    if (currentUser) {
      if (currentUser.displayName.length > maxLength) {
        userName = currentUser.displayName.substr(0, maxLength);
        userName += "...";
      } else {
        userName = currentUser.displayName;
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
