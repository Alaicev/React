
const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST = "CHANGE-NEW-POST";
const SET_USERS_PROPILE = "SET-USERS-PROPILE"

let initialStore = {
    posts: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Idi nah"},
    ],
    newPostText: "",
    userProfile:null
}

const propfileReducer = (state = initialStore, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_USERS_PROPILE:
            return {
                ...state,
                userProfile: {...action.Profile}
            }
        case CHANGE_NEW_POST:
            return {
                ...state,
                newPostText: action.newText
            }
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText
            }
            if (state.newPostText !== "") {
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ""
                }
            }
    }
    return state
}

export const addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostActionCreater = (text) => ({type: CHANGE_NEW_POST, newText: text})

export const setUsersProfile =(Profile) =>({type:SET_USERS_PROPILE, Profile})


export default propfileReducer