import React from "react";
import { WebsiteIntroVideo } from "../Components/Compound Components";
import { Typography } from "../Components/Compound Components";

export default function WebSiteIntroVideoContainer() {
  return (
    <WebsiteIntroVideo
      className="gridCenterContent"
      style={{ padding: "0 25px" }}
    >
      <WebsiteIntroVideo.Container
        style={{
          gridColumn: "2",
        }}
      >
        <WebsiteIntroVideo.PreviewVideoFrame>
          <WebsiteIntroVideo.PreviewVideoImg src="/images/assets/introVideoPreview.png" />
          <WebsiteIntroVideo.PlayVideoBtn />
        </WebsiteIntroVideo.PreviewVideoFrame>

        <WebsiteIntroVideo.TextAndBtnWrapper>
          <WebsiteIntroVideo.Title>
            We let coders land their dream jobs without a resume
          </WebsiteIntroVideo.Title>
          <WebsiteIntroVideo.SignUpBtn>Sign Up Now</WebsiteIntroVideo.SignUpBtn>
        </WebsiteIntroVideo.TextAndBtnWrapper>
      </WebsiteIntroVideo.Container>
    </WebsiteIntroVideo>
  );
}
