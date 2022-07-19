const SET_USERS_DATA = "SET_USERS_DATA"


let initialState = {
    Id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
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

export default authReducer