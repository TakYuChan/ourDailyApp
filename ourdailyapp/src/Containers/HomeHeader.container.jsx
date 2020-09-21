import React, { useState } from "react";
import { Header } from "../Components/Compound Components/";
import { useMediaQuery } from "react-responsive";

const HomeHeader = () => {
  const width_under_850 = useMediaQuery({ query: "(max-device-width: 850px" });
  const width_under_650 = useMediaQuery({ query: "(max-device-width: 650px" });

  const [dropDownHidden, toggleDropDownHidden] = useState(true);

  return (
    <Header src="/images/assets/homeBg.png">
      <Header.Frame>
        <Header.Group
          style={{
            gridColumn: "2",
            padding: "15px 25px 15px",
          }}
        >
          <Header.Group>
            <Header.Logo src="/images/assets/logo_white.png" />
            {width_under_850 ? null : (
              <>
                <Header.Link
                  activeStyle={{
                    color: "#849DC5",
                  }}
                  to="/"
                >
                  home
                </Header.Link>
                <Header.Link to="/aboutCreator">about me</Header.Link>
                <Header.Link to="/contact">contact</Header.Link>
              </>
            )}
          </Header.Group>
          <Header.Group
            style={{ flexBasis: "55%", justifyContent: "flex-end" }}
          >
            {width_under_850 ? (
              <Header.DropDownTogglerWrapper
                onClick={() => toggleDropDownHidden(!dropDownHidden)}
                className={dropDownHidden ? "" : "active"}
              >
                <Header.DropDownToggler />
              </Header.DropDownTogglerWrapper>
            ) : (
              <>
                <Header.Button>Log In</Header.Button>
                <Header.Button>Sign Up</Header.Button>
              </>
            )}
          </Header.Group>
          {/* ============ Drop Down Menu ============ */}
          <Header.DropDownMenu className={dropDownHidden ? "" : "active"}>
            <Header.DropDownItem>home</Header.DropDownItem>
            <Header.DropDownItem>about me</Header.DropDownItem>
            <Header.DropDownItem>contact</Header.DropDownItem>
            <Header.DropDownItem>Log In</Header.DropDownItem>
            <Header.DropDownItem>Sign Up</Header.DropDownItem>
          </Header.DropDownMenu>
        </Header.Group>

        {/* ============ Hero ============ */}

        <Header.HeroGroup
          style={{
            gridColumn: "2",
          }}
        >
          <Header.HeroTextWrapper>
            <Header.Title>Land A Coding Job with Skillsme Rating</Header.Title>
            <Header.Subtitle>Referral 10K+ Companies</Header.Subtitle>
            <Header.Text>
              Receive your Skillsme rating by completing real projects and get
              validated by the world's top 5% coders.
            </Header.Text>
            <Header.HeroButton>Get Started</Header.HeroButton>
          </Header.HeroTextWrapper>
          {!width_under_650 && (
            <Header.Group
              style={{
                flexBasis: "35%",
                position: "relative",
              }}
            >
              <Header.HeroImage
                src="/images/assets/hero.png"
                alt="a woman using mobile"
                className={`${width_under_850 ? "translucent" : ""}`}
              />
            </Header.Group>
          )}
        </Header.HeroGroup>
      </Header.Frame>
    </Header>
  );
};

export default HomeHeader;
