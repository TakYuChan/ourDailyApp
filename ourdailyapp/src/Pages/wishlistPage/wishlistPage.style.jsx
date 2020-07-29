import styled, { keyframes } from "styled-components";

const S = {};

const bounce = keyframes`0% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
3.4% { -webkit-transform: matrix3d(1.316, 0, 0, 0, 0, 1.407, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.316, 0, 0, 0, 0, 1.407, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
4.7% { -webkit-transform: matrix3d(1.45, 0, 0, 0, 0, 1.599, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.45, 0, 0, 0, 0, 1.599, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
6.81% { -webkit-transform: matrix3d(1.659, 0, 0, 0, 0, 1.893, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.659, 0, 0, 0, 0, 1.893, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
9.41% { -webkit-transform: matrix3d(1.883, 0, 0, 0, 0, 2.168, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.883, 0, 0, 0, 0, 2.168, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
10.21% { -webkit-transform: matrix3d(1.942, 0, 0, 0, 0, 2.226, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.942, 0, 0, 0, 0, 2.226, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
13.61% { -webkit-transform: matrix3d(2.123, 0, 0, 0, 0, 2.332, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.123, 0, 0, 0, 0, 2.332, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
14.11% { -webkit-transform: matrix3d(2.141, 0, 0, 0, 0, 2.331, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.141, 0, 0, 0, 0, 2.331, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
17.52% { -webkit-transform: matrix3d(2.208, 0, 0, 0, 0, 2.239, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.208, 0, 0, 0, 0, 2.239, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
18.72% { -webkit-transform: matrix3d(2.212, 0, 0, 0, 0, 2.187, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.212, 0, 0, 0, 0, 2.187, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
21.32% { -webkit-transform: matrix3d(2.196, 0, 0, 0, 0, 2.069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.196, 0, 0, 0, 0, 2.069, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
24.32% { -webkit-transform: matrix3d(2.151, 0, 0, 0, 0, 1.96, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.151, 0, 0, 0, 0, 1.96, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
25.23% { -webkit-transform: matrix3d(2.134, 0, 0, 0, 0, 1.938, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.134, 0, 0, 0, 0, 1.938, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
29.03% { -webkit-transform: matrix3d(2.063, 0, 0, 0, 0, 1.897, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.063, 0, 0, 0, 0, 1.897, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
29.93% { -webkit-transform: matrix3d(2.048, 0, 0, 0, 0, 1.899, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.048, 0, 0, 0, 0, 1.899, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
35.54% { -webkit-transform: matrix3d(1.979, 0, 0, 0, 0, 1.962, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.979, 0, 0, 0, 0, 1.962, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
36.74% { -webkit-transform: matrix3d(1.972, 0, 0, 0, 0, 1.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.972, 0, 0, 0, 0, 1.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
41.04% { -webkit-transform: matrix3d(1.961, 0, 0, 0, 0, 2.022, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.961, 0, 0, 0, 0, 2.022, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
44.44% { -webkit-transform: matrix3d(1.966, 0, 0, 0, 0, 2.032, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.966, 0, 0, 0, 0, 2.032, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
52.15% { -webkit-transform: matrix3d(1.991, 0, 0, 0, 0, 2.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.991, 0, 0, 0, 0, 2.006, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
59.86% { -webkit-transform: matrix3d(2.006, 0, 0, 0, 0, 1.99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.006, 0, 0, 0, 0, 1.99, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
63.26% { -webkit-transform: matrix3d(2.007, 0, 0, 0, 0, 1.992, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.007, 0, 0, 0, 0, 1.992, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
75.28% { -webkit-transform: matrix3d(2.001, 0, 0, 0, 0, 2.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2.001, 0, 0, 0, 0, 2.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
85.49% { -webkit-transform: matrix3d(1.999, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.999, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
90.69% { -webkit-transform: matrix3d(1.999, 0, 0, 0, 0, 1.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.999, 0, 0, 0, 0, 1.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
100% { -webkit-transform: matrix3d(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); } `;

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

  .icon-Empty {
    font-size: clamp(2rem, 4vw, 4rem);
  }

  h1 {
    font-size: clamp(0.6rem, 2vw, 1.8rem);
    margin-bottom: 3em;
  }

  .animate-bounce {
    animation: ${bounce} 1000ms linear both;
  }
`;

export default S;
