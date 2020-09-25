import React from "react";
import { useDispatch } from "react-redux";
import { WebsiteIntroVideo } from "../Components/Compound Components";
import { Player } from "../Components/Compound Components";

import { changeAuthPage } from "../redux/AuthPage/AuthPage.actions";
import useOnScreen from "../hooks/useShowScreen.hooks";

export default function WebSiteIntroVideoContainer() {
  const dispatch = useDispatch();
  const [setNode, startAnimate] = useOnScreen({ threshold: 0.5 });

  return (
    <div ref={setNode}>
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
            <Player>
              <Player.PlayVideoBtn />
              <Player.Video />
            </Player>
          </WebsiteIntroVideo.PreviewVideoFrame>

          <WebsiteIntroVideo.TextAndBtnWrapper>
            <WebsiteIntroVideo.Title
              className={`${startAnimate ? "fadeIn" : ""}`}
              fadeinfrom="X"
              fadedistance="20"
            >
              We let coders land their dream jobs without a resume
            </WebsiteIntroVideo.Title>
            <WebsiteIntroVideo.SignUpBtn
              to="/auth"
              onClick={() => {
                dispatch(changeAuthPage("signup"));
              }}
              className={`${startAnimate ? "fadeIn" : ""}`}
              fadeinfrom="Y"
              fadedistance="20"
              delay={600}
            >
              Sign Up Now
            </WebsiteIntroVideo.SignUpBtn>
          </WebsiteIntroVideo.TextAndBtnWrapper>
        </WebsiteIntroVideo.Container>
      </WebsiteIntroVideo>
    </div>
  );
}
