import {Auth, logaut, loginMe} from "../api/api";


const SET_USERS_DATA = "SET_USERS_DATA"
const SET_ERROR = "SET_ERROR"


let initialState = {
    Id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    messageError: null
}

let authReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                Id: action.data.Id,
                email: action.data.email,
                login: action.data.login,
                isAuth: action.data.isAuth,
                messageError: action.data.messageError
            }
        case SET_ERROR:
            return {
                ...state,
                messageError: action.messageError
            }
    }
    return state
}

export const setUserData = (Id, email, login, isAuth, messageError) => {
    return {type: SET_USERS_DATA, data: {Id, email, login, isAuth, messageError}}
}

export const setError = (messageError) => {
    return {type: SET_ERROR, messageError}
}

export const authMeCreater = () => {
    return async (dispatch) => {
        let response = await Auth()

                if (response.data.resultCode === 0) {
                    let {id, email, login,} = response.data.data
                    dispatch(setUserData(id, email, login, true, null))
                }

    }
}


export const LoginMe = (email, password, rememberMe) => async (dispatch) => {
    let response = await loginMe(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(authMeCreater())
    } else {
        dispatch(setError(response.data.messages))
    }

}

export const Logout = () => async (dispatch) => {
    let response = await logaut()

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}
export default authReducer