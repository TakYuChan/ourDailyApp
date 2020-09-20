import styled from "styled-components";
import { NavLink } from "react-router-dom";

const S = {};

S.Background = styled.section`
  height: 100vh;
  width: 100vw;
  background: black;
  background: url(${({ src }) =>
      src ? `${src}` : "../images/misc/home-bg.jpg"})
    top left / cover no-repeat;
`;
S.Frame = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(400px, 1300px) 1fr;
`;
S.Group = styled.div`
  //   border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
S.Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;
S.Link = styled(NavLink)`
  text-transform: capitalize;
  color: #f8f8f8;
`;
S.Button = styled.button`
  background: 0;
  outline: 0;
  border: 2px solid white;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  padding: 0.5em 2em;
  margin-left: 2em;
  cursor: pointer;
`;

S.Title = styled.h1``;
S.Subtitle = styled.h2``;

S.DropDownTogglerWrapper = styled.div`
  width: 26px;
  height: 16px;
  display: grid;
  place-items: center;
  position: relative;
  cursor: pointer;

  &.active > span {
    & {
      height: 0;
    }

    &::before,
    &::after {
      opacity: 1;
    }

    &:before {
      transform: translateY(8px) rotate(225deg);
    }

    &:after {
      transform: translateY(-8px) rotate(-225deg);
    }
  }
`;

S.DropDownToggler = styled.span`
  height: 2px;
  width: 100%;
  background: #849dc5;
  transition: all 100ms ease-in;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: #849dc5;
    transition: all 200ms ease-in;
  }

  &::before {
    top: -1px;
  }

  &::after {
    bottom: -1px;
  }
`;

S.DropDownMenu = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: black;
  opacity: 0.5;
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

  transition: all 550ms ease-in-out;

  &.active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

S.ul = styled.ul`
  list-style: none;
  padding: 0;
`;

S.DropDownItem = styled.li`
  text-transform: capitalize;
  color: white;
  border-bottom: 1px solid #848484;
  padding: 1em 1em;
  cursor: pointer;

  position: relative;

  &:hover {
    color: #849dc5;
    // outline: 1px solid #f8f8f8;
    // background: #dbe1e8;
  }
`;

export default S;
