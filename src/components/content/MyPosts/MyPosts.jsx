import React from "react"
import s from "./MyPosts.module.css"
import Post from "./post/Post";
import {addPostActionCreater, updateNewPostActionCreater} from "../../../redux/state";


const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} id={p.id}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch( addPostActionCreater() )
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let newVar = updateNewPostActionCreater(text);
        props.dispatch(newVar)
    }

    return (
        <div className={s.posts}>
            <div>
              <textarea name="" onChange={ onPostChange }
                        ref={newPostElement} id="text" cols="120" rows="3" value={props.newPostText}></textarea>
            </div>
            <div>
                <button className="{s.btn}" onClick={ addPost }>Add post</button>
            </div>
            <h3>My posts</h3>
            <div className={s.postList}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts