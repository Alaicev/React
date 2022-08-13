import React from "react"
import s from "./Profile.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import background from "./../../assets/images/dlinnye-fotografii.jpg"
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {


    return (
        <div className={s.profile}>
            <img src={background} alt="logo" />
            <ProfileInfo profile={props.profile} userId={props.userId} myId={props.myId}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile