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
}

const messagesReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: state.messages.length + 1,
                m: action.textMessage
            }
            return  {
                ...state,
                messages: [...state.messages, newMessage],
                newMessage:""
            }
        }
    }
    return state
}


export const addMessage = (textMessage) => {
    return {type: ADD_MESSAGE, textMessage}
}


export default messagesReducer;