import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";



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
        </div>
    )
}

export default Dialogs