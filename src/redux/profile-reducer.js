import {getStatus, profileAPI, updateStatus} from "../api/api";

const ADD_POST = "ADD-POST"
const SET_USERS_PROPILE = "SET-USERS-PROPILE"
const SET_USER_STATUS = "SET_USER_STATUS"


let initialStore = {
    posts: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Idi nah"},
    ],
    newPostText: "",
    userProfile:null,
    status:""
}

const propfileReducer = (state = initialStore, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_USERS_PROPILE:
            return {
                ...state,
                userProfile: {...action.Profile}
            }
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.textPost
            }
            if (action.textPost !== "") {
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                }
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
    }
    return state
}

export const addPostActionCreater = (textPost) => {
    return {
        type: ADD_POST,
        textPost
    }
}


export const setUserStatusAC = (status) => ({type: SET_USER_STATUS, status})

export const setUsersProfile =(Profile) =>({type:SET_USERS_PROPILE, Profile})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI(userId)
            .then(data =>
                dispatch(setUsersProfile(data.data)))
    }
}

export const setUserStatus = (userId) => {
    return (dispatch) => {
        getStatus(userId)
            .then(responce => dispatch(setUserStatusAC(responce.data)))
    }
}

export const apdateStatus = (status) => {
    return (dispatch) => {
        updateStatus(status)
            .then(responce => {
                if (responce.data.resultCode===0) {
                    dispatch(setUserStatusAC(status))
                }
            })
    }
}


export default propfileReducer