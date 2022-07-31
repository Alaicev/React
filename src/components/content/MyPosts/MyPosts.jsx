import React from "react"
import s from "./MyPosts.module.css"
import Post from "./post/Post";
import {Form, Field} from "react-final-form";


const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} id={p.id} key={p.id} />)


    let addPost = (textPost) => {
        props.addPostActionCreater(textPost)
    }


    return (
        <div className={s.posts}>
            <Form onSubmit={(data) => data.textarea? addPost(data.textarea): null}
                  render={({handleSubmit}) => (
                      <form onSubmit={handleSubmit}>
                          <Field component={"textarea"} name={"textarea"} />
                          <button type={"submit"}> go </button>
                      </form>
                  )}
            />
            <div className={s.postList}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts