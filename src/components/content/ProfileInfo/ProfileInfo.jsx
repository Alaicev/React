import React from "react"
import Preloader from "../../common/preloader";
import ProfileImage from "./../../../assets/images/149071.png"
import ProfileStatus from "./status/profileStatus";


const ProfileInfo = (props) => {
    if (!props.profile.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className="profile">
                <img src={props.profile.profile.photos.large?props.profile.profile.photos.large: ProfileImage} alt=""/>
                <h2>{props.profile.profile.fullName}</h2>
                <ProfileStatus status={props.profile.status} apdateStatus={props.profile.apdateStatus} userId={props.userId} myId={props.myId}/>
                {/*<p>{props.profile.profile.lookingForAJobDescription}</p>*/}
                <p>My profile</p>
            </div>
        </div>
    )
}

export default ProfileInfo