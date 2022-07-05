const NEW_MESSAGE = "NEW-MESSAGE"
const ADD_MESSAGE = "ADD-MESSAGE"

let initialState = {
    dialogs: [
        {id: 1, name: "Diman"},
        {id: 2, name: "Sanya"},
        {id: 3, name: "Andrey"},
        {id: 4, name: "Roma"}
    ],
    messages: [
        {id: 1, m: "Андрюшка прям заебал пиздец как"},
        {id: 2, m: "Я его рот ебал!!!!!!"}
    ],
    newMessage: ""
}

const messagesReducer = (state = initialState, action) => {

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