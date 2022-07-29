import React from "react";
import {addMessage, addNewMessage} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagesPage,
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



export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps)) (Dialogs)