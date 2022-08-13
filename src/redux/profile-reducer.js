import {getStatus, profileAPI, updateStatus} from "../api/api";

const ADD_POST = "ADD-POST"
const SET_USERS_PROFILE = "SET-USERS-PROFILE"
const SET_USER_STATUS = "SET_USER_STATUS"


let initialStore = {
    posts: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Idi nah"},
    ],
    newPostText: "",
    userProfile: null,
    status: "",
}

const profileReducer = (state = initialStore, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_USERS_PROFILE:
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
                    posts: [...state.posts, newPost]
                }
            } break
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

export const setUsersProfile = (Profile) => ({type: SET_USERS_PROFILE, Profile})

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI(userId)
        dispatch(setUsersProfile(response.data))
    }
}

export const setUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await getStatus(userId)
        dispatch(setUserStatusAC(response.data))
    }
}

export const apdateStatus = (status) => {
    return async (dispatch) => {
        let response = await updateStatus(status)

        if (response.data.resultCode === 0) {
            dispatch(setUserStatusAC(status))
        }

    }
}


export default profileReducer