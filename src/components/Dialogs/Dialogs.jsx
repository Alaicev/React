import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {addMessage, addNewMessage} from "../../redux/messages-reducer";



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div>
            <div>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

const Message = (props) => {
    return (
        <div>
            <p>{props.m}</p>
        </div>
    )
}

const Dialogs = (props) => {


    let addText = (e) => {
        let text = e.target.value
        let addText = addNewMessage(text)
        props.dispatch(addText)
    }

    let addMessages = () => {
        props.dispatch(addMessage())
    }


    let dialogElement = props.dialogs.map( i => <DialogItem name={i.name} id={i.id} />);
    let messageElement = props.messages.map( i => <Message m={i.m} id={i.id} />)

    return (
        <div className={s.dialogs}>
            <div className="userList">
                {dialogElement}
            </div>
            <div className={s.messageList}>
                {messageElement}
            </div>
            <div className={s.addMessage}>
                <textarea name="message" id="" cols="100"
                          onChange={ addText }
                          value={props.newMessage} rows="2"></textarea>
                <button onClick={addMessages}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs