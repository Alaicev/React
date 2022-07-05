import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

let store = {
    _state: {
        navBar: {
            nav: [
                {nameLink: "Profile", link: "/"},
                {nameLink: "Message", link: "/dialogs"},
                {nameLink: "News", link: "/news"},
                {nameLink: "Music", link: "/music"},
                {nameLink: "Settings", link: "/settings"}
            ]
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Idi nah"},
            ],
            newPostText: ""
        },
        messagePage: {
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
    },
    getState() {
        return this._state
    },
    _rerender() {

    },
    subscribe(observer) {
        this._rerender = observer
    },
    dispatch(action) {

        profileReducer(this._state.profilePage, action)
        messagesReducer(this._state.messagePage, action)
        this._rerender()
    }
}


export default store