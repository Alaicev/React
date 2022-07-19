import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./auth-peducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    allUsersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers)

window.state = store

export default store