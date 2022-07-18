import React from "react"
import s from "./Profile.css"
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component{
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/profile/2")
            .then(data => this.props.setUsersProfile(data.data))
    }

    render () {
        return (
            <div className={s.profile}>
                <Profile profile={this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile
})

export default connect (mapStateToProps, {setUsersProfile}) (ProfileContainer)