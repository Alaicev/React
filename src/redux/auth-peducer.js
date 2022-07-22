import {Auth} from "../api/api";

const SET_USERS_DATA = "SET_USERS_DATA"


let initialState = {
    Id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                Id:action.data.Id,
                email:action.data.email,
                login: action.data.login,
                isAuth: true
            }
    }
    return state
}

export const setUserData = (Id, email, login) => {
    return {type:SET_USERS_DATA, data:{Id, email, login}}
}

export const authMeCreater = () => {
    return (dispatch) => {
        Auth()
            .then(data => {
                if (data.data.resultCode === 0) {
                    let {id, email, login,} = data.data.data
                    dispatch(setUserData(id, email, login))
                }
            })
    }
}

export default authReducer