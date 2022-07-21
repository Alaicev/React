import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPages,
    getUsersThunkCreater,
} from "../../redux/Users-reducer";
import AllUsers from "./AllUsers"
import reactLogo from "./../../logo.svg"
import s from "./users.module.css"

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
            {this.props.isFetching ? <img src={reactLogo} className={s.imageAnimation}/> :
                <AllUsers currentPage={this.props.currentPage}
                          pageSize={this.props.pageSize}
                          totalUserCount={this.props.totalUserCount}
                          users={this.props.users}
                          clickPage={this.clickPage}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
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
        isFetching: state.allUsersPage.isFetching
    }
}


const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPages,
    getUsersThunkCreater
})(UsersAPIComponent)
export default UsersContainer