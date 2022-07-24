import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPages,
    getUsersThunkCreater, followUserThunkCreater, unFollowUserThunkCreater,
} from "../../redux/Users-reducer";
import AllUsers from "./AllUsers"
import reactLogo from "./../../logo.svg"
import s from "./users.module.css"
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreater(this.props.currentPage, this.props.pageSize)
    }

    clickPage = (u) => {
        this.props.setCurrentPages(u)
        this.props.getUsersThunkCreater(u, this.props.pageSize)
    }


    render() {
        return <>
            {this.props.isFetching ? <img src={reactLogo} className={s.imageAnimation} alt="logo"/> :
                <AllUsers currentPage={this.props.currentPage}
                          pageSize={this.props.pageSize}
                          totalUserCount={this.props.totalUserCount}
                          users={this.props.users}
                          clickPage={this.clickPage}
                          followInProgress={this.props.followInProgress}
                          followUserThunkCreater ={this.props.followUserThunkCreater}
                          unFollowUserThunkCreater ={this.props.unFollowUserThunkCreater}
                />
            }
        </>
    }
}





let mapStateToProps = (state) => {
    return {
        users: state.allUsersPage.users,
        pageSize: state.allUsersPage.pageSize,
        totalUserCount: state.allUsersPage.totalUserCount,
        currentPage: state.allUsersPage.currentPage,
        isFetching: state.allUsersPage.isFetching,
        followInProgress: state.allUsersPage.followInProgress,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
    setCurrentPages,
    getUsersThunkCreater,
    followUserThunkCreater,
    unFollowUserThunkCreater
}),) (UsersAPIComponent)
