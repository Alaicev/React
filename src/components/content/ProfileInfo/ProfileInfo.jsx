import React from "react"
import Preloader from "../../common/preloader";
import ProfileImage from "./../../../assets/images/149071.png"
import ProfileStatusHooks from "./status/profileStatusHocks";


const ProfileInfo = (props) => {
    if (!props.profile.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className="profile">
                <img src={props.profile.profile.photos.large?props.profile.profile.photos.large: ProfileImage} alt=""/>
                <h2>{props.profile.profile.fullName}</h2>
                <ProfileStatusHooks status={props.profile.status} updateStatus={props.profile.apdateStatus} userId={props.userId} myId={props.myId}/>
                <p>My profile</p>
            </div>
        </div>
    )
}

export default ProfileInfo