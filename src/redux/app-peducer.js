import {authMeCreater} from "./auth-peducer";

const INITIALIZER = "INITIALAIZER"

let initialState = {
    isInitialised: false
}

let appReduser = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case INITIALIZER:
            return {
                ...state,
                isInitialised: true
            }
    }
    return state
}

export const appInitialised = () => {
    return {type:INITIALIZER}
}

export const Initialize = () => (dispatch) => {
    let promis = dispatch(authMeCreater())
    promis.then(() => dispatch(appInitialised()))
}

export default appReduser