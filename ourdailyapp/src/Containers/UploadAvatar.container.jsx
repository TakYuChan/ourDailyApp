import React from "react";
import { UploadAvatar } from "../Components/Compound Components";

function UploadAvatarContainer() {
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
          <UploadAvatar.TabsWrapper>
            <UploadAvatar.Tab style={{ borderBottom: "2px solid #0059A6" }}>
              Upload a photo
            </UploadAvatar.Tab>
            <UploadAvatar.Tab>Customize Avatar</UploadAvatar.Tab>
          </UploadAvatar.TabsWrapper>
          <UploadAvatar.Group style={{ placeItems: "center" }}>
            <UploadAvatar.FileInputLabel for="avatarInput">
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

        {/* <UploadAvatar.Group>
          <UploadAvatar.FileInput
            id="avatarInput"
            name="avatar"
            accept="image/png, image/jpeg"
          ></UploadAvatar.FileInput>
        </UploadAvatar.Group> */}
      </UploadAvatar.Frame>
    </UploadAvatar>
  );
}

export default UploadAvatarContainer;
