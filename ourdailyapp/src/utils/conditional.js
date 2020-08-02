export const renderProfilePicture = (currentUser) => {
  // User logged in
  if (currentUser !== undefined && currentUser !== null) {
    // IF user has setted the picture
    return currentUser.photoURL !== null
      ? currentUser.photoURL
      : // Otherwise we provide him a default picture
        "/images/assets/userProfilePictures/default.png";
  }

  // User hasn't logged in
  else {
    return null;
  }
};
