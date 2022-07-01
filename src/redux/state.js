let store = {

}

let rerender = () => {

}

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        message: state.profilePage.newPostText
    }
    if (state.profilePage.newPostText.length > 50) {
        alert("Слишком большой текст")
    } else {
        state.profilePage.posts.push(newPost)
        state.profilePage.newPostText = ""
        rerender(state)
    }
}

export let changeNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerender(state)
}

export const subscribe = (observer) => {
    rerender = observer
}


export default state