import CartActionTypes from "./cart.types";

export const setIsGettingCartAppsTrue = () => ({
  type: CartActionTypes.SET_GETTING_CART_APPS_TRUE
})

export const setIsGettingCartAppsFalse = () => ({
  type: CartActionTypes.SET_GETTING_CART_APPS_False
})

export const populateCartApps = (apps) => ({
  type: CartActionTypes.POPULATE_CART_APPS,
  apps
})

export const getAppsInCartStart = () => ({
  type: CartActionTypes.GET_CART_APPS_START,
})
export const getAppsInCartSuccess = () => ({
  type: CartActionTypes.GET_CART_APPS_SUCCESS,
})
export const getAppsInCartFailure = () => ({
  type: CartActionTypes.GET_CART_APPS_FAILURE,
})

export const addAppToCartStart = (appId) => ({
  type: CartActionTypes.ADD_APP_START,
  appId
})

export const addAppToCartSuccess = () => ({
  type: CartActionTypes.ADD_APP_SUCCESS
})

export const addAppToCartFailure = () => ({
  type: CartActionTypes.ADD_APP_FAILURE
})

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM_CART,
  payload: item,
});

export const removeItem = (appId) => ({
  type: CartActionTypes.REMOVE_ITEM_CART,
  appId
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const toggleCartPopUp = () => ({
  type: CartActionTypes.TOGGLE_CART_POPUP_HIDDEN,
});

export const closeCartPopUp = () => ({
  type: CartActionTypes.CLOSE_CART_POPUP,
});

export const addItemPriceToTotal = (price) => ({
  type: CartActionTypes.ADD_ITEM_PRICE,
  payload: price,
});
export const minusItemPriceToTotal = (price) => ({
  type: CartActionTypes.MINUS_ITEM_PRICE,
  payload: price,
});

export const removeAppFromCartStart = (appId, appPrice) => ({
  type: CartActionTypes.REMOVE_APP_FROM_CART_START,
  appId,
  appPrice,
})

export const moveToWishList = (item) => ({
  type: CartActionTypes.MOVE_TO_WISHLIST,
  payload: item,
});

// ================= WishList Actions =================
export const addWishListItem = (item) => ({
  type: CartActionTypes.ADD_ITEM_WISHLIST,
  payload: item,
});

export const removeWishListItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM_WISHLIST,
  payload: item,
});

export const toggleWishListItem = (item) => ({
  type: CartActionTypes.TOGGLE_ITEM_WISHLIST,
  payload: item,
});

export const moveToCartList = (item) => ({
  type: CartActionTypes.MOVE_TO_CARTLIST,
  payload: item,
});
