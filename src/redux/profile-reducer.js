const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST = "CHANGE-NEW-POST";

let initialStore = {
    posts: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Idi nah"},
    ],
    newPostText: ""
}

const propfileReducer = (state = initialStore, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case CHANGE_NEW_POST: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            if (state.newPostText !== '') {
                stateCopy.posts.push(newPost)
                stateCopy.newPostText = ""
                return stateCopy
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

export const updateNewPostActionCreater = (text) => {
    return {type: CHANGE_NEW_POST, newText: text}
}

export default propfileReducer