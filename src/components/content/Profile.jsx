import React from "react"
import s from "./Profile.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {


    return (
        <div className={s.profile}>
            <img src="https://interier-foto.ru/wp-content/uploads/dlinnye-fotografii.jpg" alt="logo" />
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile