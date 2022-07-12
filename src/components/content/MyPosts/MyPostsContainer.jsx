import React from "react"
import {addPostActionCreater, updateNewPostActionCreater} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostActionCreater: (text) => {
            dispatch(updateNewPostActionCreater(text))
        },
        addPostActionCreater: () => {
            dispatch(addPostActionCreater())
        }
    }


}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer