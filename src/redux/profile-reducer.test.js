import profileReducer, {addPostActionCreater} from "./profile-reducer";

let store = {
    posts: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Idi nah"},
    ],
    newPostText: "",
    userProfile:null,
    status:"",
}

test('Add new post', () => {
    let action = addPostActionCreater("hello")
    let newState = profileReducer(store,action)

expect(newState.posts.length).toBe(3)
});

test('delete text', () => {
    let action = addPostActionCreater("hello")
    let newState = profileReducer(store,action)

    expect(newState.posts.length).toBe(3)
});