import React from "react"
import s from "./Profile.css"
import Profile from "./Profile";
import {connect} from "react-redux";
import {apdateStatus, getUserProfile, setUserStatus} from "../../redux/profile-reducer";
import { useParams} from "react-router-dom";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";


export function withRouter(Children) {
    return (props) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let usersId = this.props.match.params.userId
        if (!usersId){
            usersId = this.props.myUserId
        }
        this.props.getUserProfile(usersId)
        this.props.setUserStatus(usersId)

    }

    render() {
        return (
            <div className={s.profile}>
                <Profile profile={this.props} userId={this.props.match.params.userId} myId={this.props.myUserId}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile,
    status: state.profilePage.status,
    myUserId: state.auth.Id
})

export default compose(
    withRouter,
    // withAuthRedirect,
    connect(mapStateToProps, { getUserProfile , setUserStatus, apdateStatus})
) (ProfileContainer)
