export function displayNameLengthFilter(currentUser) {
  try {
    let userName = null;

    if (currentUser) {
      if (currentUser.displayName.length > 24) {
        userName = currentUser.displayName.substr(0, 24);
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
