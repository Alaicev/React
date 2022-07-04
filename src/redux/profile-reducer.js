const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST = "CHANGE-NEW-POST";

const propfileReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText
            }
            if (state.newPostText.length > 20) {
                alert("Слишком большой текст")
            } else {
                state.posts.push(newPost)
                state.newPostText = ""
            }
            break;
        case CHANGE_NEW_POST:
            state.newPostText = action.newText
            break;
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