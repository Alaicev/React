import React from "react";
import {addMessage, addNewMessage} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>{(store) => {
            let state = store.getState()

            let addText = (text) => {
                store.dispatch(addNewMessage(text))
            }

            let addMessages = () => {
                store.dispatch(addMessage())
            }
            return < Dialogs addMessages={addMessages} addText={addText}
                             dialogs={state.messagesPage.dialogs}
                             messages={state.messagesPage.messages}
                             newMessage={state.messagesPage.newMessage}/>
        }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer