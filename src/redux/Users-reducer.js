const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


let initialStore = {
    users: [
        {id: 1, photo:"https://www.meme-arsenal.com/memes/639a19b1249a4f1d9df7baf2c7bbfb5b.jpg", userName: "Dmitriy", follower: true, cite: "i am a boss", location: {city: "Saratov", country: "Russia"}},
        {id: 2, photo:"http://sun9-48.userapi.com/impf/aQSkgtn1Fem9J4OAV2n38_8JEvP7jESLek6yog/KDzceDEnCQQ.jpg?size=604x453&quality=96&sign=4bae3199771b7cf8a608d6778c0a7068&type=album", userName: "Roman", follower: false, cite: "vr ar", location: {city: "Saratov", country: "Russia"}},
        {id: 3, photo:"https://madhunter.ru/wp-content/uploads/2019/11/SHakal-870x400.jpg",userName: "Andrey", follower: false, cite: "llolo", location: {city: "Saratov", country: "Russia"}}
    ],
    text: "text"
}

const usersReducer = (state = initialStore, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users:state.users.map( u => {
                    if (u.id === action.userID) {
                        return {...u, follower: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return  {
                ...state,
                users:state.users.map( u => {
                    if (u.id === action.userID) {
                        return {...u, follower: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users:[...state.users, ...action.users]}
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
    return{
        type:SET_USERS, users
    }
}

export default usersReducer