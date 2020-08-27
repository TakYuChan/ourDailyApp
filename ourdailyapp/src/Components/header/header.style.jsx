import styled from "styled-components";

import TooltipWrapper from "../TooltipWrapper/TooltipWrapper.component";
import ReactToolTip from "react-tooltip";
import { ReactComponent as NavIcon } from "../../assets/nav.svg";

import { rgba } from "polished";
const S = {};

/* ============================== Header ================================= */

S.HeaderContainer = styled.header`
  height: var(--nav-height);

  width: 100vw;

  position: relative;
  z-index: 10;
`;

S.HeaderNavContainer = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2vw;
  background: var(--clr-nav);
`;

/* ============================== Logo Wrapper ================================= */
S.LogoWrapper = styled.div`
  width: 3rem;
  cursor: pointer;
`;

/* ============================== Nav List ================================= */

S.NavListContainer = styled.div`
  width: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

/* ====================== Cart Icon ====================== */

S.CartIconWrapper = styled.div`
  position: relative;
`;

S.CartIcon = styled.i`
  color: ${(props) => props.theme.cartIcon};
  opacity: 0.8;
  font-size: 1.4rem;
  cursor: pointer;
`;

/* ====================== Cart Icon -- > 1 notification ====================== */

S.CartItemsQuantityContainer = styled.div`
  position: absolute;
  top: -5px;
  right: -12px;
  background: red;

  --size: 20px;
  height: var(--size);
  width: var(--size);
  border-radius: 100%;

  display: grid;
  place-items: center;
`;

S.CartItemsQuantityText = styled.span`
  color: white;
  font-weight: 700;
  font-size: 0.8rem;
`;

/* ====================== SVG btn -> Float Nav ====================== */

S.NavIconContainer = styled(TooltipWrapper)`
  all: unset;
  --size: 40px;
  width: var(--size);
  height: var(--size);
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: ${rgba("#b2becd", 0.2)};
  }

  &.active {
    background: ${rgba("#b2becd", 0.2)};
  }
`;

S.NavIcon = styled(NavIcon)`
  fill: var(--gray1);
`;

// ============================= ToolTips =========================
S.LanguageToolTip = styled(ReactToolTip)`
  background: var(--gray4) !important;
  font-family: "Roboto", sans-serif;
`;

export default S;
