import React from "react";
import S from "./ImageFrame.style";

import PropTypes from "prop-types";

const ImageFrame = ({ src, halo, withExtraText }) => {
  return (
    <React.Fragment>
      <S.ImageFrame styled_halo={halo}>
        <S.Img src={src} />
        <S.EditProfileText className="styled_editProfileSpan">
          Edit Profile
        </S.EditProfileText>
      </S.ImageFrame>
      {withExtraText && <S.ExtraImgSpan>name</S.ExtraImgSpan>}
    </React.Fragment>
  );
};

ImageFrame.propTypes = {
  halo: PropTypes.bool,
  withExtraText: PropTypes.bool,
};

ImageFrame.defaultProps = {
  withExtraText: false,
  halo: false,
};

export default ImageFrame;
