import React from "react";
import WithGoogleAuth from "../../../../HOC/WithGoogleAuth/WithGoogleAuth.component";
import OauthBtn from "./OauthBtn.component";

const OauthBtnContainer = ({ provider, ...otherProps }) => {
  return (
    provider === "google" && (
      <WithGoogleAuth WrappedBtnComponent={OauthBtn} {...otherProps}>
        Google
      </WithGoogleAuth>
    )
  );
};

export default OauthBtnContainer;
