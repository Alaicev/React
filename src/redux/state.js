let store = {
    _state: {
        navBar: {
            nav: [
                {nameLink: "Profile", link: "/profile"},
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
            ]
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
        if (action.type === "ADD-POST") {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText
            }
            if (this._state.profilePage.newPostText.length > 50) {
                alert("Слишком большой текст")
            } else {
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ""
                this._rerender(this._state)
            }
        } else if (action.type === "CHANGE-NEW-POST") {
            this._state.profilePage.newPostText = action.newText
            this._rerender(this._state)
        }
    },
    addPost() {

    },
    changeNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._rerender(this._state)
    },
}


export default store