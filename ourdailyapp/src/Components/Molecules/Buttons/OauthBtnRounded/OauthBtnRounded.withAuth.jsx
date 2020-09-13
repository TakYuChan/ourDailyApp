import React from "react";
import WithGoogleAuth from "../../../../HOC/WithGoogleAuth/WithGoogleAuth.component";
import OauthBtnRounded from "./OauthBtnRounded.component";

const OauthBtnWithAuth = ({ provider, ...otherProps }) => {
  return (
    provider === "google" && (
      <WithGoogleAuth WrappedBtnComponent={OauthBtnRounded} {...otherProps}>
        Google
      </WithGoogleAuth>
    )
  );
};

export default OauthBtnWithAuth;
