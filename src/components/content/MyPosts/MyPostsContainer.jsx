import React from "react"
import {addPostActionCreater, updateNewPostActionCreater} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";



const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer >{ (store) => {
            let state= store.getState()

            let addPost = () => {
                store.dispatch( addPostActionCreater ())
            }

            let onPostChange = (text) => {
                store.dispatch(updateNewPostActionCreater(text))
            }

            return  <MyPosts updateNewPostActionCreater={onPostChange} addPostActionCreater={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>
        }
        }
    </StoreContext.Consumer>
    )}

export default MyPostsContainer