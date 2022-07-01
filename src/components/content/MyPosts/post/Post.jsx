import React from "react"
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.post}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeIuKElSOTid6MF787c7UTMwFPgQa7oF1ew&usqp=CAU"
                alt=""
            />
            <div className={s.text}>
                <h3>Диман</h3>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Post