import React from "react"
import "./Content.css"

const ContentBlock = () => {
    return (
        <div className="content">
          <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-fotografii.jpg" />
        <div className="profile">
          <p>My profile</p>
        </div>
        <div className="posts">
          <div className="item">post 1</div>
          <div className="item">post 2</div>
        </div>
      </div>
    )
}

export default ContentBlock