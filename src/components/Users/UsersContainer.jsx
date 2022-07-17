import React from "react";
import {connect} from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import {currentPageAC, followAC, setUsersAC, totalUsersAC, unfollowAC} from "../../redux/Users-reducer";

let mapStateToProps =(state) =>{
    return {
        users: state.allUsersPage.users,
        pageSize: state.allUsersPage.pageSize,
        totalUserCount: state.allUsersPage.totalUserCount,
        currentPage: state.allUsersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        currentPageSet: (number) => {
            dispatch(currentPageAC(number))
        },
        totalUsersSet: (number) => {
            dispatch(totalUsersAC(number))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersAPIComponent)
export default UsersContainer