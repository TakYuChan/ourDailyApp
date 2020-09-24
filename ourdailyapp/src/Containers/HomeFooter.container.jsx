import React from "react";
import { Footer } from "../Components/Compound Components";

const HomeFooterContainer = () => {
  return (
    <>
      <Footer style={{ padding: "106px 25px 90px" }}>
        <Footer.Container>
          <Footer.ToolsWrapper>
            <Footer.DecoSpan />
            <Footer.Logo>
              <img
                src="/images/assets/GitHub_Logo_White.png"
                alt="github logo"
              />
            </Footer.Logo>
            <Footer.Logo>
              <img src="/images/assets/react_Logo.png" alt="react logo" />
            </Footer.Logo>
            <Footer.Logo>
              <img src="/images/assets/nodejs_Logo.png" alt="nodejs logo" />
            </Footer.Logo>
            <Footer.Logo>
              <img src="/images/assets/firebase_Logo.png" alt="firebase logo" />
            </Footer.Logo>
            <Footer.Logo>
              <img src="/images/assets/mongodb_Logo.png" alt="mongodb logo" />
            </Footer.Logo>
          </Footer.ToolsWrapper>

          <Footer.Row>
            <Footer.Column>
              <Footer.ColumnTitle>Social Media</Footer.ColumnTitle>
              <Footer.Group>
                <Footer.LogoSpan className="iconfont icon-github"></Footer.LogoSpan>
                <Footer.LogoSpan className="iconfont icon-linkedin"></Footer.LogoSpan>
                <Footer.LogoSpan className="iconfont icon-facebook"></Footer.LogoSpan>
              </Footer.Group>
            </Footer.Column>
            <Footer.Column>
              <Footer.ColumnTitle>About Me</Footer.ColumnTitle>
              <Footer.Group
                style={{ flexDirection: "column", alignItems: "center" }}
              >
                <Footer.Link>Resume</Footer.Link>
                <Footer.Link>Cover Letter</Footer.Link>
                <Footer.Link></Footer.Link>
              </Footer.Group>
            </Footer.Column>
          </Footer.Row>
        </Footer.Container>
      </Footer>
    </>
  );
};

export default HomeFooterContainer;
