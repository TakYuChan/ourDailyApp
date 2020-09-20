import React, { useState } from "react";
import { Header } from "../Components/Compound Components/";
import { useMediaQuery } from "react-responsive";
import S from "../Components/MainPageAccessAppBtn/MainPageAccessAppBtn.style";

const HomeHeader = () => {
  const mq_narrowScreen = useMediaQuery({ query: "(max-device-width: 850px" });

  const [dropDownHidden, toggleDropDownHidden] = useState(true);

  return (
    <Header src="/images/assets/homeBg.png">
      <Header.Frame>
        <Header.Group
          style={{
            gridColumn: "2",
            maxWidth: "1200px",
            padding: "15px 10px 15px",
          }}
        >
          <Header.Group style={{ minWidth: "540px" }}>
            <Header.Logo src="/images/assets/logo_white.png" />
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
          </Header.Group>
          <Header.Group
            style={{ flexBasis: "55%", justifyContent: "flex-end" }}
          >
            {mq_narrowScreen ? (
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
      </Header.Frame>
    </Header>
  );
};

export default HomeHeader;
