import React from "react";

import { connect } from "react-redux";

import GoogleLogin from "react-google-login";

import { ReactComponent as GoogleSvg } from "../../assets/svg/google.svg";

import { googleAuthorizationSuccess } from "../../redux/Auth/auth.actions";

const WithGoogleAuth = ({
  WrappedBtnComponent,
  children,
  onAuthorizationSuccess,
  ...otherProps
}) => {
  //   const responseSuccess = async (response) => {
  //     const backEndResponse = await axios({
  //       method: "POST",
  //       url: `http://localhost:5000/api/v1/users/googlelogin`,
  //       data: {
  //         tokenId: response.tokenId,
  //       },
  //     });
  //     console.log("Google Log In success", backEndResponse);
  //   };

  const responseError = async (response) => {};

  return (
    <GoogleLogin
      clientId="805613129868-l5s4bkonv7tdfec7f5nqa1l6rp8rtdin.apps.googleusercontent.com"
      render={(renderProps) => (
        <WrappedBtnComponent
          SvgComponent={GoogleSvg}
          {...otherProps}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          {children}
        </WrappedBtnComponent>
      )}
      onSuccess={onAuthorizationSuccess}
      onFailure={responseError}
      cookiePolicy={"single_host_origin"}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAuthorizationSuccess: (response) =>
    dispatch(googleAuthorizationSuccess(response)),
});

export default connect(null, mapDispatchToProps)(WithGoogleAuth);
