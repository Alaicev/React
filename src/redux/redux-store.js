import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./auth-peducer";
import thunk from "redux-thunk";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    allUsersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

window.state = store

export default store