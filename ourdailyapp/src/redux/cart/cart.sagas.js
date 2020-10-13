import {takeLeading, takeLatest, call, put, all} from "redux-saga/effects";

import CartActionTypes from "./cart.types";
import {
    addAppToCartSuccess,
    addAppToCartFailure,
    addItem,
    getAppsInCartSuccess,
    getAppsInCartFailure,
    setIsGettingCartAppsTrue,
    setIsGettingCartAppsFalse,
    populateCartApps,
    removeItem,
    minusItemPriceToTotal,
} from "./cart.actions"

import {addAppToCartBackEnd, getCartApps, deleteAppFromCart} from "./cart.requests";

// ================= Sagas ==================
function* onAddAppToCartStart() {
    yield takeLeading(
        CartActionTypes.ADD_APP_START,
        addAppToCartStart
    )
}

function* onGetCartAppsStart() {
    yield takeLeading(
        CartActionTypes.GET_CART_APPS_START,
        getCartAppsStart
    )
}

function* onRemoveAppFromCartStart() {
    yield takeLeading(
        CartActionTypes.REMOVE_APP_FROM_CART_START,
        removeAppFromCartStart,
    )
}

export default function* cartSaga() {
    yield all([call(onAddAppToCartStart), call(onGetCartAppsStart), call(onRemoveAppFromCartStart)]);
}

// ================= other generator functions ==================

function* addAppToCartStart({appId}) {
    try {
        console.log("start");
        // 1) add app to user cart via backend
        const appDetailsRes = yield call(addAppToCartBackEnd, appId);
        // 2) Add app to cart within react state
        yield put(addItem(appDetailsRes.data.data.app));
        yield put(addAppToCartSuccess());
    } catch (error) {
        yield put(addAppToCartFailure());
    }
}

function* getCartAppsStart() {
    try {
        // Start Spinner
        yield put(setIsGettingCartAppsTrue());
        // 1) Get Cart Apps from backend
        const getCartAppsRes = yield call(getCartApps);
        console.log("getCartAppsStart", getCartAppsRes)
        // 2) Populate Cart Apps to react state
        yield put(populateCartApps(getCartAppsRes.data.data.apps));
        // Stop Spinner
        yield put(setIsGettingCartAppsFalse());
        yield put(getAppsInCartSuccess());
    } catch (error) {
        // @error
        yield put(getAppsInCartFailure());
    }
}

function* removeAppFromCartStart({appId, appPrice}) {
    try {
        // 1) Modify the Database for deleting app from cart
        yield call(deleteAppFromCart, appId);

        // 2) Remove app from react cart state
        yield put(removeItem(appId));

        // 3) Recalculate the total price for the apps in cart
        yield put(minusItemPriceToTotal(appPrice));
    } catch (error) {
        
    }
}