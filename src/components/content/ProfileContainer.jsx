import React from "react"
import s from "./Profile.css"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import withAuthRedirect from "../hoc/withAuthRedirect";


export function withRouter(Children) {
    return (props) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let usersId = this.props.match.params.userId
        this.props.getUserProfile(usersId)
    }

    render() {
        return (
            <div className={s.profile}>
                <Profile profile={this.props}/>
            </div>
        )
    }
}

let authProfileComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile,
})

export default connect(mapStateToProps, { getUserProfile})(withRouter(authProfileComponent))