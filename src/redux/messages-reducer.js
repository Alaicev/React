const NEW_MESSAGE = "NEW-MESSAGE"
const ADD_MESSAGE = "ADD-MESSAGE"

const messagesReducer = (state, action) => {

    switch (action.type) {
        case NEW_MESSAGE:
            state.newMessage = action.text
            break;
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                m: state.newMessage
            }
            state.messages.push(newMessage)
            state.newMessage = ""
            break;
    }
    return state
}

export const addNewMessage = (text) => {
    return {type: NEW_MESSAGE, text: text}
}

export const addMessage = () => {
    return {type: ADD_MESSAGE}
}


export default messagesReducer;