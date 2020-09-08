import SignUpFromActionTypes from "./signUpForm.types";

export const setClickedAlertSvg = (target) => ({
    type: SignUpFromActionTypes.SET_CLICKED_ALERTSVG,
    target,
})