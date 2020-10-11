import React, {useState} from "react";
import { UploadAvatar } from "../Components/Compound Components";

function UploadAvatarContainer() {
  const [tabBorderOnLeft, setTabBorderOnLeft] = useState(true);

  return (
    <UploadAvatar>
      <UploadAvatar.Frame>
        <UploadAvatar.TextGroup>
          <UploadAvatar.Title>Upload a Profile Image</UploadAvatar.Title>
          <UploadAvatar.Text>
            Note that You have successfully signed up.
          </UploadAvatar.Text>
        </UploadAvatar.TextGroup>

        <UploadAvatar.AvatarDisplay />
        <UploadAvatar.PanelContainer>
          <UploadAvatar.TabsWrapper tabBorderOnLeft={tabBorderOnLeft}>
            <UploadAvatar.Tab onClick={() => {setTabBorderOnLeft(true)}}>
              Upload a photo
            </UploadAvatar.Tab>
            <UploadAvatar.Tab onClick={() => {
              setTabBorderOnLeft(false)}}>Customize Avatar</UploadAvatar.Tab>
          </UploadAvatar.TabsWrapper>
          <UploadAvatar.Group style={{ placeItems: "center" }}>
            <UploadAvatar.FileInputLabel htmlFor="avatarInput">
              <span className="iconfont icon-round-add_photo_alte" />
              Upload Image
            </UploadAvatar.FileInputLabel>
            <UploadAvatar.FileInput
              id="avatarInput"
              name="avatar"
              accept="image/png, image/jpeg"
            ></UploadAvatar.FileInput>
          </UploadAvatar.Group>
        </UploadAvatar.PanelContainer>

        <UploadAvatar.UploadBtn >Next</UploadAvatar.UploadBtn>
      </UploadAvatar.Frame>
    </UploadAvatar>
  );
}

export default UploadAvatarContainer;
