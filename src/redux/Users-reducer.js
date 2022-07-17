const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const CURRENT_PAGE = "CURRENT-PAGE"
const TOTAL_USERS = "TOTAL-USERS"


let initialStore = {
    users: [],
    pageSize: 10,
    totalUserCount: 50,
    currentPage: 4
}


const usersReducer = (state = initialStore, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, follower: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, follower: false}
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
    }
    return state
}

export const followAC = (userID) => {
    return {
        type: FOLLOW, userID
    }
}
export const unfollowAC = (userID) => {
    return {
        type: UNFOLLOW, userID
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
}
export const currentPageAC = (number) => {
    return{type: CURRENT_PAGE, number}
}
export const totalUsersAC = (number) => {
    return{type: TOTAL_USERS, number}
}

export default usersReducer