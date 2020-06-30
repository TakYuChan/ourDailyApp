export const addItemToCart = (state, cartItemToAdd) => {
  //Check if item is already in the cart
  //!!Each application can be bought once and added once only
  const itemExist = state.cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (itemExist === undefined) {
    //IF wishlist has the cartItemToAdd then
    //remove the cartItemToAdd from the wishlist
    let newWishList = [];
    if (state.wishListItems !== null) {
      newWishList = state.wishListItems.filter(
        (wishListItem) => wishListItem.id !== cartItemToAdd.id
      );
    }
    //Add item
    state.cartItems.unshift(cartItemToAdd);

    //Add price
    state.itemTotalPrice += cartItemToAdd.price;
    return {
      ...state,
      cartItems: state.cartItems,
      itemTotalPrice: state.itemTotalPrice,
      wishListItems: newWishList,
    };
  } else {
    return state;
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const moveItemToWishlist = (state, cartItemToMove) => {
  removeItemFromCart(state.cartItems, cartItemToMove);
  let newState = addWishListItem(state, cartItemToMove);
  return newState;
};

// ================= WishList Utils =================
export const addWishListItem = (state, itemToAdd) => {
  const itemExist = state.wishListItems.find(
    (item) => item.id === itemToAdd.id
  );

  if (itemExist === undefined) {
    let newCartItems = state.cartItems;
    //====== If the itemToAdd already exist in the cartItemsList ======
    if (
      state.cartItems.find((cartItem) => cartItem.id === itemToAdd.id) !==
      undefined
    ) {
      //CHECK 1: IF cartItemList has the wishListItemToAdd then
      //remove the wishListItemToAdd from the cartItemList

      newCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== itemToAdd.id
      );

      //CHECK 2: Also need to deduct the itemTotalPrice for the cartItems total price
      state.itemTotalPrice -= itemToAdd.price;
    }
    //Add item
    state.wishListItems.unshift(itemToAdd);
    return {
      ...state,
      wishListItems: state.wishListItems,
      cartItems: newCartItems,
      itemTotalPrice: state.itemTotalPrice,
    };
  } else {
    return state;
  }
};

export const toggleWishListItems = (state, itemToToggle) => {
  const itemExist = state.wishListItems.find(
    (item) => item.id === itemToToggle.id
  );

  return itemExist === undefined
    ? addWishListItem(state, itemToToggle)
    : {
        ...state,
        wishListItems: removeItemFromCart(state.wishListItems, itemToToggle),
      };
};

export const moveItemToCartList = (state, wishListItemToMove) => {
  removeItemFromCart(state.wishListItems, wishListItemToMove);
  let newState = addItemToCart(state, wishListItemToMove);
  return newState;
};
