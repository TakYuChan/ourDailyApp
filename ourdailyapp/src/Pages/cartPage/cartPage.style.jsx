import styled, { css } from "styled-components";

const S = {};

const CartAndWishlistWrapperStyles = css`
  border: ${(props) => props.theme.cartPage.cartWishlistBorder};
  margin-top: 1em;
  margin-bottom: 1em;
`;

S.PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// =============== content main ==================
S.ContentContainer = styled.div`
  width: 90%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    width: 75%;
    flex-direction: row;
  }
`;

// ============================ Left side ============================
S.LeftWrapper = styled.div`
  @media screen and (min-width: 800px) {
    width: 70%;
    margin-right: 2em;
  }
`;
/* ============= Cart Items ============= */
S.AppInCartText = styled.span`
  font-size: 1.1rem;
`;

S.CartItemsWrapper = styled.div`
  ${CartAndWishlistWrapperStyles}
`;

S.EmptyCartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding: 0 1em;
`;

S.IconCart = styled.i`
  font-size: 6rem;
`;

/* ============= WishList ============= */
S.WishlistWrapper = styled.div`
  ${CartAndWishlistWrapperStyles}
`;

S.EmptyWishlistText = styled.p`
  margin-top: 1em;
  font-size: 0.9rem;
  color: var(--gray3);
`;

S.RecentlyWishlistedText = styled.span`
  font-size: 1.1rem;
`;

// ============================ Right side ============================
S.RightWrapper = styled.div`
  order: -1;
  @media screen and (min-width: 800px) {
    order: initial;
    width: 30%;
  }
`;

// ============== Payment Info ==============
S.PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

S.TotalPriceText = styled.span`
  margin-bottom: 1em;
`;

S.DollarText = styled.span`
  font-size: 2rem;
  font-weight: 700;
  @media screen and (min-width: 800px) {
    display: block;
  }
`;

S.PriceText = styled.span`
  padding-left: 0.1em;
`;

/* ============== Checkout btns with Stripe ============= */
S.BtnCheckout = styled.button`
  all: unset;
  text-align: center;
  background: var(--blue-light);

  color: white;
  font-weight: 700;
  padding: 0.7em 0;
  cursor: pointer;
  margin-bottom: 0.5em;

  &:hover {
    background: var(--blue-dark);
  }

  &:disabled {
    background: var(--gray2);
  }

  & ~ .StripeCheckout {
    display: none !important;
  }
`;

export default S;
