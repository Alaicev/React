import React from "react";
import s from "./Dialogs.module.css"
import {NavLink, Navigate} from "react-router-dom";
import {Form, Field} from "react-final-form";



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


    let addMessages = (textMessage) => {
        props.addMessages(textMessage)
    }


    let dialogElement = props.messagePage.dialogs.map( i => <DialogItem name={i.name} id={i.id} key={i.id} />);
    let messageElement = props.messagePage.messages.map( i => <Message m={i.m} id={i.id} key={i.id} />)

    if (props.auth === false) {
        return <Navigate  to="/login" />
    }

    return (
        <div className={s.dialogs}>
            <div className="userList">
                {dialogElement}
            </div>
            <div className={s.messageList}>
                {messageElement}
            </div>
            <div className={s.addMessage}>
                <Form onSubmit={data => {addMessages(data.textarea)}}
                      validate={values => {
                          const errors = {}
                        if (!values.textarea) {
                            errors.textarea = "None text"
                        }
                        else if (values.textarea.length > 20) {
                            errors.textarea = "Max length 20 "
                        }
                        return errors
                      }}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Field name={"textarea"}>
                            {({input, meta}) => (
                                <div>
                                    <input {...input} type="text" placeholder={"message"}/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <button>Push message</button>
                    </form>
                )}
                />
            </div>
        </div>
    )
}

export default Dialogs