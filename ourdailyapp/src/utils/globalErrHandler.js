import {store} from "../redux/store";

// import {}

function globalErrHandler(err, targetComponent) {
    console.log(err.response);

    const {scope} = err.response.data.error;

    // 1) Depends on err.scope to determine -> globalError reducer || local alert
    if(scope === "global") {

    } else if (scope === "local") {
        switch(targetComponent) {
            default:
                console.log("Scope === local but not being handled!");
                break;
        }
    }
}

export default globalErrHandler;