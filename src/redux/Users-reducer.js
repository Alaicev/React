import {followingAPI, getUsersAPI, unfollowingAPI} from "../api/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const CURRENT_PAGE = "CURRENT-PAGE"
const TOTAL_USERS = "TOTAL-USERS"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const FOLLOWING_IN_PROGRESS = "FOLLOWING-IN-PROGRESS"


let initialStore = {
    users: [],
    pageSize: 10,
    totalUserCount: 50,
    currentPage: 1,
    isFetching: false,
    followInProgress: false
}


const usersReducer = (state = initialStore, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case CURRENT_PAGE:
            return {...state, currentPage: action.number}
        case TOTAL_USERS:
            return {...state, totalUserCount: action.number}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case FOLLOWING_IN_PROGRESS:
            return {...state, followInProgress: action.propgess}
    }
    return state
}

export const follow = (userID) => {
    return {
        type: FOLLOW, userID
    }
}
export const unfollow = (userID) => {
    return {
        type: UNFOLLOW, userID
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS, users
    }
}
export const setCurrentPages = (number) => {
    return {type: CURRENT_PAGE, number}
}
export const setTotalUsers = (number) => {
    return {type: TOTAL_USERS, number}
}
export const toggleIsFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}
export const toggleIsFollowing = (propgess) => {
    return {type: FOLLOWING_IN_PROGRESS, propgess}
}


export const getUsersThunkCreater = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let response = await getUsersAPI(currentPage, pageSize)

        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.data.items))
        dispatch(setTotalUsers(response.data.totalCount))


    }
}


export const followUserThunkCreater = (userId) => {
    return async (dispatch) => {
        let methodAPI =followingAPI.bind(followingAPI)
        let methodAction = follow

        dispatch(toggleIsFollowing(true))
        let response = await methodAPI(userId)

        if (response.data.resultCode === 0) {
            dispatch(methodAction(userId))
        }
        dispatch(toggleIsFollowing(false))

    }
}

export const unFollowUserThunkCreater = (userId) => {
    return async (dispatch) => {
        let methodAPI =unfollowingAPI.bind(followingAPI)
        let methodAction = unfollow

        dispatch(toggleIsFollowing(true))
        let response = await methodAPI(userId)

        if (response.data.resultCode === 0) {
            dispatch(methodAction(userId))
        }
        dispatch(toggleIsFollowing(false))

    }
}


export default usersReducer