import React from "react";
import {addMessage, addNewMessage} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagePage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessages: () => {
            dispatch(addMessage())
        },
        addText: (text) => {
            dispatch(addNewMessage(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer