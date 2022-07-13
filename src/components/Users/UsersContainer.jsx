import React from "react";
import {connect} from "react-redux";
import AllUsers from "./AllUsers";
import {followAC, setUsersAC, unfollowAC} from "../../redux/Users-reducer";

let mapStateToProps =(state) =>{
    return {
        users: state.allUsersPage.users
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (AllUsers)
export default UsersContainer