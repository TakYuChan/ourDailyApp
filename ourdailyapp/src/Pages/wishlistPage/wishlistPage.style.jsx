import styled from "styled-components";

const S = {};

/* ========================== Render Option wishlist ========================== */
S.WishlistMAX849 = styled.div``;

S.WishlistMIN850 = styled.div``;

S.PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

/* ========================== content main ========================== */
S.ContentContainer = styled.div`
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, 260px);

  justify-content: center;

  gap: 2rem;

  ${S.WishlistMAX849} {
    display: none;
  }

  @media screen and (max-width: 849px) {
    display: flex;
    flex-direction: column;
    width: 100%;

    ${S.WishlistMAX849} {
      display: flex;
      flex-direction: column;
    }

    ${S.WishlistMIN850} {
      display: none;
    }
  }
`;

/* ========================== Wishlist item card ========================== */

S.CardWrapper = styled.div`
  position: relative;
  box-shadow: 2px 4px 40px rgba(19, 15, 235, 0.1);
  transition: box-shadow 0.4s ease-in-out;
  height: 320px;

  cursor: pointer;

  --borderRadius: 10px;
  border-radius: var(--borderRadius);

  &:hover {
    box-shadow: 0px 0px 0px 1px #ade1c7;
    border: 1px solid #ade1c7;
    transition: all linear 0.1s;
  }
`;

S.ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
`;

S.Image = styled.img`
  border-top-left-radius: var(--borderRadius);
  border-top-right-radius: var(--borderRadius);
`;

// ========== card-bottom-part ============
S.CardBottomWrapper = styled.div`
  padding: 0 1em;
  padding-top: 0.7em;
`;

S.ItemTitleText = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--blue-dark);
`;

S.ItemCreatorText = styled.p`
  font-size: 0.9rem;
  color: var(--blue-light);
`;

S.BtnAndPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3em;
`;

S.BtnAddToCart = styled.button`
  all: unset;
  font-size: 0.8rem;
  padding: 0.4em 1em;
  background: var(--blue);
  color: white;
  cursor: pointer;
  user-select: none;
`;

S.TotalPriceText = styled.span`
  font-weight: 700;
  font-size: 1.8rem;
`;

S.PriceText = styled.span`
  margin-left: 0.1em;
`;

/* ====================== element - absolute ====================== */
S.IconHeart = styled.i`
  position: absolute;
  color: red;
  top: 5%;
  right: 5%;
  font-size: 1.2rem;
`;

// =============== Render 3: EMPTY wishlist =================
S.EmptyWishlistContainer = styled.div`
  height: 50vh;
  width: 100%;
  padding: 2em;
  text-align: center;
  display: grid;
  place-content: center;
  align-items: center;

  h1 {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
  }

  .icon-Empty {
    font-size: clamp(4rem, 8vw, 8rem);
  }
`;

export default S;
