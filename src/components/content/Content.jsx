import React from "react"
import s from "./Content.module.css"

const ContentBlock = () => {
    return (
        <div className={s.profile} >
          <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-fotografii.jpg" />
        <div className="profile">
          <p>My profile</p>
        </div>
        <div className={s.posts}>
          <div className={s.item}>post 1</div>
          <div className={s.item}>post 2</div>
        </div>
      </div>
    )
}

export default ContentBlock