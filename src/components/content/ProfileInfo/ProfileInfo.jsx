import React from "react"
import Preloader from "../../common/preloader";


const ProfileInfo = (props) => {
    if (!props.profile.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className="profile">
                <img src={props.profile.profile.photos.large} alt=""/>
                <h2>{props.profile.profile.fullName}</h2>
                <p>My profile</p>
            </div>
        </div>
    )
}

export default ProfileInfo